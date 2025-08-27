import * as THREE from 'three';
import * as DOM from './js/dom.js';
import { setupScene } from './js/scene.js';
import { planetData } from './js/data.js';
import { scaleDistance, scaleBodyRadius } from './js/utils.js';
import { createPlanetRings } from './js/rings.js';
import { createMoons } from './js/moons.js';
import { setupInteractions } from './js/interactions.js';

// --- Setup ---
const { scene, camera, renderer, controls, pointLight } = setupScene(DOM.canvas);
const textureLoader = new THREE.TextureLoader();

// --- State ---
const celestialObjects = [];
const selectableObjects = [];
let sun;
const simulation = {
    speed: 50,
    selectedObject: null,
    focusTarget: null,
};

// --- Object Creation ---
planetData.forEach(p_data => {
    const planetGroup = new THREE.Group();
    scene.add(planetGroup);

    const planetGeometry = new THREE.SphereGeometry(scaleBodyRadius(p_data.radius), 32, 32);
    const planetMaterial = new THREE.MeshStandardMaterial({ color: p_data.color });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);
    planet.userData = { name: p_data.name, type: 'planet', data: p_data };
    planetGroup.add(planet);
    selectableObjects.push(planet);

    if (p_data.name === 'Sun') {
        sun = planet;
        planet.material.emissive = new THREE.Color(0xffff00);
        sun.add(pointLight);
    }

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

setupInteractions(camera, selectableObjects, sun, DOM, simulation);

// --- Animation Loop ---
const clock = new THREE.Clock();
const cameraTarget = new THREE.Vector3();

function animate() {
    requestAnimationFrame(animate);

    const elapsedTime = clock.getElapsedTime();
    const simulationTime = elapsedTime * simulation.speed;

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

    if (simulation.focusTarget) {
        if (simulation.focusTarget === sun) {
            cameraTarget.set(0, 0, 0);
        } else {
            simulation.focusTarget.getWorldPosition(cameraTarget);
        }
    }
    controls.target.lerp(cameraTarget, 0.05);

    controls.update();
    renderer.render(scene, camera);
}

animate();
