import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import { setupScene } from './scene';
import { planetData, CelestialBody } from './data';
import { scaleDistance, scaleBodyRadius, speedDisplayKmPerS } from './utils/misc';
import { createPlanetRings } from './bodies/rings';
import { createMoons } from './bodies/moons';
import { createCelestialBodySelector } from './ui/celestial-selector';
import { setupInteractions } from './interactions';
import { initInfoPanel, updateInfoPanelColor } from './ui/info-panel';
import { OrbitManager } from './orbits/OrbitManager';
import { store } from './state/store';
import { setupKeyboardShortcuts } from './keyboard';
import * as dom from './ui/dom';
import { instantaneousOrbitalSpeed } from './orbits/kepler';
import { AU_TO_M } from './utils/misc';
import { renderShortcutsList } from './ui/shortcuts-panel';

const CAMERA_FOCUS_DEFAULT_MS = 700;

const { scene, camera, renderer, controls, pointLight } = setupScene(dom.canvas);
const textureLoader = new THREE.TextureLoader();

const celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Mesh })[] = [];
const selectableObjects: THREE.Object3D[] = [];
let sun: THREE.Object3D | undefined;

const simulation = {
    speed: 1,
    isPaused: false,
    selectedObject: null as THREE.Object3D | null,
    focusTarget: null as THREE.Object3D | null,
    followTarget: null as THREE.Object3D | null,
    followOffset: new THREE.Vector3(),
    followSmoothing: 0.05,
    time: 0,
    lastSpeed: 1,
    isUserInteracting: false,
    isTweening: false,
    singleStep: false,
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
  renderer.setSize(window.innerWidth, window.innerHeight, false);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

applyDPR();

window.addEventListener('resize', applyDPR);

planetData.forEach(p_data => {
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const planetGeometry = new THREE.SphereGeometry(scaleBodyRadius(p_data.radius), 64, 64);
    let planetMaterial;
    let planet;

    if (p_data.name === 'Sun') {
        planetMaterial = new THREE.MeshStandardMaterial({
            emissive: 0xffff00,
            emissiveIntensity: 1.5,
            color: 0xffff00
        });
        if (p_data.texture) {
            const sunTexture = textureLoader.load(p_data.texture);
            planetMaterial.map = sunTexture;
            planetMaterial.emissiveMap = sunTexture;
        }
        planet = new THREE.Mesh(planetGeometry, planetMaterial);
        sun = planet;
        sun.add(pointLight);
        sun.castShadow = true;
        sun.receiveShadow = false;
    } else {
        planetMaterial = new THREE.MeshStandardMaterial({ color: p_data.color || 0xffffff });
        if (p_data.texture) {
            planetMaterial.map = textureLoader.load(p_data.texture);
        }
        planet = new THREE.Mesh(planetGeometry, planetMaterial);
        planet.castShadow = true;
        planet.receiveShadow = true;
    }

    planet.userData = { name: p_data.name, type: 'planet', data: p_data };
    planetGroup.add(planet);
    selectableObjects.push(planet);

    const celestialObject = { ...p_data, group: planetGroup, mesh: planet };
    celestialObjects.push(celestialObject);

    createPlanetRings(p_data, planetGroup, textureLoader);
    createMoons(p_data, planetGroup, selectableObjects);
});

const orbitManager = new OrbitManager(celestialObjects);
orbitManager.init(scene);

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
    const mat = new THREE.MeshStandardMaterial({ color: 0x888888, roughness: 0.8 });
    const inst = new THREE.InstancedMesh(geom, mat, count);

    const dummy = new THREE.Object3D();
    const beltMin = scaleDistance(2.2);
    const beltMax = scaleDistance(3.2);

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = THREE.MathUtils.randFloat(beltMin, beltMax);
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = THREE.MathUtils.randFloat(-0.5, 0.5);

        dummy.position.set(x, y, z);
        dummy.scale.setScalar(Math.random() * 0.5 + 0.5);
        dummy.updateMatrix();
        inst.setMatrixAt(i, dummy.matrix);
    }
    inst.instanceMatrix.needsUpdate = true;
    scene.add(inst);
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
    if (window._activeCameraTween) {
        window._activeCameraTween.stop?.();
        window._activeCameraTween = null;
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
        .easing(TWEEN.Easing.Cubic.Out)
        .onUpdate(() => controls.update())
        .onComplete(() => simulation.isTweening = false)
        .start();

    const t2 = new TWEEN.Tween(camera.position)
        .to(newPos, dur)
        .easing(TWEEN.Easing.Cubic.Out)
        .onUpdate(() => camera.lookAt(controls.target))
        .start();

    window._activeCameraTween = { stop: () => { t1.stop(); t2.stop(); } };
}

function onBodySelected(name: string) {
    const selectedObject = selectableObjects.find(obj => obj.userData.name === name);
    if (!selectedObject) return;

    store.getState().setSelectedBodyId(name);
    simulation.focusTarget = selectedObject;
    frameObject(selectedObject);

    const { data, type } = selectedObject.userData;

    dom.smallInfoCard.classList.remove('hidden');
    dom.cardTitle.textContent = data.name;
    dom.cardThumb.src = data.texture || '';
    dom.cardThumb.alt = `${data.name} thumbnail`;

    dom.infoName.textContent = data.name;
    const material = (selectedObject as THREE.Mesh).material as THREE.MeshStandardMaterial;
    const color = `#${material.color.getHexString()}`;
    updateInfoPanelColor(color);

    dom.infoImageContainer.innerHTML = '';
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
    dom.infoImageContainer.appendChild(svg);

    dom.infoBasicStats.innerHTML = '';
    const stats: { [key: string]: { value: string; tooltip?: string | null } } = {
        'Radius': { value: `${data.radius.toLocaleString()} km` },
        'Distance': {
            value: type === 'moon' ? `${Math.round(data.semiMajorAxisKm).toLocaleString()} km` : `${data.semiMajorAxis} AU`,
            tooltip: type !== 'moon' ? 'Astronomical Unit: the average distance from Earth to the Sun.' : null
        },
        'Orbital Period': {
            value: `${data.orbitalPeriod} days`,
            tooltip: 'The time it takes for the object to complete one orbit around its parent body.'
        }
    };

    for (const [key, { value, tooltip }] of Object.entries(stats)) {
        const strong = document.createElement('strong');
        strong.textContent = `${key}:`;

        const span = document.createElement('span');
        span.textContent = value;

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

        dom.infoBasicStats.appendChild(strong);
        dom.infoBasicStats.appendChild(span);
    }

    const advancedStats: { [key: string]: string } = {};
    if (data.axialTilt) {
        advancedStats['Axial Tilt'] = `${data.axialTilt}°`;
    }
    if (data.rings) {
        advancedStats['Rings'] = `${data.rings.bands.length} main bands`;
    }

    if (Object.keys(advancedStats).length > 0) {
        dom.infoAdvancedDetails.classList.remove('hidden');
        dom.advancedDetailsContent.innerHTML = '';
        for (const [key, value] of Object.entries(advancedStats)) {
            const strong = document.createElement('strong');
            strong.textContent = `${key}:`;
            const span = document.createElement('span');
            span.textContent = value;
            dom.advancedDetailsContent.appendChild(strong);
            dom.advancedDetailsContent.appendChild(span);
        }
    } else {
        dom.infoAdvancedDetails.classList.add('hidden');
    }

    dom.infoPanel.classList.remove('hidden');
    dom.freeCameraButton.classList.remove('hidden');

    clampZoomForBody(selectedObject);
}

createCelestialBodySelector(planetData, onBodySelected);
initInfoPanel();

function resetSimulation() {
    simulation.time = 0;
    simulation.focusTarget = sun!;
    store.getState().setSelectedBodyId('Sun');
    camera.position.set(0, 150, 400);
    controls.target.set(0, 0, 0);
    store.getState().setPaused(false);
    onBodySelected('Sun');
    dom.smallInfoCard.classList.add('hidden');
}

setupInteractions(camera, selectableObjects, sun!, simulation, onBodySelected, controls, resetSimulation, []);
setupKeyboardShortcuts(simulation, [], onBodySelected, camera, controls);

function updateShadowUI() {
    const isEnabled = dom.shadowToggle.checked;
    (document.getElementById('shadow-icon') as HTMLSpanElement).textContent = isEnabled ? '○' : '●';
    (document.getElementById('shadow-label') as HTMLLabelElement).textContent = isEnabled ? 'Shadows: On' : 'Shadows: Off';
    (document.querySelector('.tooltip .tooltip-text') as HTMLSpanElement).textContent = isEnabled
        ? 'Shadows are enabled, providing realistic shading. This may impact performance.'
        : 'Shadows are disabled for better performance. Enable for more realism.';
    renderer.shadowMap.enabled = isEnabled;
    scene.traverse((object) => {
        if ((object as THREE.Mesh).material) {
            ((object as THREE.Mesh).material as THREE.Material).needsUpdate = true;
        }
    });
}

dom.shadowToggle.addEventListener('change', updateShadowUI);
updateShadowUI();

let currentPreset = dom.performancePreset.value as 'auto' | 'low' | 'medium' | 'high';
dom.performancePreset.addEventListener('change', (e) => {
    currentPreset = (e.target as HTMLSelectElement).value as 'auto' | 'low' | 'medium' | 'high';
    setPerformancePreset(currentPreset);
});
setPerformancePreset(currentPreset);

function updateDebugHUD(avg: number) {
    if (!dom.debugHUD || dom.debugHUD.classList.contains('hidden')) {
        return;
    }
    dom.debugPreset.textContent = currentPreset;
    dom.debugDPR.textContent = renderer.getPixelRatio().toFixed(2);
    dom.debugAvgMs.textContent = avg ? avg.toFixed(1) : '...';
    dom.debugScale.textContent = perfState.dynamicScale.toFixed(2);
}

function updatePauseButtonUI() {
    dom.pauseButton.textContent = store.getState().isPaused ? 'Resume' : 'Pause';
}

let visibilityPaused = false;
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (!store.getState().isPaused) {
            visibilityPaused = true;
            store.getState().setPaused(true);
            updatePauseButtonUI();
        }
    } else {
        if (visibilityPaused) {
            store.getState().setPaused(false);
            visibilityPaused = false;
            updatePauseButtonUI();
        }
    }
});

window.addEventListener('blur', () => {
    if (!store.getState().isPaused) {
        visibilityPaused = true;
        store.getState().setPaused(true);
        updatePauseButtonUI();
    }
});

window.addEventListener('focus', () => {
    if (visibilityPaused) {
        store.getState().setPaused(false);
        visibilityPaused = false;
        updatePauseButtonUI();
    }
});

store.subscribe((state) => {
    const selectedBody = celestialObjects.find(c => c.name === state.selectedBodyId);
    if (selectedBody) {
        simulation.focusTarget = selectedBody.mesh;
    }
    updatePauseButtonUI();
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
        updateDebugHUD(avg);
    }

    if (!store.getState().isPaused) {
        simulation.time += (dt / 1000) * store.getState().timeScale;
        if (simulation.singleStep) {
            store.getState().setPaused(true);
            simulation.singleStep = false;
            updatePauseButtonUI();
        }
    }

    celestialObjects.forEach(p => {
        if (p.name === 'Sun') return;

        const a = scaleDistance(p.semiMajorAxis);
        const e = p.eccentricity;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e;

        const planetAngle = (2 * Math.PI * simulation.time) / p.orbitalPeriod;
        p.group.position.x = a * Math.cos(planetAngle) - c;
        p.group.position.z = b * Math.sin(planetAngle);

        if (p.moons) {
            p.moons.forEach(m => {
                if (m.mesh) {
                    const moonScaledDistance = scaleBodyRadius(p.radius) + m.semiMajorAxis * 200;
                    const moonAngle = (2 * Math.PI * simulation.time) / m.orbitalPeriod;
                    m.mesh.position.x = moonScaledDistance * Math.cos(moonAngle);
                    m.mesh.position.z = moonScaledDistance * Math.sin(moonAngle);
                }
            });
        }
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
    }

    if (store.getState().selectedBodyId) {
        const selectedBody = celestialObjects.find(c => c.name === store.getState().selectedBodyId);
        if (selectedBody && selectedBody.name !== 'Sun') {
            const planetAngle = (2 * Math.PI * simulation.time) / selectedBody.orbitalPeriod;
            const a_au = selectedBody.semiMajorAxis;
            const e = selectedBody.eccentricity;
            const r_au = a_au * (1 - e * e) / (1 + e * Math.cos(planetAngle));

            const r_m = r_au * AU_TO_M;
            const a_m = a_au * AU_TO_M;
            const speed_m_s = instantaneousOrbitalSpeed({ a_m, r_m });
            dom.cardStats.textContent = `Dist: ${r_au.toFixed(2)} AU • Speed: ${speedDisplayKmPerS(speed_m_s)}`;
        } else if (selectedBody) {
            dom.cardStats.textContent = 'At the center of the solar system';
        }
    }

    orbitManager.updateLODs(camera, 800);

    TWEEN.update();
    controls.update();
    renderer.render(scene, camera);
}

animate(0);

dom.helpButton.addEventListener('click', () => {
    renderShortcutsList();
    dom.helpOverlay.classList.toggle('hidden');
});

// Initial render of the shortcuts list
renderShortcutsList();
