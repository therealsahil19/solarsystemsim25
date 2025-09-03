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
import { initInfoPanel, updateInfoPanelColor } from './ui/info-panel';
import { OrbitManager } from './orbits/OrbitManager';
import { store, ScalePreset } from './state/store';
import { setupKeyboardShortcuts } from './keyboard';
import * as dom from './ui/dom';
import { instantaneousOrbitalSpeed } from './orbits/kepler';
import { initShortcutsPanel } from './ui/shortcuts-panel';
import { initPresetsPanel } from './ui/presets-panel';
import { initMainPanel } from './ui/main-panel';
import { initTopBar } from './ui/top-bar';
import { TrailManager } from './orbits/TrailManager';
import { initTooltips } from './ui/dom';

async function start() {
    if (import.meta.env.MODE === 'test') {
        await import('./e2e-hooks');
    }

    const CAMERA_FOCUS_DEFAULT_MS = 700;

    initScene(dom.canvas);
    const textureLoader = new THREE.TextureLoader();

    const celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Object3D; physicsPosition: THREE.Vector3 })[] = [];
    const selectableObjects: THREE.Object3D[] = [];
    const bodyMap = new Map<string, { data: CelestialBody, group: THREE.Group, mesh: THREE.Object3D, physicsPosition: THREE.Vector3 }>();
    let sun: THREE.Object3D | undefined;

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

    const scaleTransition: ScaleTransition = {
        active: false,
        progress: 0,
        fromPreset: store.getState().scalePreset,
        toPreset: store.getState().scalePreset,
    };

    const perfState = {
        MAX_DPR: 1.75,
        MIN_SCALE: 0.5,
        dynamicScale: 1.0,
        frameTimes: [] as number[],
        evalInterval: 1000,
        lastEval: performance.now(),
        evalWindow: 60,
        upperMs: 22,
        lowerMs: 13,
        step: 0.1,
    };

    const performancePresets = {
        low: { MAX_DPR: 1.0, dynamicScale: 0.75, shadowMapSize: 512 },
        medium: { MAX_DPR: 1.5, dynamicScale: 0.9, shadowMapSize: 1024 },
        high: { MAX_DPR: 2.0, dynamicScale: 1.0, shadowMapSize: 4096 },
    };

    function setPerformancePreset(presetName: 'auto' | 'low' | 'medium' | 'high') {
        store.getState().setPerfPreset(presetName);
        if (presetName === 'auto') {
            perfState.MAX_DPR = 1.75;
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

    function applyDPR() {
        const dpr = Math.min(window.devicePixelRatio || 1, perfState.MAX_DPR) * perfState.dynamicScale;
        renderer.setPixelRatio(dpr);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        applyDPR();
    });

    // Create all bodies
    celestialBodyData.forEach(bodyData => {
        const bodyGroup = new THREE.Group();
        let bodyMaterial;

        if (bodyData.name === 'Sun') {
            bodyMaterial = new THREE.MeshStandardMaterial({
                emissive: 0xffff00,
                emissiveIntensity: 1.5,
                color: 0xffff00
            });
            if (bodyData.texture) {
                const sunTexture = textureLoader.load(bodyData.texture);
                bodyMaterial.map = sunTexture;
                bodyMaterial.emissiveMap = sunTexture;
            }
        } else {
            bodyMaterial = new THREE.MeshStandardMaterial({ color: bodyData.color || 0xffffff });
            if (bodyData.texture) {
                bodyMaterial.map = textureLoader.load(bodyData.texture);
            }
        }

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

        const glowColor = bodyData.name === 'Sun' ? 0xffd700 : getGlowColor(bodyData.color);
        const glowMaterial = new THREE.MeshBasicMaterial({
            color: glowColor,
            transparent: true,
            opacity: 0.7,
            side: THREE.BackSide,
        });
        const glowMesh = new THREE.Mesh(
            new THREE.SphereGeometry(1.2, 32, 32),
            glowMaterial
        );
        glowMesh.visible = false;
        bodyMesh.add(glowMesh);

        bodyMesh.userData = { id: bodyData.id, name: bodyData.name, type: bodyData.parentId === 'sun' || bodyData.parentId === null ? 'planet' : 'moon', data: bodyData, glowMesh };
        bodyGroup.add(bodyMesh);

        const celestialObject = { ...bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: new THREE.Vector3() };
        celestialObjects.push(celestialObject);
        selectableObjects.push(bodyMesh);
        bodyMap.set(bodyData.id, { data: bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: celestialObject.physicsPosition });

        createPlanetRings(bodyData, bodyGroup, textureLoader);
    });

    // Parent moons to their planets and add planets/sun to the scene
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


    const orbitManager = new OrbitManager(celestialObjects);
    orbitManager.init(scene);

    const trailManager = new TrailManager(celestialObjects, scene);
    trailManager.init();

    const physicsWorker = new Worker(new URL('./physics.worker.ts', import.meta.url), { type: 'module' });

    const physicsBodies = celestialObjects
        .filter(obj => obj.parentId === 'sun' || obj.parentId === null)
        .map(obj => ({
            id: obj.id,
            name: obj.name,
            semiMajorAxis: obj.semiMajorAxis,
            eccentricity: obj.eccentricity,
            orbitalPeriod: obj.orbitalPeriod,
        }));

    physicsWorker.postMessage({
        command: 'init',
        payload: {
            bodies: physicsBodies,
        }
    });

    physicsWorker.onmessage = (e: MessageEvent) => {
        if (e.data.type === 'update') {
            const positions = new Float32Array(e.data.positions);
            physicsBodies.forEach((body, i) => {
                const bodyState = bodyMap.get(body.id);
                if (bodyState) {
                    bodyState.physicsPosition.set(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
                }
            });
        }
    };

    let previousPreset = store.getState().scalePreset;
    store.subscribe((state) => {
        if (state.scalePreset !== previousPreset) {
            scaleTransition.fromPreset = previousPreset;
            scaleTransition.toPreset = state.scalePreset;
            scaleTransition.progress = 0;
            scaleTransition.active = true;

            gsap.to(scaleTransition, {
                progress: 1,
                duration: 0.2, // 200ms ease-out
                ease: 'power2.out',
                onComplete: () => {
                    scaleTransition.active = false;
                },
            });
            previousPreset = state.scalePreset;
        }
    });

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

    function createAsteroidBelt() {
        const count = 5000;
        const geom = new THREE.SphereGeometry(0.05, 6, 6);
        const material = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.8 });
        const uniforms = { u_time: { value: 0 } };
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
        inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        const distanceScale = 150.0; // 1 AU = 150 meters in the simulation
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

    function createOortCloud() {
        const count = 1000;
        const oortRadius = 1500;
        const geom = new THREE.SphereGeometry(0.5, 6, 6);
        const mat = new THREE.MeshStandardMaterial({ color: 0x446688, transparent: true, opacity: 0.5 });
        const inst = new THREE.InstancedMesh(geom, mat, count);
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

    function cancelActiveCameraTween() {
        if ((window as any)._activeCameraTween) {
            (window as any)._activeCameraTween.stop?.();
            (window as any)._activeCameraTween = null;
        }
    }

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

    function onBodySelected(id: string) {
        const selectedObject = selectableObjects.find(obj => obj.userData.id === id);
        if (!selectedObject) return;

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

    createCelestialBodySelector(celestialBodyData, onBodySelected);
    initInfoPanel();

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

    function addStat(container: HTMLElement, label: string, value: string | number, unit: string = '', tooltip: string | null = null) {
        if (value === undefined || value === null) return;

        const statId = `stat-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
        const row = document.createElement('div');
        row.setAttribute('data-e2e', statId);

        const strong = document.createElement('strong');
        strong.textContent = `${label}:`;

        const span = document.createElement('span');
        span.textContent = `${value} ${unit}`;
    span.dataset.testid = 'stat-value';

        if (tooltip) {
            const tooltipSpan = document.createElement('span');
            tooltipSpan.className = 'tooltip';
            tooltipSpan.textContent = '(?)';
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            tooltipText.textContent = tooltip;
            tooltipSpan.appendChild(tooltipText);
            span.appendChild(tooltipSpan);
        }

        row.appendChild(strong);
        row.appendChild(span);
        container.appendChild(row);
    }

    store.subscribe((state) => {
        const selectedBody = celestialObjects.find(c => c.id === state.selectedBodyId);
        if (selectedBody) {
            simulation.focusTarget = selectedBody.mesh;
            simulation.selectedObject = selectedBody.mesh;

            const { data, type } = selectedBody.mesh.userData;
            dom.smallInfoCard.classList.remove('hidden');
            dom.cardTitle.textContent = data.name;
            dom.cardThumb.src = data.edu?.image || data.texture || '';
            dom.cardThumb.alt = `${data.name} thumbnail`;
            dom.infoName.textContent = data.name;

            let material;
            if (selectedBody.mesh instanceof LOD) {
                material = ((selectedBody.mesh as LOD).levels[0].object as THREE.Mesh).material as THREE.MeshStandardMaterial;
            } else {
                material = (selectedBody.mesh as THREE.Mesh).material as THREE.MeshStandardMaterial;
            }
            const color = `#${material.color.getHexString()}`;
            updateInfoPanelColor(color);

            // --- Populate New Info Panel ---
            dom.infoImage.src = data.edu?.image || '';
            dom.infoImage.alt = `Image of ${data.name}`;
            dom.infoLink.href = data.edu?.readMoreUrl || '#';
            dom.infoShortDesc.textContent = data.edu?.shortDescription || '';

            // Clear previous stats
            dom.infoBasicStats.innerHTML = '';
            dom.infoOrbitalChars.innerHTML = '';

            // Basic Stats
            addStat(dom.infoBasicStats, 'Radius', data.radius.toLocaleString(), 'km');
            addStat(dom.infoBasicStats, 'Mass', data.mass, 'x 10^24 kg');
            addStat(dom.infoBasicStats, 'Density', data.density, 'kg/m³');
            addStat(dom.infoBasicStats, 'Gravity', data.surfaceGravity, 'm/s²');

            // Orbital Characteristics
            const distanceInKm = type === 'moon' ? (data.semiMajorAxisKm || 0) : data.semiMajorAxis * KM_PER_AU;
            const distanceUnit = store.getState().distanceUnit;
            addStat(dom.infoOrbitalChars, 'Orbital Period', data.orbitalPeriod, 'days');
            addStat(dom.infoOrbitalChars, 'Semi-Major Axis', formatDistance(distanceInKm, distanceUnit), '', 'The average distance from its parent body.');
            addStat(dom.infoOrbitalChars, 'Eccentricity', data.eccentricity.toFixed(4));
            addStat(dom.infoOrbitalChars, 'Inclination', data.inclination, '°');

            // Handle Exact Mode panel
            const exactModeContainer = document.getElementById('info-exact-mode')!;
            const exactModeToggle = document.getElementById('exact-mode-toggle')!;
            const exactModeContent = document.getElementById('exact-mode-content')!;

            if (data.orbitalElements) {
                exactModeContainer.classList.remove('hidden');
                exactModeContent.innerHTML = ''; // Clear previous content

                const elements = {
                    'Semi-Major Axis': `${(data.orbitalElements.aKm / KM_PER_AU).toFixed(4)} AU`,
                    'Eccentricity': data.orbitalElements.e.toFixed(6),
                    'Inclination': `${data.orbitalElements.iDeg.toFixed(4)}°`,
                    'Lon. of Asc. Node (Ω)': `${data.orbitalElements.lanDeg.toFixed(4)}°`,
                    'Arg. of Periapsis (ω)': `${data.orbitalElements.argPeriDeg.toFixed(4)}°`,
                    'Mean Anomaly at Epoch': `${data.orbitalElements.meanAnomalyDeg.toFixed(4)}°`,
                    'Epoch': data.orbitalElements.epochISO.split('T')[0],
                };

                for (const [key, value] of Object.entries(elements)) {
                    const strong = document.createElement('strong');
                    strong.textContent = `${key}:`;
                    const span = document.createElement('span');
                    span.textContent = value;
                    exactModeContent.appendChild(strong);
                    exactModeContent.appendChild(span);
                }

                exactModeToggle.onclick = () => exactModeContent.classList.toggle('hidden');

            } else {
                exactModeContainer.classList.add('hidden');
            }

            (dom.infoPanel as HTMLElement).classList.remove('hidden');
            (dom.freeCameraButton as HTMLElement).classList.remove('hidden');

            if ((window as any).__E2E__) {
                (window as any).__E2E__.lastSelected = selectedBody.id;
                window.dispatchEvent(new CustomEvent('e2e:body-rendered', { detail: { id: selectedBody.id } }));
            }
        }
    });

    const cameraTarget = new THREE.Vector3();

    interface Animate extends FrameRequestCallback {
        _lastTime?: number;
    }

    const animate: Animate = (time) => {
        requestAnimationFrame(animate);
        const now = time || performance.now();
        const dt = now - (animate._lastTime || now);
        animate._lastTime = now;
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

        const { timeScale, isPaused, simTime } = store.getState();
        const newTime = isPaused ? simTime : simTime + (dt / 1000) * timeScale;
        if (!isPaused) {
            store.getState().setSimTime(newTime);
        }

        physicsWorker.postMessage({
            command: 'update',
            payload: { deltaTime: isPaused ? 0 : (dt / 1000) * timeScale }
        });

        if (simulation.asteroidMaterialUniforms) {
            simulation.asteroidMaterialUniforms.u_time.value = newTime;
        }

        // Update positions and scales of all celestial objects
        celestialObjects.forEach(obj => {
            let physicsPosition = obj.physicsPosition;

            if (obj.parentId && obj.parentId !== 'sun') {
                const parent = bodyMap.get(obj.parentId);
                if (parent) {
                    const moonAngle = (2 * Math.PI * newTime) / obj.orbitalPeriod;
                    const semiMajorAxisAu = (obj.semiMajorAxisKm || 0) / KM_PER_AU;
                    const moonRelativePos = new THREE.Vector3(
                        semiMajorAxisAu * Math.cos(moonAngle),
                        0,
                        semiMajorAxisAu * Math.sin(moonAngle)
                    );
                    physicsPosition = parent.physicsPosition.clone().add(moonRelativePos);
                }
            }

            const displayPosition = calculateDisplayPosition(physicsPosition, scaleTransition);
            obj.group.position.copy(displayPosition);

            const displayRadius = getDisplayRadius(obj.radius, scaleTransition);
            obj.mesh.scale.set(displayRadius, displayRadius, displayRadius);
        });


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

        if (store.getState().selectedBodyId) {
            const selectedBody = celestialObjects.find(c => c.id === store.getState().selectedBodyId);
            if (selectedBody && selectedBody.name !== 'Sun') {
                const planetAngle = (2 * Math.PI * store.getState().simTime) / selectedBody.orbitalPeriod;
                const a_au = selectedBody.semiMajorAxis;
                const e = selectedBody.eccentricity;
                const r_au = a_au * (1 - e * e) / (1 + e * Math.cos(planetAngle));
                const r_km = r_au * KM_PER_AU;
                const r_m = r_au * AU_TO_M;
                const a_m = a_au * AU_TO_M;
                const speed_m_s = instantaneousOrbitalSpeed({ a_m, r_m });
                const distanceUnit = store.getState().distanceUnit;
                dom.cardStats.textContent = `Dist: ${formatDistance(r_km, distanceUnit)} • Speed: ${speedDisplayKmPerS(speed_m_s)}`;
            } else if (selectedBody) {
                dom.cardStats.textContent = 'At the center of the solar system';
            }
        }

        orbitManager.updateLODs(camera, 800);
        trailManager.update();

        celestialObjects.forEach(obj => {
            if (obj.mesh instanceof LOD) {
                (obj.mesh as LOD).update(camera);
            }
        });

        if (simulation.selectedGlow) {
            const pulseTime = time * 0.001 * (2 * Math.PI) / 1.2; // 1.2s cycle
            const scale = 1.3 + Math.sin(pulseTime) * 0.1; // 1.2 to 1.4
            const opacity = 0.7 + Math.sin(pulseTime) * 0.2; // 0.5 to 0.9
            simulation.selectedGlow.scale.set(scale, scale, scale);
            (simulation.selectedGlow.material as THREE.MeshBasicMaterial).opacity = opacity;
        }

        TWEEN.update(time);
        controls.update();
        renderer.render(scene, camera);
    }

    animate(0);

    initShortcutsPanel();
    initPresetsPanel();
    initMainPanel();
    initTopBar();

    // --- E2E and App Readiness Notification ---
    // This should be the last thing to run.

    // We need to pass some parts of the app to the E2E hooks.
    const app = {
        store: store,
        renderer: {
            trails: trailManager
        },
        // We can't easily expose a preset applier without refactoring,
        // so the setPreset helper will not work, but tests drive the UI anyway.
    };

    // Notify E2E hooks (if they are loaded) that the app is ready.
    if ((window as any).__e2eNotifyReady) {
        (window as any).__e2eNotifyReady(app);
    } else {
        // Fallback for non-test environments, just set the ready flag.
        (window as any).__APP_READY = true;
    }
}

start();
