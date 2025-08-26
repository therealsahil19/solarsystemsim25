import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// --- DOM Elements ---
const infoPanel = document.getElementById('info-panel');
const infoName = document.getElementById('info-name');
const infoRadius = document.getElementById('info-radius');
const infoDistance = document.getElementById('info-distance');
const infoPeriod = document.getElementById('info-period');
const speedSlider = document.getElementById('speed-slider');

// --- Three.js Setup ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
camera.position.z = 80;
camera.position.y = 30;

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

const pointLight = new THREE.PointLight(0xffffff, 500);
scene.add(pointLight);
const ambientLight = new THREE.AmbientLight(0xffffff, 0.1);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// --- Simulation Core ---
const textureLoader = new THREE.TextureLoader();
const planetData = [
    { name: 'Sun', radius: 696340, color: 0xffff00, semiMajorAxis: 0, orbitalPeriod: 1 },
    { name: 'Mercury', radius: 2440, color: 0x888888, semiMajorAxis: 0.387, orbitalPeriod: 88.0 },
    { name: 'Venus', radius: 6052, color: 0xeeeeaa, semiMajorAxis: 0.723, orbitalPeriod: 224.7 },
    { name: 'Earth', radius: 6371, color: 0x0000ff, semiMajorAxis: 1.0, orbitalPeriod: 365.2, moons: [
        { name: 'Moon', radius: 1737, color: 0xcccccc, semiMajorAxis: 0.015, orbitalPeriod: 27.3 }
    ]},
    { name: 'Mars', radius: 3390, color: 0xff0000, semiMajorAxis: 1.524, orbitalPeriod: 687.0 },
    { name: 'Jupiter', radius: 69911, color: 0xffd8ad, semiMajorAxis: 5.204, orbitalPeriod: 4331, moons: [
        { name: 'Io', radius: 1821, color: 0.0028, semiMajorAxis: 0.03, orbitalPeriod: 1.77 },
        { name: 'Europa', radius: 1560, color: 0.0045, semiMajorAxis: 0.04, orbitalPeriod: 3.55 },
        { name: 'Ganymede', radius: 2634, color: 0.0071, semiMajorAxis: 0.05, orbitalPeriod: 7.15 },
        { name: 'Callisto', radius: 2410, color: 0.0126, semiMajorAxis: 0.06, orbitalPeriod: 16.69 },
    ]},
    { name: 'Saturn', radius: 58232, color: 0xf0e5c8, semiMajorAxis: 9.582, orbitalPeriod: 10747, rings: { innerRadius: 4, outerRadius: 6, texture: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Saturn_rings_texture.png' } },
    { name: 'Uranus', radius: 25362, color: 0xAFDBF5, semiMajorAxis: 19.229, orbitalPeriod: 30589 },
    { name: 'Neptune', radius: 24622, color: 0x3d5ef5, semiMajorAxis: 30.109, orbitalPeriod: 59800 },
];

function scaleDistance(au) {
    if (au === 0) return 0; // Sun is at the center

    // Inner planets (Mercury, Venus, Earth, Mars) - up to 1.8 AU
    if (au <= 1.8) {
        // Start at 30 to be clear of the sun, then scale linearly
        return 30 + au * 25;
    }

    // Gap, then Asteroid Belt - up to 3.5 AU
    if (au <= 3.5) {
        // Scaled position of Mars (approx) + a gap
        const marsPosition = 30 + 1.524 * 25; // ~68.1
        const gap = 30;
        const beltStart = marsPosition + gap; // ~98.1

        // Scale the region from Mars's orbit to the end of the belt region
        return beltStart + (au - 1.524) * 15;
    }

    // Gap, then Outer Planets - beyond 3.5 AU
    // Scaled position of the end of the belt region (at 3.5 AU)
    const beltEndPosition = (30 + 1.524 * 25) + 30 + (3.5 - 1.524) * 15; // ~127.74
    const outerGap = 50;
    const outerStart = beltEndPosition + outerGap; // ~177.74

    // Use a more aggressive linear scale for outer planets
    return outerStart + (au - 3.5) * 30;
}

function scaleBodyRadius(radius) {
    const scale = 0.018;
    return scale * Math.sqrt(radius);
}

const celestialObjects = [];
const selectableObjects = [];
let sun;

planetData.forEach(p_data => {
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const scaledDistance = scaleDistance(p_data.semiMajorAxis);

    const planetGeometry = new THREE.SphereGeometry(scaleBodyRadius(p_data.radius), 32, 32);
    const planetMaterial = new THREE.MeshStandardMaterial({ color: p_data.color });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.userData = { name: p_data.name, type: 'planet', data: p_data };
    planetGroup.add(planet);
    selectableObjects.push(planet);

    if (p_data.name === 'Sun') {
        sun = planet;
        planet.material.emissive = new THREE.Color(0xffff00);
    }

    const celestialObject = { ...p_data, group: planetGroup, mesh: planet };
    celestialObjects.push(celestialObject);

    const orbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(
        new THREE.Path().absellipse(0, 0, scaledDistance, scaledDistance, 0, 2 * Math.PI, false, 0).getSpacedPoints(200)
    ), new THREE.LineBasicMaterial({ color: 0xaaaaaa, opacity: 0.5, transparent: true }));
    orbit.rotation.x = Math.PI / 2;
    scene.add(orbit);

    if (p_data.rings) {
        const ringTexture = textureLoader.load(p_data.rings.texture);
        const ringGeometry = new THREE.RingGeometry(p_data.rings.innerRadius, p_data.rings.outerRadius, 64);
        const ringMaterial = new THREE.MeshBasicMaterial({ map: ringTexture, side: THREE.DoubleSide, transparent: true, opacity: 0.8 });
        const rings = new THREE.Mesh(ringGeometry, ringMaterial);
        rings.rotation.x = Math.PI / 2;
        planetGroup.add(rings);
    }

    if (p_data.moons) {
        celestialObject.moons.forEach(m_data => {
            const moonScaledDistance = scaleBodyRadius(p_data.radius) + m_data.semiMajorAxis * 200;
            const moonGeometry = new THREE.SphereGeometry(scaleBodyRadius(m_data.radius), 16, 16);
            const moonMaterial = new THREE.MeshStandardMaterial({ color: m_data.color });
            const moon = new THREE.Mesh(moonGeometry, moonMaterial);
            moon.userData = { name: m_data.name, type: 'moon', data: m_data, parent: p_data };
            m_data.mesh = moon;
            planetGroup.add(moon);
            selectableObjects.push(moon);

            const moonOrbit = new THREE.Line(new THREE.BufferGeometry().setFromPoints(
                new THREE.Path().absellipse(0, 0, moonScaledDistance, moonScaledDistance, 0, 2 * Math.PI, false, 0).getSpacedPoints(100)
            ), new THREE.LineBasicMaterial({ color: 0x888888, opacity: 0.5, transparent: true }));
            moonOrbit.rotation.x = Math.PI / 2;
            planetGroup.add(moonOrbit);
        });
    }
});

// --- Final Touches ---

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


// --- Interaction ---
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let selectedObject = null;
let cameraTarget = new THREE.Vector3();
let focusTarget = null;

window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(selectableObjects);

    if (intersects.length > 0) {
        const clicked = intersects[0].object;
        selectedObject = clicked;
        focusTarget = clicked;
        updateInfoPanel(clicked.userData);
    } else {
        selectedObject = null;
        focusTarget = sun; // Focus on sun if nothing is clicked
        infoPanel.classList.add('hidden');
    }
});

speedSlider.addEventListener('input', (event) => {
    simulationSpeed = Number(event.target.value);
});

function updateInfoPanel(data) {
    infoName.textContent = data.name;
    infoRadius.textContent = `${data.data.radius.toLocaleString()} km`;
    infoDistance.textContent = data.type === 'moon' ? `${data.data.semiMajorAxis * 149.6} M km (from ${data.parent.name})` : `${data.data.semiMajorAxis} AU`;
    infoPeriod.textContent = `${data.data.orbitalPeriod} days`;
    infoPanel.classList.remove('hidden');
}

// --- Animation Loop ---
const clock = new THREE.Clock();
let simulationSpeed = 50;

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();
    const simulationTime = elapsedTime * simulationSpeed;

    celestialObjects.forEach(p => {
        const scaledDistance = scaleDistance(p.semiMajorAxis);
        const planetAngle = (2 * Math.PI * simulationTime) / p.orbitalPeriod;
        p.group.position.x = scaledDistance * Math.cos(planetAngle);
        p.group.position.z = scaledDistance * Math.sin(planetAngle);

        if (p.moons) {
            p.moons.forEach(m => {
                const moonScaledDistance = scaleBodyRadius(p.radius) + m.semiMajorAxis * 200;
                const moonAngle = (2 * Math.PI * simulationTime) / m.orbitalPeriod;
                m.mesh.position.x = moonScaledDistance * Math.cos(moonAngle);
                m.mesh.position.z = moonScaledDistance * Math.sin(moonAngle);
            });
        }
    });

    // Camera focus logic
    if (focusTarget) {
        if (focusTarget === sun) {
            cameraTarget.set(0,0,0);
        } else {
            focusTarget.getWorldPosition(cameraTarget);
        }
    }
    controls.target.lerp(cameraTarget, 0.05);

    controls.update();
    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
