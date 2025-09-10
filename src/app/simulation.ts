import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { LOD } from 'three';
import { camera, controls, renderer, scene } from '../scene';
import { CelestialBody, celestialBodyData } from '../data';
import { AU_TO_M, speedDisplayKmPerS } from '../utils/misc';
import { calculateDisplayPosition, getDisplayRadius, ScaleTransition } from '../utils/scaling';
import store, { SimState, ScalePreset } from '../state/simStore';
import uiStore from '../state/uiStore';
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

    // Limit final renders to ~60 FPS while keeping physics/time updates unthrottled
    private renderLimiter = {
        lastRenderMs: 0,
        minIntervalMs: 1000 / 60,
    };

    // Throttle UI text updates to avoid per-frame DOM churn
    private uiUpdate = {
        lastStatsMs: 0,
        statsInterval: 150,
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
        console.log('Physics worker created:', this.physicsWorker);
        this.physicsWorker.onerror = (event) => {
            console.error('Physics worker error:', event);
        };
        this.setupScaleSubscription();
        this.setupSelectionSubscription();
    }

    public start() {
        this.orbitManager.init(scene, this.bodyMap);
        this.trailManager.init();
        this.setupPhysicsWorker();
        this.setupControlsInteractionHandling();
        this.setupCustomPanning();

        dom.freeCameraButton.addEventListener('click', () => this.unfocusCamera());
        dom.freeCameraButton.textContent = 'Unfocus';
        dom.freeCameraButton.classList.add('hidden');

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
                console.log('Received position update from worker');
                const positions = e.data.positions;
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

        // --- Time and Physics Update (always run, even if we skip rendering) ---
        const { timeScale, isPaused, simTime } = store.getState();
        // Convert elapsed real time to simulation days using timeScale (seconds per second)
        const deltaDays = (dt / 1000) * (timeScale / 86400);
        const newTimeDays = isPaused ? simTime : (simTime + deltaDays);
        if (!isPaused) {
            store.getState().setSimTime(newTimeDays);
        }
        this.physicsWorker.postMessage({ command: 'update', payload: { simTimeInDays: newTimeDays } });

        // FPS throttle: only proceed to expensive updates+render at ~60 fps
        const sinceLastRender = now - this.renderLimiter.lastRenderMs;
        if (sinceLastRender < this.renderLimiter.minIntervalMs) {
            return;
        }
        this.renderLimiter.lastRenderMs = now;

        // Drive shader animation with real elapsed seconds, independent of simTime units
        if (this.simulation.asteroidMaterialUniforms) {
            this.simulation.asteroidMaterialUniforms.u_time.value += dt / 1000;
        }

        // --- Object Position and Scale Updates ---
        this.celestialObjects.forEach(obj => {
            const displayPosition = calculateDisplayPosition(obj.physicsPosition, this.scaleTransition);
            obj.group.position.copy(displayPosition);
            let displayRadius = getDisplayRadius(obj.radius, this.scaleTransition);
            // Prevent the Sun from dwarfing inner orbits in hybrid/educational presets
            if ((this.scaleTransition.toPreset === 'hybrid' || this.scaleTransition.toPreset === 'educational') && obj.id === 'sun') {
                displayRadius = Math.min(displayRadius, 25);
            }
            obj.mesh.scale.set(displayRadius, displayRadius, displayRadius);
        });

        // --- Camera Control ---
        if (this.simulation.followTarget) {
            const targetPosition = new THREE.Vector3();
            this.simulation.followTarget.getWorldPosition(targetPosition);

            // If a tween isn't running, update camera position and target
            if (!this.simulation.isTweening) {
                // Update camera position to maintain offset
                const desiredCamPos = targetPosition.clone().add(this.simulation.followOffset);
                camera.position.lerp(desiredCamPos, this.simulation.followSmoothing);

                // Update controls target to look at the followed object
                controls.target.copy(targetPosition);
            }
            dom.btnFollow.setAttribute('aria-pressed', 'true');
        } else if (this.simulation.focusTarget) {
            // This logic runs when an object is focused but not followed,
            // e.g., during the initial tween before follow kicks in.
            const cameraTarget = new THREE.Vector3();
             if (this.simulation.focusTarget === this.sun) {
                cameraTarget.set(0, 0, 0);
            } else {
                this.simulation.focusTarget.getWorldPosition(cameraTarget);
            }
            if (!this.simulation.isTweening) {
                const lerpFactor = this.simulation.isUserInteracting ? 0.01 : 0.05;
                controls.target.lerp(cameraTarget, lerpFactor);
            }
            dom.btnFollow.setAttribute('aria-pressed', 'false');
        } else {
            // No focus or follow target, hide the follow button
            dom.btnFollow.setAttribute('aria-pressed', 'false');
        }

        // --- UI Updates (throttled) ---
        if (store.getState().selectedBodyId) {
            const nowMs = now; // reuse "now" as ms timestamp
            if (nowMs - this.uiUpdate.lastStatsMs >= this.uiUpdate.statsInterval) {
                this.uiUpdate.lastStatsMs = nowMs;
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
                    const distanceUnit = uiStore.getState().distanceUnit;
                    dom.cardStats.textContent = `Dist: ${formatDistance(r_km, distanceUnit)} • Speed: ${speedDisplayKmPerS(speed_m_s)}`;
                } else if (selectedBody) {
                    dom.cardStats.textContent = 'At the center of the solar system';
                }
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
        this.simulation.followTarget = selectedObject;
        dom.freeCameraButton.classList.remove('hidden');

        // Enable focused controls
        controls.enableRotate = true;
        controls.enableZoom = true;
        controls.enablePan = false;

        this.frameObject(selectedObject);
        this.clampZoomForBody(selectedObject);

        // Update small info card UI
        try {
            const data = (selectedObject as any).userData?.data;
            if (data) {
                dom.cardTitle.textContent = data.name || '';
                const thumb = data.edu?.thumbnail || data.edu?.image || '';
                if (thumb) {
                    dom.cardThumb.src = thumb;
                    dom.cardThumb.alt = `Thumbnail of ${data.name}`;
                }
                dom.smallInfoCard.classList.remove('hidden');
            }
        } catch {}
    }

    public unfocusCamera() {
        this.simulation.focusTarget = null;
        this.simulation.followTarget = null;
        dom.freeCameraButton.classList.add('hidden');

        // Re-enable free-roam controls
        controls.enableRotate = true;
        controls.enableZoom = true;
        controls.enablePan = true;
        controls.minDistance = 0;
        controls.maxDistance = 5000; // A large number for solar system scale
    }

    private clampZoomForBody(bodyMesh: THREE.Object3D) {
        const box = new THREE.Box3().setFromObject(bodyMesh);
        const sphere = box.getBoundingSphere(new THREE.Sphere());
        const radius = Math.max(sphere.radius, 0.001); // Ensure minimum radius to prevent zero values
        
        // Prevent extreme values that could cause rendering issues
        const safeRadius = Math.max(radius, 1.0); // Ensure minimum scale
        
        // More conservative near/far calculations to prevent vanishing
        const minDistance = Math.max(safeRadius * 1.5, 1.0); // Prevent camera too close
        const maxDistance = Math.min(Math.max(safeRadius * 500, 1000), 1e6); // Cap max distance
        
        controls.minDistance = minDistance;
        controls.maxDistance = maxDistance;
        
        // Use safer near/far plane values
        const baseNear = Math.max(safeRadius * 0.1, 0.5);
        const baseFar = Math.min(Math.max(safeRadius * 1000, 5000), 1e7);
        
        camera.near = Math.max(baseNear, 0.1);
        camera.far = Math.max(baseFar, camera.near * 1000); // Ensure far > near
        
        // Ensure reasonable near/far ratio
        const nearFarRatio = camera.far / camera.near;
        if (nearFarRatio > 10000) {
            // More conservative adjustment
            camera.near = Math.max(camera.far / 10000, 0.1);
        }
        
        // Final safety checks
        camera.near = Math.max(camera.near, 0.01);
        camera.far = Math.max(camera.far, camera.near * 100);
        camera.far = Math.min(camera.far, 1e8); // Cap far plane
        
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
        
        // Safety check for valid object
        if (!object3D || !object3D.parent) {
            this.simulation.isTweening = false;
            return;
        }
        
        const box = new THREE.Box3().setFromObject(object3D);
        
        // Ensure valid bounding box
        if (!box.isEmpty() && !isFinite(box.min.x)) {
            // Fallback to a reasonable position if bounding box is invalid
            const fallbackPos = new THREE.Vector3(0, 0, 0);
            camera.position.set(0, 50, 100);
            controls.target.copy(fallbackPos);
            camera.lookAt(fallbackPos);
            this.simulation.isTweening = false;
            return;
        }
        
        const center = box.getCenter(new THREE.Vector3());
        const size = Math.max(box.getSize(new THREE.Vector3()).length(), 1); // Ensure minimum size
        const fov = camera.fov * (Math.PI / 180);
        
        // Calculate safe distance with bounds
        const rawDistance = Math.abs(size / Math.sin(fov / 2)) * fitOffset;
        const distance = Math.max(Math.min(rawDistance, 10000), 10); // Clamp distance
        
        // Ensure valid direction vector
        const currentDir = new THREE.Vector3().subVectors(camera.position, controls.target);
        if (currentDir.lengthSq() < 0.001) {
            // Fallback direction if current direction is invalid
            currentDir.set(0, 0, 1);
        }
        const dir = currentDir.normalize();
        
        const newPos = center.clone().add(dir.multiplyScalar(distance));
        
        // Ensure new position is valid
        if (!isFinite(newPos.x) || !isFinite(newPos.y) || !isFinite(newPos.z)) {
            newPos.set(center.x, center.y + 50, center.z + 100);
        }
        
        this.cancelActiveCameraTween();
        
        try {
            const t1 = new TWEEN.Tween(controls.target)
                .to(center, dur)
                .easing(TWEEN.Easing.Quintic.InOut)
                .onUpdate(() => controls.update())
                .onComplete(() => {
                    this.simulation.isTweening = false;
                    if (this.simulation.followTarget) {
                        const targetPosition = new THREE.Vector3();
                        this.simulation.followTarget.getWorldPosition(targetPosition);
                        this.simulation.followOffset.copy(camera.position).sub(targetPosition);
                    }
                })
                .start();
            const t2 = new TWEEN.Tween(camera.position)
                .to(newPos, dur)
                .easing(TWEEN.Easing.Quintic.InOut)
                .onUpdate(() => camera.lookAt(controls.target))
                .start();
            (window as any)._activeCameraTween = { stop: () => { t1.stop(); t2.stop(); } };
        } catch (error) {
            // Fallback if TWEEN fails
            console.warn('Camera animation failed, using immediate positioning', error);
            controls.target.copy(center);
            camera.position.copy(newPos);
            camera.lookAt(controls.target);
            this.simulation.isTweening = false;
        }
    }

    /** Subscribes to scale preset changes and animates transitions to avoid popping. */
    private setupScaleSubscription() {
        let lastPreset: ScalePreset = store.getState().scalePreset;
        store.subscribe(
            (s: SimState) => s.scalePreset,
            (preset) => {
                if (preset !== lastPreset) {
                    const from = this.scaleTransition.toPreset;
                    const to = preset;
                    this.scaleTransition = { active: true, progress: 0, fromPreset: from, toPreset: to };
                    new TWEEN.Tween(this.scaleTransition)
                        .to({ progress: 1 }, 450)
                        .easing(TWEEN.Easing.Cubic.InOut)
                        .onComplete(() => { this.scaleTransition.active = false; })
                        .start();
                    lastPreset = to;
                }
            }
        );
    }

    /** Subscribes to global selection changes to auto-focus the camera on the selected body. */
    private setupControlsInteractionHandling() {
        let interactionTimeout: number | null = null;
        
        // Track user interaction state to prevent wobble during mouse drags
        controls.addEventListener('start', () => {
            this.simulation.isUserInteracting = true;
            if (interactionTimeout) {
                clearTimeout(interactionTimeout);
                interactionTimeout = null;
            }
        });
        
        controls.addEventListener('end', () => {
            // Add a small delay before re-enabling smooth following
            interactionTimeout = window.setTimeout(() => {
                this.simulation.isUserInteracting = false;
            }, 100);
        });
        
        controls.addEventListener('change', () => {
            // Mark as interacting when controls are actively being used
            this.simulation.isUserInteracting = true;
            if (interactionTimeout) {
                clearTimeout(interactionTimeout);
                interactionTimeout = null;
            }
        });
    }

    private setupSelectionSubscription() {
        let lastId: string | null = store.getState().selectedBodyId;
        store.subscribe(
            (s: SimState) => s.selectedBodyId,
            (id) => {
                if (!id || id === lastId) return;
                lastId = id;
                const entry = this.bodyMap.get(id);
                if (!entry) return;
                // Avoid double-focusing if we already set the focus as part of a direct selection handler
                if (this.simulation.focusTarget === entry.mesh) return;
                this.simulation.focusTarget = entry.mesh;
                this.simulation.followTarget = entry.mesh;
                try {
                    const worldPos = new THREE.Vector3();
                    entry.mesh.getWorldPosition(worldPos);
                    camera.lookAt(worldPos);
                } catch {}
                this.frameObject(entry.mesh);
                this.clampZoomForBody(entry.mesh);
            }
        );
    }

    private setupCustomPanning() {
        let isPanning = false;
        const panStart = new THREE.Vector2();
        const panEnd = new THREE.Vector2();
        const panDelta = new THREE.Vector2();

        renderer.domElement.addEventListener('pointerdown', (event) => {
            if (event.button === 2 && this.simulation.followTarget) { // Right-click and focused
                isPanning = true;
                panStart.set(event.clientX, event.clientY);
            }
        });

        renderer.domElement.addEventListener('pointermove', (event) => {
            if (isPanning) {
                panEnd.set(event.clientX, event.clientY);
                panDelta.subVectors(panEnd, panStart).multiplyScalar(0.005);

                this.handleCustomPan(panDelta);

                panStart.copy(panEnd);
            }
        });

        renderer.domElement.addEventListener('pointerup', (event) => {
            if (event.button === 2) {
                isPanning = false;
            }
        });

        // Prevent context menu on right-click
        renderer.domElement.addEventListener('contextmenu', (event) => event.preventDefault());
    }

    private handleCustomPan(delta: THREE.Vector2) {
        if (!this.simulation.followTarget) return;

        const targetPosition = controls.target;
        const offset = new THREE.Vector3().subVectors(camera.position, targetPosition);

        // Up/Down panning (rotate around the camera's right axis)
        const planetUp = new THREE.Vector3(0, 1, 0); // World up vector
        const cameraRight = new THREE.Vector3().crossVectors(offset, planetUp).normalize();
        const upQuaternion = new THREE.Quaternion().setFromAxisAngle(cameraRight, delta.y);

        // Left/Right panning (rotate around the planet's up axis)
        const leftQuaternion = new THREE.Quaternion().setFromAxisAngle(planetUp, -delta.x);

        // Apply rotations to the offset vector
        offset.applyQuaternion(upQuaternion);
        offset.applyQuaternion(leftQuaternion);

        // Set new camera position and update the follow offset for the main animation loop
        camera.position.copy(targetPosition).add(offset);
        this.simulation.followOffset.copy(offset);
    }
}
