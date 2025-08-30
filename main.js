import * as THREE from 'three';
import * as DOM from './js/dom.js';
import { setupScene } from './js/scene.js';
import { planetData } from './js/data.js';
import { scaleDistance, scaleBodyRadius } from './js/utils.js';
import { createPlanetRings } from './js/rings.js';
import { createMoons } from './js/moons.js';
import { createCelestialBodySelector } from './js/dom.js';
import { setupInteractions } from './js/interactions.js';
import { initInfoPanel, updateInfoPanelColor } from './js/info-panel.js';
import * as TWEEN from '@tweenjs/tween.js';

// --- Config ---
const CAMERA_FOCUS_DEFAULT_MS = 700;

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
    time: 0,
    // Store the last speed before pausing
    lastSpeed: speedLevels[1],
    isUserInteracting: false,
    isTweening: false,
};
let visibilityPaused = false;

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

    const scaledDistance = scaleDistance(p_data.semiMajorAxis);
    const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(
        new THREE.Path().absellipse(0, 0, scaledDistance, scaledDistance, 0, 2 * Math.PI, false, 0).getSpacedPoints(200)
    ), new THREE.LineBasicMaterial({ color: 0xaaaaaa, opacity: 0.5, transparent: true }));
    orbit.rotation.x = Math.PI / 2;
    scene.add(orbit);

    createPlanetRings(p_data, planetGroup, textureLoader);
    createMoons(p_data, planetGroup, selectableObjects);
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
    const asteroidVertices = [];
    const beltMin = scaleDistance(2.2);
    const beltMax = scaleDistance(3.2);
    for (let i = 0; i < 5000; i++) {
        const angle = Math.random() * 2 * Math.PI;
        const radius = THREE.MathUtils.randFloat(beltMin, beltMax);
        const x = radius * Math.cos(angle);
        const z = radius * Math.sin(angle);
        const y = THREE.MathUtils.randFloat(-0.5, 0.5);
        asteroidVertices.push(x, y, z);
    }
    const asteroidGeometry = new THREE.BufferGeometry();
    asteroidGeometry.setAttribute('position', new THREE.Float32BufferAttribute(asteroidVertices, 3));
    const asteroidMaterial = new THREE.PointsMaterial({ color: 0x888888, size: 0.05 });
    const asteroidBelt = new THREE.Points(asteroidGeometry, asteroidMaterial);
    scene.add(asteroidBelt);
}

function createOortCloud() {
    const oortVertices = [];
    const oortRadius = 1500;
    for (let i = 0; i < 1000; i++) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const x = oortRadius * Math.sin(phi) * Math.cos(theta);
        const y = oortRadius * Math.sin(phi) * Math.sin(theta);
        const z = oortRadius * Math.cos(phi);
        oortVertices.push(x, y, z);
    }
    const oortGeometry = new THREE.BufferGeometry();
    oortGeometry.setAttribute('position', new THREE.Float32BufferAttribute(oortVertices, 3));
    const oortMaterial = new THREE.PointsMaterial({ color: 0x446688, size: 0.5, transparent: true, opacity: 0.2 });
    const oortCloud = new THREE.Points(oortGeometry, oortMaterial);
    scene.add(oortCloud);
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

function cancelActiveCameraTween() {
    if (window._activeCameraTween) {
        window._activeCameraTween.stop?.();
        window._activeCameraTween = null;
    }
}

function frameObject(object3D, opts = {}) {
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

function onBodySelected(name) {
    const selectedObject = selectableObjects.find(obj => obj.userData.name === name);
    if (!selectedObject) return;

    simulation.selectedObject = selectedObject;
    simulation.focusTarget = selectedObject;
    frameObject(selectedObject);

    const { data, type } = selectedObject.userData;

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
}

setupInteractions(camera, selectableObjects, sun, DOM, simulation, onBodySelected, controls, resetSimulation, updatePauseButtonUI);

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

function updatePauseButtonUI() {
    DOM.pauseButton.textContent = simulation.isPaused ? 'Resume' : 'Pause';
}

// --- Visibility API for Pausing ---
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        if (!simulation.isPaused) {
            visibilityPaused = true;
            simulation.isPaused = true;
            updatePauseButtonUI();
        }
    } else {
        if (visibilityPaused) {
            simulation.isPaused = false;
            visibilityPaused = false;
            updatePauseButtonUI();
        }
    }
});

window.addEventListener('blur', () => {
    if (!simulation.isPaused) {
        visibilityPaused = true;
        simulation.isPaused = true;
        updatePauseButtonUI();
    }
});

window.addEventListener('focus', () => {
    if (visibilityPaused) {
        simulation.isPaused = false;
        visibilityPaused = false;
        updatePauseButtonUI();
    }
});


// --- Animation Loop ---
const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);

    const deltaTime = clock.getDelta();
    if (!simulation.isPaused) {
        simulation.time += deltaTime * simulation.speed;
    }

    celestialObjects.forEach(p => {
        const scaledDistance = scaleDistance(p.semiMajorAxis);
        const planetAngle = (2 * Math.PI * simulation.time) / p.orbitalPeriod;
        p.group.position.x = scaledDistance * Math.cos(planetAngle);
        p.group.position.z = scaledDistance * Math.sin(planetAngle);

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

    TWEEN.update();
    controls.update();
    renderer.render(scene, camera);
}

animate();
