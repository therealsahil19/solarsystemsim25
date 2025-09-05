import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { LOD } from 'three';
import { gsap } from 'gsap';
import { initScene, scene, camera, renderer, controls, pointLight } from './scene';
import { celestialBodyData, CelestialBody } from './data';
import { speedDisplayKmPerS, AU_TO_M, getGlowColor } from './utils/misc';
import { formatDistance, KM_PER_AU } from './utils/units';
import { createPlanetRings } from './bodies/rings';
import { calculateDisplayPosition, getDisplayRadius, ScaleTransition } from './utils/scaling';
import { createCelestialBodySelector } from './ui/celestial-selector';
import { setupInteractions } from './interactions';
import { updateInfoPanelColor } from './ui/info-panel';
import { OrbitManager } from './orbits/OrbitManager';
import store from './state/store';
import { InfoPanelManager } from './ui/info-panel-manager';
import { setupKeyboardShortcuts } from './keyboard';
import * as dom from './ui/dom';
import { instantaneousOrbitalSpeed } from './orbits/kepler';
import { initShortcutsPanel } from './ui/shortcuts-panel';
import { initPresetsPanel } from './ui/presets-panel';
import { initMainPanel } from './ui/main-panel';
import { initTopBar } from './ui/top-bar';
import { setupQuickAccessToolbar } from './ui/quick-access-toolbar';
import { initContextualHud } from './ui/contextual-hud';
import { initOnboardingTour } from './ui/onboarding-tour';
import { TrailManager } from './orbits/TrailManager';
import { getAssetUrl } from './utils/assets';
import { initUserDataIfMissing } from './utils/three-helpers';

/**
 * The main entry point for the application. This asynchronous function sets up the entire
 * scene, initializes all managers and UI components, and starts the animation loop.
 */
async function start() {
    // Dynamically import E2E testing hooks if in test mode.
    if (import.meta.env.MODE === 'test') {
        await import('./e2e-hooks');
    }

    /** The default duration for camera focus animations in milliseconds. */
    const CAMERA_FOCUS_DEFAULT_MS = 700;

    initScene(dom.canvas);
    const textureLoader = new THREE.TextureLoader();

    // --- Data Structures for Scene Objects ---
    /** An array holding all celestial body objects with their 3D and physics data. */
    const celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Object3D; physicsPosition: THREE.Vector3 })[] = [];
    /** An array of all `THREE.Object3D` instances that are selectable by the user. */
    const selectableObjects: THREE.Object3D[] = [];
    /** A map from body ID to its full scene object for quick lookups. */
    const bodyMap = new Map<string, { data: CelestialBody, group: THREE.Group, mesh: THREE.Object3D, physicsPosition: THREE.Vector3 }>();
    /** A reference to the Sun's `THREE.Object3D`. */
    let sun: THREE.Object3D | undefined;

    // --- Local Simulation State ---
    /** A mutable object holding state related to user interaction and camera targets. */
    const simulation = {
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

    /** A mutable object holding the state for transitions between scaling presets. */
    const scaleTransition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: store.getState().scalePreset,
        toPreset: store.getState().scalePreset,
    };

    /** An object for managing dynamic performance adjustments. */
    const perfState = {
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

    /** Pre-defined performance settings for different quality levels. */
    const performancePresets = {
        low: { MAX_DPR: 1.0, dynamicScale: 0.75, shadowMapSize: 512 },
        medium: { MAX_DPR: 1.5, dynamicScale: 0.9, shadowMapSize: 1024 },
        high: { MAX_DPR: 2.0, dynamicScale: 1.0, shadowMapSize: 4096 },
    };

    /**
     * Sets the performance preset for the application, adjusting quality settings.
     * @param presetName The name of the preset to apply.
     * @private
     */
    function setPerformancePreset(presetName: 'auto' | 'low' | 'medium' | 'high') {
        store.getState().setPerfPreset(presetName);
        if (presetName === 'auto') {
            perfState.MAX_DPR = 1.75; // Reset to default for auto mode
        } else {
            const preset = performancePresets[presetName];
            if (!preset) return;

            perfState.MAX_DPR = preset.MAX_DPR;
            perfState.dynamicScale = preset.dynamicScale;

            if (pointLight.shadow.mapSize.width !== preset.shadowMapSize) {
                pointLight.shadow.mapSize.width = preset.shadowMapSize;
                pointLight.shadow.mapSize.height = preset.shadowMapSize;
                if (pointLight.shadow.map) {
                    pointLight.shadow.map.dispose();
                    pointLight.shadow.map = null;
                }
            }
        }
        applyDPR();
    }

    /**
     * Applies the current device pixel ratio (DPR) to the renderer, considering performance settings.
     * @private
     */
    function applyDPR() {
        const dpr = Math.min(window.devicePixelRatio || 1, perfState.MAX_DPR) * perfState.dynamicScale;
        renderer.setPixelRatio(dpr);
    }

    // --- Event Listeners ---
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        applyDPR();
        trailManager.updateResolutions(window.innerWidth, window.innerHeight);
    });

    // --- Object Creation ---
    // Create all celestial bodies, their meshes, materials, and associated objects.
    celestialBodyData.forEach(bodyData => {
        const bodyGroup = new THREE.Group();
        let bodyMaterial;

        // Special material for the Sun to make it emissive
        if (bodyData.name === 'Sun') {
            bodyMaterial = new THREE.MeshStandardMaterial({
                emissive: 0xffff00,
                emissiveIntensity: 1.5,
                color: 0xffff00
            });
            if (bodyData.texture) {
                const sunTexture = textureLoader.load(getAssetUrl(bodyData.texture));
                bodyMaterial.map = sunTexture;
                bodyMaterial.emissiveMap = sunTexture;
            }
        } else {
            bodyMaterial = new THREE.MeshStandardMaterial({ color: bodyData.color || 0xffffff });
            if (bodyData.texture) {
                bodyMaterial.map = textureLoader.load(getAssetUrl(bodyData.texture));
            }
        }

        // Use Level of Detail (LOD) to improve performance
        const lod = new LOD();
        const lodLevels = [
            { segments: 64, distance: 0 },
            { segments: 32, distance: 20 },
            { segments: 16, distance: 100 },
        ];
        for (const level of lodLevels) {
            const geometry = new THREE.SphereGeometry(1, level.segments, level.segments);
            const mesh = new THREE.Mesh(geometry, bodyMaterial);
            mesh.castShadow = bodyData.name !== 'Sun';
            mesh.receiveShadow = bodyData.name !== 'Sun';
            lod.addLevel(mesh, level.distance);
        }
        const bodyMesh = lod;

        if (bodyData.name === 'Sun') {
            sun = bodyMesh;
            sun!.add(pointLight);
        }

        // Create a glow effect for selected objects
        const glowColor = bodyData.name === 'Sun' ? 0xffd700 : getGlowColor(bodyData.color);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: glowColor,
            transparent: true,
            opacity: 0.7,
            side: THREE.BackSide,
        });
        const glowMesh = new THREE.Mesh(new THREE.SphereGeometry(1.2, 32, 32), glowMaterial);
        glowMesh.visible = false;
        bodyMesh.add(glowMesh);

        // Store important data in the mesh's `userData` property
        bodyMesh.userData = { id: bodyData.id, name: bodyData.name, type: bodyData.parentId === 'sun' || bodyData.parentId === null ? 'planet' : 'moon', data: bodyData, glowMesh };
        bodyGroup.add(bodyMesh);

        const celestialObject = { ...bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: new THREE.Vector3() };
        celestialObjects.push(celestialObject);
        selectableObjects.push(bodyMesh);
        bodyMap.set(bodyData.id, { data: bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: celestialObject.physicsPosition });

        createPlanetRings(bodyData, bodyGroup, textureLoader);
    });

    // Parent moons to their planets and add all top-level objects to the scene
    celestialObjects.forEach(obj => {
        if (obj.parentId && obj.parentId !== 'sun' && obj.parentId !== null) {
            const parent = bodyMap.get(obj.parentId);
            if (parent) {
                parent.group.add(obj.group);
            }
        } else {
            scene.add(obj.group);
        }
    });

    // --- Manager Initialization ---
    const orbitManager = new OrbitManager(celestialObjects);
    orbitManager.init(scene, bodyMap);

    const trailManager = new TrailManager(celestialObjects, scene);
    trailManager.init();

    // --- Physics Worker Setup ---
    const physicsWorker = new Worker(new URL('./physics.worker.ts', import.meta.url), { type: 'module' });
    const workerBodies = celestialObjects.map(body => ({
        name: body.name,
        semiMajorAxis: body.semiMajorAxis,
        eccentricity: body.eccentricity,
        orbitalPeriod: body.orbitalPeriod,
    }));
    physicsWorker.postMessage({ command: 'init', payload: { bodies: workerBodies } });
    physicsWorker.onmessage = (e: MessageEvent) => {
        if (e.data.type === 'update') {
            const positions = new Float32Array(e.data.positions);
            celestialObjects.forEach((body, i) => {
                const bodyState = bodyMap.get(body.id);
                if (bodyState) {
                    bodyState.physicsPosition.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                }
            });
        }
    };

    // --- State Management ---
    // Subscribe to changes in the scale preset to trigger smooth transitions
    let previousPreset = store.getState().scalePreset;
    store.subscribe((state) => {
        if (state.scalePreset !== previousPreset) {
            scaleTransition.fromPreset = previousPreset;
            scaleTransition.toPreset = state.scalePreset;
            scaleTransition.progress = 0;
            scaleTransition.active = true;

            gsap.to(scaleTransition, {
                progress: 1,
                duration: 0.2,
                ease: 'power2.out',
                onComplete: () => { scaleTransition.active = false; },
            });
            previousPreset = state.scalePreset;
        }
    });

    /** Creates a static, starry background. @private */
    function createStarryBackground() {
        const starVertices = [];
        for (let i = 0; i < 10000; i++) {
            const x = (Math.random() - 0.5) * 4000;
            const y = (Math.random() - 0.5) * 4000;
            const z = (Math.random() - 0.5) * 4000;
            starVertices.push(x, y, z);
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.1 });
        const stars = new THREE.Points(starGeometry, starMaterial);
        scene.add(stars);
    }

    /** Creates a procedurally generated asteroid belt between Mars and Jupiter. @private */
    function createAsteroidBelt() {
        const count = 5000;
        const geom = new THREE.SphereGeometry(0.05, 6, 6);
        const material = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.8 });
        const uniforms = { u_time: { value: 0 } };
        // Modify the shader to add orbital motion to each asteroid instance
        material.onBeforeCompile = shader => {
            shader.uniforms.u_time = uniforms.u_time;
            shader.vertexShader = `
                uniform float u_time;
                attribute vec4 instanceParams;
                attribute float instanceYOffset;
            ` + shader.vertexShader;
            shader.vertexShader = shader.vertexShader.replace(
                '#include <begin_vertex>',
                `
                #include <begin_vertex>
                float angle = u_time * instanceParams.y + instanceParams.z;
                transformed.x += cos(angle) * instanceParams.x;
                transformed.z += sin(angle) * instanceParams.x;
                transformed.y += instanceYOffset;
                transformed *= instanceParams.w;
                `
            );
        };
        const inst = new THREE.InstancedMesh(geom, material, count);
        initUserDataIfMissing(inst, { name: 'Asteroid Belt' });
        inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        const distanceScale = 150.0;
        const beltMin = 2.2 * distanceScale;
        const beltMax = 3.2 * distanceScale;
        const instanceParams = new Float32Array(count * 4);
        const instanceYOffsets = new Float32Array(count);
        for (let i = 0; i < count; i++) {
            const radius = THREE.MathUtils.randFloat(beltMin, beltMax);
            const speed = (Math.random() * 0.2 + 0.05) * (Math.random() > 0.5 ? 1 : -1);
            const phase = Math.random() * Math.PI * 2;
            const scale = Math.random() * 0.5 + 0.5;
            const yOffset = THREE.MathUtils.randFloat(-0.5, 0.5);
            instanceParams[i * 4 + 0] = radius;
            instanceParams[i * 4 + 1] = speed;
            instanceParams[i * 4 + 2] = phase;
            instanceParams[i * 4 + 3] = scale;
            instanceYOffsets[i] = yOffset;
        }
        geom.setAttribute('instanceParams', new THREE.InstancedBufferAttribute(instanceParams, 4).setUsage(THREE.DynamicDrawUsage));
        geom.setAttribute('instanceYOffset', new THREE.InstancedBufferAttribute(instanceYOffsets, 1).setUsage(THREE.DynamicDrawUsage));
        inst.instanceMatrix.needsUpdate = false;
        scene.add(inst);
        simulation.asteroidMaterialUniforms = uniforms;
    }

    /** Creates a representation of the Oort cloud at the edge of the system. @private */
    function createOortCloud() {
        const count = 1000;
        const oortRadius = 1500;
        const geom = new THREE.SphereGeometry(0.5, 6, 6);
        const mat = new THREE.MeshStandardMaterial({ color: 0x446688, transparent: true, opacity: 0.5 });
        const inst = new THREE.InstancedMesh(geom, mat, count);
        initUserDataIfMissing(inst, { name: 'Oort Cloud' });
        const dummy = new THREE.Object3D();
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const x = oortRadius * Math.sin(phi) * Math.cos(theta);
            const y = oortRadius * Math.sin(phi) * Math.sin(theta);
            const z = oortRadius * Math.cos(phi);
            dummy.position.set(x, y, z);
            dummy.updateMatrix();
            inst.setMatrixAt(i, dummy.matrix);
        }
        inst.instanceMatrix.needsUpdate = true;
        scene.add(inst);
    }

    createStarryBackground();
    createAsteroidBelt();
    createOortCloud();

    // --- Camera and Interaction Logic ---
    /**
     * Clamps the camera's zoom levels and near/far planes for a given celestial body.
     * @param bodyMesh The mesh of the body to clamp the zoom for.
     * @private
     */
    function clampZoomForBody(bodyMesh: THREE.Object3D) {
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

    /**
     * Cancels any currently active camera tween animation.
     * @private
     */
    function cancelActiveCameraTween() {
        if ((window as any)._activeCameraTween) {
            (window as any)._activeCameraTween.stop?.();
            (window as any)._activeCameraTween = null;
        }
    }

    /**
     * Smoothly moves and zooms the camera to frame a target object.
     * @param object3D The `THREE.Object3D` to frame.
     * @param opts Optional settings for duration and fit offset.
     * @private
     */
    function frameObject(object3D: THREE.Object3D, opts: { duration?: number; fitOffset?: number } = {}) {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const DEFAULT = { duration: CAMERA_FOCUS_DEFAULT_MS, fitOffset: 1.2 };
        const { duration, fitOffset } = { ...DEFAULT, ...opts };
        const dur = prefersReduced ? Math.min(duration, 150) : duration;
        simulation.isTweening = true;
        const box = new THREE.Box3().setFromObject(object3D);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3()).length() || 1;
        const fov = camera.fov * (Math.PI / 180);
        const distance = Math.abs(size / Math.sin(fov / 2)) * fitOffset;
        const dir = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
        const newPos = center.clone().add(dir.multiplyScalar(distance));
        cancelActiveCameraTween();
        const t1 = new TWEEN.Tween(controls.target)
            .to(center, dur)
            .easing(TWEEN.Easing.Quintic.InOut)
            .onUpdate(() => controls.update())
            .onComplete(() => simulation.isTweening = false)
            .start();
        const t2 = new TWEEN.Tween(camera.position)
            .to(newPos, dur)
            .easing(TWEEN.Easing.Quintic.InOut)
            .onUpdate(() => camera.lookAt(controls.target))
            .start();
        (window as any)._activeCameraTween = { stop: () => { t1.stop(); t2.stop(); } };
    }

    /**
     * Handles the selection of a celestial body, updating state and camera.
     * @param id The ID of the selected body.
     * @private
     */
    function onBodySelected(id: string) {
        const selectedObject = selectableObjects.find(obj => obj.userData.id === id);
        if (!selectedObject) return;

        // Manage selection glow effect
        if (simulation.selectedGlow) {
            simulation.selectedGlow.visible = false;
        }
        const { glowMesh } = selectedObject.userData;
        if (glowMesh) {
            glowMesh.visible = true;
            simulation.selectedGlow = glowMesh;
        } else {
            simulation.selectedGlow = null;
        }

        store.getState().setSelectedBodyId(id);
        simulation.focusTarget = selectedObject;
        frameObject(selectedObject);
        clampZoomForBody(selectedObject);
    }

    const infoPanelManager = new InfoPanelManager();
    createCelestialBodySelector(celestialBodyData, onBodySelected);

    /**
     * Resets the entire simulation to its initial state.
     * @private
     */
    function resetSimulation() {
        store.getState().setSimTime(0);
        if (sun) simulation.focusTarget = sun;
        store.getState().setSelectedBodyId('Sun');
        camera.position.set(0, 150, 400);
        controls.target.set(0, 0, 0);
        store.getState().setPaused(false);
        onBodySelected('Sun');
        dom.smallInfoCard.classList.add('hidden');
    }

    if (!sun) {
        throw new Error("Sun object was not initialized, cannot set up interactions.");
    }
    const allOrbits = celestialObjects.map(o => o.orbit).filter(o => o) as THREE.Line[];
    setupInteractions(camera, selectableObjects, sun, simulation, onBodySelected, controls, resetSimulation, allOrbits);
    setupKeyboardShortcuts(simulation, [], onBodySelected, camera, controls);

    // --- UI Event Listeners ---
    (dom.shadowToggle as HTMLInputElement).addEventListener('change', () => {
        const isEnabled = (dom.shadowToggle as HTMLInputElement).checked;
        renderer.shadowMap.enabled = isEnabled;
        scene.traverse((object) => {
            if ((object as THREE.Mesh).material) {
                ((object as THREE.Mesh).material as any).needsUpdate = true;
            }
        });
    });

    (dom.performancePreset as HTMLSelectElement).addEventListener('change', (e) => {
        setPerformancePreset((e.target as HTMLSelectElement).value as 'auto' | 'low' | 'medium' | 'high');
    });
    setPerformancePreset((dom.performancePreset as HTMLSelectElement).value as 'auto' | 'low' | 'medium' | 'high');

    // Automatically pause the simulation when the window loses focus or is hidden
    let visibilityPaused = false;
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            if (!store.getState().isPaused) {
                visibilityPaused = true;
                store.getState().setPaused(true);
            }
        } else {
            if (visibilityPaused) {
                store.getState().setPaused(false);
                visibilityPaused = false;
            }
        }
    });
    window.addEventListener('blur', () => {
        if (!store.getState().isPaused) {
            visibilityPaused = true;
            store.getState().setPaused(true);
        }
    });
    window.addEventListener('focus', () => {
        if (visibilityPaused) {
            store.getState().setPaused(false);
            visibilityPaused = false;
        }
    });

    // Subscribe to the global store to update the UI when the selected body changes.
    store.subscribe((state) => {
        const selectedBody = celestialObjects.find(c => c.id === state.selectedBodyId);
        if (selectedBody) {
            simulation.focusTarget = selectedBody.mesh;
            simulation.selectedObject = selectedBody.mesh;

            infoPanelManager.updateContent(selectedBody);

            const { data } = selectedBody.mesh.userData;
            dom.smallInfoCard.classList.remove('hidden');
            dom.cardTitle.textContent = data.name;
            dom.cardThumb.src = data.edu?.image || data.texture || '';
            dom.cardThumb.alt = `${data.name} thumbnail`;
            (dom.freeCameraButton as HTMLElement).classList.remove('hidden');

            // Notify E2E tests that the body has been rendered
            if ((window as any).__E2E__) {
                (window as any).__E2E__.lastSelected = selectedBody.id;
                window.dispatchEvent(new CustomEvent('e2e:body-rendered', { detail: { id: selectedBody.id } }));
            }
        } else {
            infoPanelManager.hide();
        }
    });

    const cameraTarget = new THREE.Vector3();

    interface Animate extends FrameRequestCallback {
        _lastTime?: number;
    }

    /**
     * The main animation loop, called every frame by `requestAnimationFrame`.
     * @param time The current time, provided by `requestAnimationFrame`.
     */
    const animate: Animate = (time) => {
        requestAnimationFrame(animate);
        const now = time || performance.now();
        const dt = now - (animate._lastTime || now);
        animate._lastTime = now;

        // --- Dynamic Performance Adjustment ---
        const buf = perfState.frameTimes;
        buf.push(dt);
        if (buf.length > perfState.evalWindow) buf.shift();
        if (now - perfState.lastEval >= perfState.evalInterval && buf.length > 3) {
            perfState.lastEval = now;
            const avg = buf.reduce((s, v) => s + v, 0) / buf.length;
            if (avg > perfState.upperMs && perfState.dynamicScale > perfState.MIN_SCALE) {
                perfState.dynamicScale = Math.max(perfState.MIN_SCALE, +(perfState.dynamicScale - perfState.step).toFixed(2));
                applyDPR();
            } else if (avg < perfState.lowerMs && perfState.dynamicScale < 1.0) {
                perfState.dynamicScale = Math.min(1.0, +(perfState.dynamicScale + perfState.step).toFixed(2));
                applyDPR();
            }
        }

        // --- Time and Physics Update ---
        const { timeScale, isPaused, simTime } = store.getState();
        const newTime = isPaused ? simTime : simTime + (dt / 1000) * timeScale;
        if (!isPaused) {
            store.getState().setSimTime(newTime);
        }
        physicsWorker.postMessage({ command: 'update', payload: { simTimeInDays: newTime } });

        if (simulation.asteroidMaterialUniforms) {
            simulation.asteroidMaterialUniforms.u_time.value = newTime;
        }

        // --- Object Position and Scale Updates ---
        celestialObjects.forEach(obj => {
            const displayPosition = calculateDisplayPosition(obj.physicsPosition, scaleTransition);
            obj.group.position.copy(displayPosition);
            const displayRadius = getDisplayRadius(obj.radius, scaleTransition);
            obj.mesh.scale.set(displayRadius, displayRadius, displayRadius);
        });

        // --- Camera Control ---
        if (simulation.focusTarget) {
            if (simulation.focusTarget === sun) {
                cameraTarget.set(0, 0, 0);
            } else {
                simulation.focusTarget.getWorldPosition(cameraTarget);
            }
            if (!simulation.isTweening) {
                controls.target.lerp(cameraTarget, 0.05);
            }
        }
        if (simulation.followTarget) {
            const targetPosition = new THREE.Vector3();
            simulation.followTarget.getWorldPosition(targetPosition);
            const desiredCamPos = targetPosition.clone().add(simulation.followOffset);
            camera.position.lerp(desiredCamPos, simulation.followSmoothing);
            controls.target.lerp(targetPosition, simulation.followSmoothing);
            dom.btnFollow.setAttribute('aria-pressed', 'true');
        } else {
            dom.btnFollow.setAttribute('aria-pressed', 'false');
        }

        // --- UI Updates ---
        if (store.getState().selectedBodyId) {
            const selectedBody = celestialObjects.find(c => c.id === store.getState().selectedBodyId);
            if (selectedBody && selectedBody.name !== 'Sun') {
                const parent = bodyMap.get(selectedBody.parentId!);
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
        orbitManager.update(scaleTransition);
        orbitManager.updateLODs(camera, 800);
        trailManager.update(scaleTransition);
        celestialObjects.forEach(obj => {
            if (obj.mesh instanceof LOD) {
                (obj.mesh as LOD).update(camera);
            }
        });
        if (simulation.selectedGlow) {
            const pulseTime = time * 0.001 * (2 * Math.PI) / 1.2;
            const scale = 1.3 + Math.sin(pulseTime) * 0.1;
            const opacity = 0.7 + Math.sin(pulseTime) * 0.2;
            simulation.selectedGlow.scale.set(scale, scale, scale);
            (simulation.selectedGlow.material as THREE.MeshBasicMaterial).opacity = opacity;
        }

        // --- Final Render ---
        TWEEN.update(time);
        controls.update();
        renderer.render(scene, camera);
    }

    animate(0);

    // --- Final UI Initializations ---
    initShortcutsPanel();
    initPresetsPanel();
    initMainPanel();
    initTopBar();
    setupQuickAccessToolbar();
    initContextualHud();
    initOnboardingTour();

    // --- E2E and App Readiness Notification ---
    const app = {
        store: store,
        renderer: {
            trails: trailManager
        },
    };
    if ((window as any).__e2eNotifyReady) {
        (window as any).__e2eNotifyReady(app);
    } else {
        (window as any).__APP_READY = true;
    }
}

// Start the application once the DOM is fully loaded.
window.addEventListener('DOMContentLoaded', start);
