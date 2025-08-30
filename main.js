import * as THREE from 'three';
import * as DOM from './js/dom.js';
import { setupScene } from './js/scene.js';
import { planetData } from './js/data.js';
import { scaleDistance, scaleBodyRadius, instantaneousOrbitalSpeed, speedDisplayKmPerS, AU_TO_M } from './js/utils.js';
import { createPlanetRings } from './js/rings.js';
import { createMoons } from './js/moons.js';
import { createCelestialBodySelector } from './js/dom.js';
import { setupInteractions } from './js/interactions.js';
import { initInfoPanel, updateInfoPanelColor } from './js/info-panel.js';
import { OrbitManager } from './js/OrbitManager.js';
import * as TWEEN from '@tweenjs/tween.js';

// --- Setup ---
const { scene, camera, renderer, controls, pointLight } = setupScene(DOM.canvas);
const textureLoader = new THREE.TextureLoader();

// --- State ---
export const speedLevels = [0.5, 1, 2, 4, 8, 16, 32, 64, 128];
const celestialObjects = [];
const selectableObjects = [];
let sun;
export const MAX_ZOOM_OUT = 1700;

const simulation = {
    speed: speedLevels[1],
    isPaused: false,
    selectedObject: null,
    focusTarget: null,
    followTarget: null,
    followOffset: new THREE.Vector3(),
    followSmoothing: 0.05,
    time: 0,
    // Store the last speed before pausing
    lastSpeed: speedLevels[1],
    isUserInteracting: false,
    isTweening: false,
};

// ===== perfState (module scope) =====
const perfState = {
  MAX_DPR: 1.75,      // clamp for devicePixelRatio
  MIN_SCALE: 0.5,     // lowest dynamicScale
  dynamicScale: 1.0,  // current scale multiplier (0.5..1.0)
  frameTimes: [],     // circular buffer of recent frame durations (ms)
  evalInterval: 1000, // ms between evaluations
  lastEval: performance.now(),
  evalWindow: 60,     // number of samples to average (~1s at 60fps)
  upperMs: 22,        // if avg > upperMs -> step down
  lowerMs: 13,        // if avg < lowerMs -> step up
  step: 0.1,          // change step for dynamicScale
};

// Apply DPR + resize (call whenever dynamicScale or DPR clamp changes)
function applyDPR() {
  const dpr = Math.min(window.devicePixelRatio || 1, perfState.MAX_DPR) * perfState.dynamicScale;
  renderer.setPixelRatio(dpr);
  renderer.setSize(window.innerWidth, window.innerHeight, false); // false -> don't change style
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

// Call once at init to set initial DPR
applyDPR();

window.addEventListener('resize', applyDPR);

// --- Object Creation ---
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
    const geom = new THREE.SphereGeometry(0.05, 6, 6); // Low-poly spheres
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
        dummy.scale.setScalar(Math.random() * 0.5 + 0.5); // Random size
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

function clampZoomForBody(bodyMesh) {
    const box = new THREE.Box3().setFromObject(bodyMesh);
    const sphere = box.getBoundingSphere(new THREE.Sphere());
    const min = Math.max(sphere.radius * 1.2, 1);
    const max = Math.max(sphere.radius * 100, 1e6); // adjust for system scale

    controls.minDistance = min;
    controls.maxDistance = max;

    // Also tighten camera near/far for depth precision
    camera.near = Math.max(sphere.radius * 0.001, 0.01);
    camera.far = Math.max(sphere.radius * 2000, 1e7);
    camera.updateProjectionMatrix();
}

function focusOn(bodyMesh, duration = 900) {
  simulation.isTweening = true;
  const box = new THREE.Box3().setFromObject(bodyMesh);
  const sphere = box.getBoundingSphere(new THREE.Sphere());
  const target = sphere.center.clone();

  // compute a camera position offset that keeps the same direction but backs off
  const dir = camera.position.clone().sub(controls.target).normalize();
  const newPos = target.clone().add(dir.multiplyScalar(Math.max(sphere.radius * 3, 50)));

  // animate controls.target
  new TWEEN.Tween(controls.target)
    .to({ x: target.x, y: target.y, z: target.z }, duration)
    .easing(TWEEN.Easing.Cubic.Out)
    .onComplete(() => {
      simulation.isTweening = false;
    })
    .start();
  // animate camera.position
  new TWEEN.Tween(camera.position).to({ x: newPos.x, y: newPos.y, z: newPos.z }, duration).easing(TWEEN.Easing.Cubic.Out).start();
}

function onBodySelected(name) {
    const selectedObject = selectableObjects.find(obj => obj.userData.name === name);
    if (!selectedObject) return;

    simulation.selectedObject = selectedObject;
    simulation.focusTarget = selectedObject;
    focusOn(selectedObject);

    const { data, type } = selectedObject.userData;

    // --- Update Small Info Card ---
    DOM.smallInfoCard.classList.remove('hidden');
    DOM.cardTitle.textContent = data.name;
    DOM.cardThumb.src = data.texture || ''; // Use texture if available
    DOM.cardThumb.alt = `${data.name} thumbnail`;


    // --- Update Header and Color ---
    DOM.infoName.textContent = data.name;
    const color = `#${selectedObject.material.color.getHexString()}`;
    updateInfoPanelColor(color);

    // --- Create and Display Placeholder Image ---
    DOM.infoImageContainer.innerHTML = ''; // Clear previous image
    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("width", "100%");
    svg.setAttribute("height", "100%");
    const rect = document.createElementNS(svgNS, "rect");
    rect.setAttribute("width", "100%");
    rect.setAttribute("height", "100%");
    rect.setAttribute("fill", color);
    svg.appendChild(rect);
    DOM.infoImageContainer.appendChild(svg);

    // --- Populate Basic Stats ---
    DOM.infoBasicStats.innerHTML = '';
    const stats = {
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

        DOM.infoBasicStats.appendChild(strong);
        DOM.infoBasicStats.appendChild(span);
    }

    // --- Populate Advanced Details ---
    const advancedStats = {};
    if (data.axialTilt) {
        advancedStats['Axial Tilt'] = `${data.axialTilt}°`;
    }
    if (data.rings) {
        advancedStats['Rings'] = `${data.rings.bands.length} main bands`;
    }

    if (Object.keys(advancedStats).length > 0) {
        DOM.infoAdvancedDetails.classList.remove('hidden');
        DOM.advancedDetailsContent.innerHTML = '';
        for (const [key, value] of Object.entries(advancedStats)) {
            const strong = document.createElement('strong');
            strong.textContent = `${key}:`;
            const span = document.createElement('span');
            span.textContent = value;
            DOM.advancedDetailsContent.appendChild(strong);
            DOM.advancedDetailsContent.appendChild(span);
        }
    } else {
        DOM.infoAdvancedDetails.classList.add('hidden');
    }


    // --- Show Panel and Buttons ---
    DOM.infoPanel.classList.remove('hidden');
    DOM.freeCameraButton.classList.remove('hidden');

    // --- Adjust Camera ---
    clampZoomForBody(selectedObject);
}

createCelestialBodySelector(planetData, onBodySelected);
initInfoPanel();

function resetSimulation() {
    simulation.time = 0;
    simulation.focusTarget = sun;
    simulation.selectedObject = sun;
    camera.position.set(0, 150, 400); // Reset camera position
    controls.target.set(0, 0, 0);
    if (simulation.isPaused) {
        simulation.isPaused = false;
        DOM.pauseButton.textContent = 'Pause';
    }
    onBodySelected('Sun');
    DOM.smallInfoCard.classList.add('hidden');
}

setupInteractions(camera, selectableObjects, sun, DOM, simulation, onBodySelected, controls, resetSimulation, celestialObjects);

// --- Shadow Toggle ---
const shadowToggle = document.getElementById('shadow-toggle');
const shadowLabel = document.getElementById('shadow-label');
const shadowIcon = document.getElementById('shadow-icon');
const tooltipText = document.querySelector('.tooltip .tooltip-text');

function updateShadowUI() {
    const isEnabled = shadowToggle.checked;

    // Update Icon and Label
    shadowIcon.textContent = isEnabled ? '○' : '●';
    shadowLabel.textContent = isEnabled ? 'Shadows: On' : 'Shadows: Off';

    // Update Tooltip
    if (isEnabled) {
        tooltipText.textContent = 'Shadows are enabled, providing realistic shading. This may impact performance.';
    } else {
        tooltipText.textContent = 'Shadows are disabled for better performance. Enable for more realism.';
    }

    // Update Renderer
    renderer.shadowMap.enabled = isEnabled;
    scene.traverse((object) => {
        if (object.material) {
            object.material.needsUpdate = true;
        }
    });
}

shadowToggle.addEventListener('change', updateShadowUI);

// Initial UI setup
updateShadowUI();

// --- Animation Loop ---
const cameraTarget = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);

    const now = performance.now();
    const dt = now - (animate._lastTime || now);
    animate._lastTime = now;

    // store dt (ms) in circular buffer
    const buf = perfState.frameTimes;
    buf.push(dt);
    if (buf.length > perfState.evalWindow) buf.shift();

    // Evaluate every perfState.evalInterval ms
    if (now - perfState.lastEval >= perfState.evalInterval && buf.length > 3) {
        perfState.lastEval = now;
        const avg = buf.reduce((s, v) => s + v, 0) / buf.length;

        if (avg > perfState.upperMs && perfState.dynamicScale > perfState.MIN_SCALE) {
            perfState.dynamicScale = Math.max(perfState.MIN_SCALE, +(perfState.dynamicScale - perfState.step).toFixed(2));
            applyDPR();
            // console.log('perf: lowered scale =>', perfState.dynamicScale, 'avg ms', avg.toFixed(1));
        } else if (avg < perfState.lowerMs && perfState.dynamicScale < 1.0) {
            perfState.dynamicScale = Math.min(1.0, +(perfState.dynamicScale + perfState.step).toFixed(2));
            applyDPR();
            // console.log('perf: raised scale =>', perfState.dynamicScale, 'avg ms', avg.toFixed(1));
        }
    }

    if (!simulation.isPaused) {
        simulation.time += (dt / 1000) * simulation.speed;
    }

    celestialObjects.forEach(p => {
        if (p.name === 'Sun') return; // Sun doesn't orbit

        const a = scaleDistance(p.semiMajorAxis);
        const e = p.eccentricity;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e;

        const planetAngle = (2 * Math.PI * simulation.time) / p.orbitalPeriod;
        p.group.position.x = a * Math.cos(planetAngle) - c;
        p.group.position.z = b * Math.sin(planetAngle);

        if (p.moons) {
            p.moons.forEach(m => {
                const moonScaledDistance = scaleBodyRadius(p.radius) + m.semiMajorAxis * 200;
                const moonAngle = (2 * Math.PI * simulation.time) / m.orbitalPeriod;
                m.mesh.position.x = moonScaledDistance * Math.cos(moonAngle);
                m.mesh.position.z = moonScaledDistance * Math.sin(moonAngle);
            });
        }
    });

    if (simulation.focusTarget) {
        // If there's a focus target, move the camera towards it.
        if (simulation.focusTarget === sun) {
            cameraTarget.set(0, 0, 0);
        } else {
            simulation.focusTarget.getWorldPosition(cameraTarget);
        }

        // When an object is focused, the camera's target should smoothly follow it.
        if (!simulation.isTweening) {
            controls.target.lerp(cameraTarget, 0.05);
        }
    }

    // --- Handle Following Camera ---
    if (simulation.followTarget) {
        const targetPosition = new THREE.Vector3();
        simulation.followTarget.getWorldPosition(targetPosition);
        const desiredCamPos = targetPosition.clone().add(simulation.followOffset);
        camera.position.lerp(desiredCamPos, simulation.followSmoothing);
        controls.target.lerp(targetPosition, simulation.followSmoothing);
    }

    // --- Update Small Info Card Stats ---
    if (simulation.selectedObject && simulation.selectedObject.userData.data) {
        const selectedBody = celestialObjects.find(c => c.name === simulation.selectedObject.userData.name);
        if (selectedBody && selectedBody.name !== 'Sun') {
            // The sun is at a focus of the ellipse, which is at the origin of the scene.
            // The planet's position is already relative to the sun.
            const r_scaled = selectedBody.group.position.length();

            // To get the unscaled distance, we need to know the current angle, which we can derive from the simulation time.
            const planetAngle = (2 * Math.PI * simulation.time) / selectedBody.orbitalPeriod;
            const a_au = selectedBody.semiMajorAxis;
            const e = selectedBody.eccentricity;
            // Unscaled distance r from the focus (sun)
            const r_au = a_au * (1 - e * e) / (1 + e * Math.cos(planetAngle));

            const r_m = r_au * AU_TO_M;
            const a_m = a_au * AU_TO_M;
            const speed_m_s = instantaneousOrbitalSpeed({ a_m, r_m });
            DOM.cardStats.textContent = `Dist: ${r_au.toFixed(2)} AU • Speed: ${speedDisplayKmPerS(speed_m_s)}`;
        } else if (selectedBody) {
            DOM.cardStats.textContent = 'At the center of the solar system';
        }
    }

    // --- Update Orbit LODs ---
    orbitManager.updateLODs(camera, 800);

    TWEEN.update();
    controls.update();
    renderer.render(scene, camera);
}

animate();
