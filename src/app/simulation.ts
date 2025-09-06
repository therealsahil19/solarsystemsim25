import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { LOD } from 'three';
import { gsap } from 'gsap';
import { camera, controls, renderer, scene } from '../scene';
import { CelestialBody, celestialBodyData } from '../data';
import { AU_TO_M, speedDisplayKmPerS } from '../utils/misc';
import { calculateDisplayPosition, getDisplayRadius, ScaleTransition } from '../utils/scaling';
import store from '../state/store';
import { OrbitManager } from '../orbits/OrbitManager';
import { TrailManager } from '../orbits/TrailManager';
import * as dom from '../components/dom';
import { formatDistance, KM_PER_AU } from '../utils/units';
import { instantaneousOrbitalSpeed } from '../orbits/kepler';

export class Simulation {
    public simulation = {
        selectedObject: null as THREE.Object3D | null,
        focusTarget: null as THREE.Object3D | null,
        followTarget: null as THREE.Object3D | null,
        followOffset: new THREE.Vector3(),
        followSmoothing: 0.05,
        isUserInteracting: false,
        isTweening: false,
        asteroidMaterialUniforms: null as { u_time: { value: number } } | null,
        selectedGlow: null as THREE.Mesh | null,
    };

    private scaleTransition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: store.getState().scalePreset,
        toPreset: store.getState().scalePreset,
    };

    private perfState = {
        MAX_DPR: 1.75,
        MIN_SCALE: 0.5,
        dynamicScale: 1.0,
        frameTimes: [] as number[],
        evalInterval: 1000,
        lastEval: performance.now(),
        evalWindow: 60,
        upperMs: 22, // Corresponds to ~45 FPS
        lowerMs: 13, // Corresponds to ~75 FPS
        step: 0.1,
    };

    private celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Object3D; physicsPosition: THREE.Vector3 })[];
    private bodyMap: Map<string, { data: CelestialBody, group: THREE.Group, mesh: THREE.Object3D, physicsPosition: THREE.Vector3 }>;
    private sun: THREE.Object3D | undefined;
    private orbitManager: OrbitManager;
    private trailManager: TrailManager;
    private physicsWorker: Worker;

    constructor(
        celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Object3D; physicsPosition: THREE.Vector3 })[],
        bodyMap: Map<string, { data: CelestialBody, group: THREE.Group, mesh: THREE.Object3D, physicsPosition: THREE.Vector3 }>,
        sun: THREE.Object3D | undefined,
        asteroidUniforms: { u_time: { value: number } }
    ) {
        this.celestialObjects = celestialObjects;
        this.bodyMap = bodyMap;
        this.sun = sun;
        this.simulation.asteroidMaterialUniforms = asteroidUniforms;
        this.orbitManager = new OrbitManager(this.celestialObjects);
        this.trailManager = new TrailManager(this.celestialObjects, scene);
        this.physicsWorker = new Worker(new URL('../physics.worker.ts', import.meta.url), { type: 'module' });
    }

    public start() {
        this.orbitManager.init(scene, this.bodyMap);
        this.trailManager.init();
        this.setupPhysicsWorker();
        this.animate(0);
    }

    private setupPhysicsWorker() {
        const workerBodies = this.celestialObjects.map(body => ({
            name: body.name,
            semiMajorAxis: body.semiMajorAxis,
            eccentricity: body.eccentricity,
            orbitalPeriod: body.orbitalPeriod,
        }));
        this.physicsWorker.postMessage({ command: 'init', payload: { bodies: workerBodies } });
        this.physicsWorker.onmessage = (e: MessageEvent) => {
            if (e.data.type === 'update') {
                const positions = new Float32Array(e.data.positions);
                this.celestialObjects.forEach((body, i) => {
                    const bodyState = this.bodyMap.get(body.id);
                    if (bodyState) {
                        bodyState.physicsPosition.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                    }
                });
            }
        };
    }

    private animate: FrameRequestCallback = (time) => {
        requestAnimationFrame(this.animate);
        const now = time || performance.now();
        const dt = now - ((this.animate as any)._lastTime || now);
        (this.animate as any)._lastTime = now;

        // --- Dynamic Performance Adjustment ---
        const buf = this.perfState.frameTimes;
        buf.push(dt);
        if (buf.length > this.perfState.evalWindow) buf.shift();
        if (now - this.perfState.lastEval >= this.perfState.evalInterval && buf.length > 3) {
            this.perfState.lastEval = now;
            const avg = buf.reduce((s, v) => s + v, 0) / buf.length;
            if (avg > this.perfState.upperMs && this.perfState.dynamicScale > this.perfState.MIN_SCALE) {
                this.perfState.dynamicScale = Math.max(this.perfState.MIN_SCALE, +(this.perfState.dynamicScale - this.perfState.step).toFixed(2));
                this.applyDPR();
            } else if (avg < this.perfState.lowerMs && this.perfState.dynamicScale < 1.0) {
                this.perfState.dynamicScale = Math.min(1.0, +(this.perfState.dynamicScale + this.perfState.step).toFixed(2));
                this.applyDPR();
            }
        }

        // --- Time and Physics Update ---
        const { timeScale, isPaused, simTime } = store.getState();
        const newTime = isPaused ? simTime : simTime + (dt / 1000) * timeScale;
        if (!isPaused) {
            store.getState().setSimTime(newTime);
        }
        this.physicsWorker.postMessage({ command: 'update', payload: { simTimeInDays: newTime } });

        if (this.simulation.asteroidMaterialUniforms) {
            this.simulation.asteroidMaterialUniforms.u_time.value = newTime;
        }

        // --- Object Position and Scale Updates ---
        this.celestialObjects.forEach(obj => {
            const displayPosition = calculateDisplayPosition(obj.physicsPosition, this.scaleTransition);
            obj.group.position.copy(displayPosition);
            const displayRadius = getDisplayRadius(obj.radius, this.scaleTransition);
            obj.mesh.scale.set(displayRadius, displayRadius, displayRadius);
        });

        // --- Camera Control ---
        const cameraTarget = new THREE.Vector3();
        if (this.simulation.focusTarget) {
            if (this.simulation.focusTarget === this.sun) {
                cameraTarget.set(0, 0, 0);
            } else {
                this.simulation.focusTarget.getWorldPosition(cameraTarget);
            }
            if (!this.simulation.isTweening) {
                controls.target.lerp(cameraTarget, 0.05);
            }
        }
        if (this.simulation.followTarget) {
            const targetPosition = new THREE.Vector3();
            this.simulation.followTarget.getWorldPosition(targetPosition);
            const desiredCamPos = targetPosition.clone().add(this.simulation.followOffset);
            camera.position.lerp(desiredCamPos, this.simulation.followSmoothing);
            controls.target.lerp(targetPosition, this.simulation.followSmoothing);
            dom.btnFollow.setAttribute('aria-pressed', 'true');
        } else {
            dom.btnFollow.setAttribute('aria-pressed', 'false');
        }

        // --- UI Updates ---
        if (store.getState().selectedBodyId) {
            const selectedBody = this.celestialObjects.find(c => c.id === store.getState().selectedBodyId);
            if (selectedBody && selectedBody.name !== 'Sun') {
                const parent = this.bodyMap.get(selectedBody.parentId!);
                const parentPosition = parent ? parent.physicsPosition : new THREE.Vector3(0, 0, 0);
                const r_au = selectedBody.physicsPosition.distanceTo(parentPosition);
                const r_km = r_au * KM_PER_AU;
                const r_m = r_au * AU_TO_M;
                const a_au = selectedBody.parentId === 'sun' ? selectedBody.semiMajorAxis : (selectedBody.semiMajorAxisKm || 0) / KM_PER_AU;
                const a_m = a_au * AU_TO_M;
                let speed_m_s = 0;
                if (a_m > 0) {
                    const parentMass10e24kg = parent?.data.mass || celestialBodyData[0].mass!;
                    const G = 6.67430e-11;
                    const mu = G * parentMass10e24kg * 1e24;
                    speed_m_s = instantaneousOrbitalSpeed({ a_m, r_m, mu });
                }
                const distanceUnit = store.getState().distanceUnit;
                dom.cardStats.textContent = `Dist: ${formatDistance(r_km, distanceUnit)} • Speed: ${speedDisplayKmPerS(speed_m_s)}`;
            } else if (selectedBody) {
                dom.cardStats.textContent = 'At the center of the solar system';
            }
        }

        // --- Manager and Effect Updates ---
        this.orbitManager.update(this.scaleTransition);
        this.orbitManager.updateLODs(camera, 800);
        this.trailManager.update(this.scaleTransition);
        this.celestialObjects.forEach(obj => {
            if (obj.mesh instanceof LOD) {
                (obj.mesh as LOD).update(camera);
            }
        });
        if (this.simulation.selectedGlow) {
            const pulseTime = time * 0.001 * (2 * Math.PI) / 1.2;
            const scale = 1.3 + Math.sin(pulseTime) * 0.1;
            const opacity = 0.7 + Math.sin(pulseTime) * 0.2;
            this.simulation.selectedGlow.scale.set(scale, scale, scale);
            (this.simulation.selectedGlow.material as THREE.MeshBasicMaterial).opacity = opacity;
        }

        // --- Final Render ---
        TWEEN.update(time);
        controls.update();
        renderer.render(scene, camera);
    }

    public applyDPR() {
        const dpr = Math.min(window.devicePixelRatio || 1, this.perfState.MAX_DPR) * this.perfState.dynamicScale;
        renderer.setPixelRatio(dpr);
    }

    public onBodySelected(id: string, selectableObjects: THREE.Object3D[]) {
        const selectedObject = selectableObjects.find(obj => obj.userData.id === id);
        if (!selectedObject) return;

        if (this.simulation.selectedGlow) {
            this.simulation.selectedGlow.visible = false;
        }
        const { glowMesh } = selectedObject.userData;
        if (glowMesh) {
            glowMesh.visible = true;
            this.simulation.selectedGlow = glowMesh;
        } else {
            this.simulation.selectedGlow = null;
        }

        store.getState().setSelectedBodyId(id);
        this.simulation.focusTarget = selectedObject;
        this.frameObject(selectedObject);
        this.clampZoomForBody(selectedObject);
    }

    private clampZoomForBody(bodyMesh: THREE.Object3D) {
        const box = new THREE.Box3().setFromObject(bodyMesh);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        const min = Math.max(sphere.radius * 1.2, 1);
        const max = Math.max(sphere.radius * 100, 1e6);
        controls.minDistance = min;
        controls.maxDistance = max;
        camera.near = Math.max(sphere.radius * 0.001, 0.01);
        camera.far = Math.max(sphere.radius * 2000, 1e7);
        camera.updateProjectionMatrix();
    }

    private cancelActiveCameraTween() {
        if ((window as any)._activeCameraTween) {
            (window as any)._activeCameraTween.stop?.();
            (window as any)._activeCameraTween = null;
        }
    }

    private frameObject(object3D: THREE.Object3D, opts: { duration?: number; fitOffset?: number } = {}) {
        const CAMERA_FOCUS_DEFAULT_MS = 700;
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const DEFAULT = { duration: CAMERA_FOCUS_DEFAULT_MS, fitOffset: 1.2 };
        const { duration, fitOffset } = { ...DEFAULT, ...opts };
        const dur = prefersReduced ? Math.min(duration, 150) : duration;
        this.simulation.isTweening = true;
        const box = new THREE.Box3().setFromObject(object3D);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3()).length() || 1;
        const fov = camera.fov * (Math.PI / 180);
        const distance = Math.abs(size / Math.sin(fov / 2)) * fitOffset;
        const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
        const newPos = center.clone().add(dir.multiplyScalar(distance));
        this.cancelActiveCameraTween();
        const t1 = new TWEEN.Tween(controls.target)
            .to(center, dur)
            .easing(TWEEN.Easing.Quintic.InOut)
            .onUpdate(() => controls.update())
            .onComplete(() => this.simulation.isTweening = false)
            .start();
        const t2 = new TWEEN.Tween(camera.position)
            .to(newPos, dur)
            .easing(TWEEN.Easing.Quintic.InOut)
            .onUpdate(() => camera.lookAt(controls.target))
            .start();
        (window as any)._activeCameraTween = { stop: () => { t1.stop(); t2.stop(); } };
    }
}
