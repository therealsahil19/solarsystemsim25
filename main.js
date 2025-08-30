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

setupInteractions(camera, selectableObjects, sun, DOM, simulation, onBodySelected, controls, resetSimulation);

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
