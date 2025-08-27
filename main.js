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
    { name: 'Jupiter', radius: 69911, color: 0xffd8ad, semiMajorAxis: 5.204, orbitalPeriod: 4331, axialTilt: 3.08,
        rings: {
            type: 'jupiter',
            color: 0x9B8B80, // Dark reddish
            bands: [
                { innerRadius: 92000, outerRadius: 122500, type: 'halo' },
                { innerRadius: 122500, outerRadius: 129000, type: 'main' },
                { innerRadius: 129000, outerRadius: 182000, type: 'gossamer' },
                { innerRadius: 129000, outerRadius: 226000, type: 'gossamer' }
            ]
        },
        moons: [
            { name: 'Io', radius: 1821, color: 0.0028, semiMajorAxis: 0.03, orbitalPeriod: 1.77 },
            { name: 'Europa', radius: 1560, color: 0.0045, semiMajorAxis: 0.04, orbitalPeriod: 3.55 },
            { name: 'Ganymede', radius: 2634, color: 0.0071, semiMajorAxis: 0.05, orbitalPeriod: 7.15 },
            { name: 'Callisto', radius: 2410, color: 0.0126, semiMajorAxis: 0.06, orbitalPeriod: 16.69 },
    ]},
    { name: 'Saturn', radius: 58232, color: 0xf0e5c8, semiMajorAxis: 9.582, orbitalPeriod: 10747, axialTilt: 26.73,
        rings: {
            type: 'saturn',
            texture: 'https://bjj.mmedia.is/data/s_rings/transparency.png',
            color: 0xFFFEEA,
            bands: [
                { innerRadius: 74658, outerRadius: 92000 },  // C Ring
                { innerRadius: 92000, outerRadius: 117580 }, // B Ring
                { innerRadius: 122170, outerRadius: 136775 } // A Ring
            ]
        },
        moons: [
            { name: 'Mimas', radius: 198, color: 0xcccccc, semiMajorAxis: 0.045, orbitalPeriod: 0.94 },
            { name: 'Enceladus', radius: 250, color: 0xcccccc, semiMajorAxis: 0.055, orbitalPeriod: 1.4 },
            { name: 'Titan', radius: 2575, color: 0xcccccc, semiMajorAxis: 0.1, orbitalPeriod: 16 },
            { name: 'Iapetus', radius: 718, color: 0xcccccc, semiMajorAxis: 0.2, orbitalPeriod: 79.33 },
    ] },
    { name: 'Uranus', radius: 25362, color: 0xAFDBF5, semiMajorAxis: 19.229, orbitalPeriod: 30589, axialTilt: 97.92,
        rings: {
            type: 'uranus',
            color: 0x36454F, // Charcoal gray
            bands: [
                { innerRadius: 41836, outerRadius: 41838 }, // Ring 6
                { innerRadius: 42233, outerRadius: 42236 }, // Ring 5
                { innerRadius: 42568, outerRadius: 42572 }, // Ring 4
                { innerRadius: 44714, outerRadius: 44722 }, // Alpha
                { innerRadius: 45657, outerRadius: 45665 }, // Beta
                { innerRadius: 47174, outerRadius: 47176 }, // Eta
                { innerRadius: 47625, outerRadius: 47629 }, // Gamma
                { innerRadius: 48297, outerRadius: 48303 }, // Delta
                { innerRadius: 51120, outerRadius: 51178 }  // Epsilon
            ]
        },
        moons: [
            { name: 'Miranda', radius: 236, color: 0xcccccc, semiMajorAxis: 0.02, orbitalPeriod: 1.413 },
            { name: 'Ariel', radius: 579, color: 0xcccccc, semiMajorAxis: 0.03, orbitalPeriod: 2.520 },
            { name: 'Umbriel', radius: 585, color: 0xcccccc, semiMajorAxis: 0.04, orbitalPeriod: 4.144 },
            { name: 'Titania', radius: 789, color: 0xcccccc, semiMajorAxis: 0.05, orbitalPeriod: 8.706 },
    ] },
    { name: 'Neptune', radius: 24622, color: 0x3d5ef5, semiMajorAxis: 30.109, orbitalPeriod: 59800, axialTilt: 29.6,
        rings: {
            type: 'neptune',
            color: 0x607B8B, // Bluish tint
            bands: [
                { innerRadius: 40900, outerRadius: 42900 },   // Galle
                { innerRadius: 53143, outerRadius: 53257 },  // Le Verrier
                { innerRadius: 53200, outerRadius: 57200 },   // Lassell
                { innerRadius: 62914, outerRadius: 62950 }    // Adams
            ],
            arcs: [
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (247 * Math.PI / 180), thetaLength: (10 * Math.PI / 180) }, // Fraternité
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (261 * Math.PI / 180), thetaLength: (3 * Math.PI / 180) },  // Égalité 1
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (265 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) },  // Égalité 2
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (276 * Math.PI / 180), thetaLength: (4 * Math.PI / 180) },  // Liberté
                { innerRadius: 62914, outerRadius: 62950, thetaStart: (284.5 * Math.PI / 180), thetaLength: (1 * Math.PI / 180) }, // Courage
            ]
        },
        moons: [
            { name: 'Proteus', radius: 209, color: 0xcccccc, semiMajorAxis: 0.03, orbitalPeriod: 1.122 },
            { name: 'Triton', radius: 1350, color: 0xcccccc, semiMajorAxis: 0.04, orbitalPeriod: -5.877 },
            { name: 'Nereid', radius: 170, color: 0xcccccc, semiMajorAxis: 0.2, orbitalPeriod: 360.13 },
    ] },
];

// This is a placeholder for a more sophisticated ring scaling function.
// The values are divided by a constant to bring them into a similar
// scale as the planet radii in the simulation.
function scaleRingRadius(radiusKm) {
    return radiusKm / 8000;
}
    , moons: [
        { name: 'Proteus', radius: 209, color: 0xcccccc, semiMajorAxis: 0.03, orbitalPeriod: 1.122 },
        { name: 'Triton', radius: 1350, color: 0xcccccc, semiMajorAxis: 0.04, orbitalPeriod: -5.877 },
        { name: 'Nereid', radius: 170, color: 0xcccccc, semiMajorAxis: 0.2, orbitalPeriod: 360.13 },
    ] },
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

// This is a placeholder for a more sophisticated ring scaling function.
// The values are divided by a constant to bring them into a similar
// scale as the planet radii in the simulation.
function scaleRingRadius(radiusKm) {
    return radiusKm / 8000;
}

const celestialObjects = [];
const selectableObjects = [];
let sun;

function createJupiterRings(p_data, planetGroup) {
    const ringData = p_data.rings;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Apply tilt to the whole group
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    const mainRingData = ringData.bands.find(b => b.type === 'main');
    const haloRingData = ringData.bands.find(b => b.type === 'halo');
    const gossamerRingsData = ringData.bands.filter(b => b.type === 'gossamer');

    // Function to create a particle-based ring
    const createParticleRing = (innerRadiusKm, outerRadiusKm, particleCount, color, size, opacity) => {
        const innerRadius = scaleRingRadius(innerRadiusKm);
        const outerRadius = scaleRingRadius(outerRadiusKm);
        const vertices = [];
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            // Add a small vertical displacement for a "wispy" effect
            const z = (Math.random() - 0.5) * 0.05;
            vertices.push(x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({
            color: color,
            size: size,
            transparent: true,
            opacity: opacity,
            blending: THREE.AdditiveBlending, // Gives a nice "glow" for faint rings
        });

        const points = new THREE.Points(geometry, material);
        return points;
    };

    // Main Ring - Denser
    if (mainRingData) {
        const mainRing = createParticleRing(
            mainRingData.innerRadius,
            mainRingData.outerRadius,
            20000, // More particles for a denser look
            ringData.color,
            0.02,
            0.05 // Faint but visible
        );
        ringGroup.add(mainRing);
    }

    // Halo Ring - Fainter, more diffuse
    if (haloRingData) {
        const haloRing = createParticleRing(
            haloRingData.innerRadius,
            haloRingData.outerRadius,
            10000,
            ringData.color,
            0.02,
            0.02
        );
        ringGroup.add(haloRing);
    }

    // Gossamer Rings - Faintest
    gossamerRingsData.forEach(gossamerData => {
        const gossamerRing = createParticleRing(
            gossamerData.innerRadius,
            gossamerData.outerRadius,
            15000,
            ringData.color,
            0.015,
            0.01 // Barely visible
        );
        ringGroup.add(gossamerRing);
    });
}

function createSaturnRings(p_data, planetGroup) {
    const ringData = p_data.rings;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Apply tilt to the whole group
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    // Use the high-resolution texture for transparency
    const ringTexture = textureLoader.load(ringData.texture);
    // This texture will act as an alphaMap, defining the gaps.
    const ringMaterial = new THREE.MeshStandardMaterial({
        map: ringTexture, // Use the texture for color and brightness variations
        alphaMap: ringTexture, // Use the same texture for transparency
        color: ringData.color,
        side: THREE.DoubleSide,
        transparent: true,
        roughness: 0.4, // Icy look
        metalness: 0.1, // Not very metallic
    });

    // Create one large ring geometry. The texture will create the illusion of bands and gaps.
    const innerRadius = scaleRingRadius(ringData.bands[0].innerRadius);
    const outerRadius = scaleRingRadius(ringData.bands[ringData.bands.length - 1].outerRadius);

    const ringGeometry = new THREE.RingGeometry(
        innerRadius,
        outerRadius,
        256 // Increased segments for better texture mapping
    );

    const rings = new THREE.Mesh(ringGeometry, ringMaterial);
    ringGroup.add(rings);
}

function createUranusRings(p_data, planetGroup) {
    const ringData = p_data.rings;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Apply tilt to the whole group
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    // Create a subtle noise texture for the alpha map to make rings look less perfect
    const noiseCanvas = document.createElement('canvas');
    const noiseContext = noiseCanvas.getContext('2d');
    noiseCanvas.width = 128;
    noiseCanvas.height = 1;
    const imageData = noiseContext.createImageData(128, 1);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 100 + 155; // Mostly opaque with some transparency
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 255;
    }
    noiseContext.putImageData(imageData, 0, 0);
    const noiseTexture = new THREE.CanvasTexture(noiseCanvas);
    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.repeat.x = 8;

    const ringMaterial = new THREE.MeshStandardMaterial({
        color: ringData.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.7,
        roughness: 0.8,
        metalness: 0.2,
        alphaMap: noiseTexture
    });

    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ringGroup.add(ring);
    });
}

function createNeptuneRings(p_data, planetGroup) {
    const ringData = p_data.rings;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Apply tilt to the whole group
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    // Create a patchy noise texture for the main rings
    const noiseCanvas = document.createElement('canvas');
    const noiseContext = noiseCanvas.getContext('2d');
    noiseCanvas.width = 256;
    noiseCanvas.height = 1;
    const imageData = noiseContext.createImageData(256, 1);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() > 0.6 ? Math.random() * 80 + 20 : 0; // Create a clumpy/patchy effect
        imageData.data[i] = value;
        imageData.data[i + 1] = value;
        imageData.data[i + 2] = value;
        imageData.data[i + 3] = 255;
    }
    noiseContext.putImageData(imageData, 0, 0);
    const noiseTexture = new THREE.CanvasTexture(noiseCanvas);
    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.repeat.x = 32;

    // Material for the main, continuous parts of the rings
    const ringMaterial = new THREE.MeshStandardMaterial({
        color: ringData.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        roughness: 0.9,
        metalness: 0.1,
        alphaMap: noiseTexture,
    });

    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 256);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        ringGroup.add(ring);
    });

    // Material for the brighter arcs
    const arcMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(ringData.color).multiplyScalar(1.8), // Brighter blue
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1.0,
        roughness: 0.8,
        metalness: 0.2,
    });

    ringData.arcs.forEach(arc => {
        const innerRadius = scaleRingRadius(arc.innerRadius);
        const outerRadius = scaleRingRadius(arc.outerRadius);
        const arcGeometry = new THREE.RingGeometry(
            innerRadius,
            outerRadius,
            128,
            1,
            arc.thetaStart,
            arc.thetaLength
        );
        const arcMesh = new THREE.Mesh(arcGeometry, arcMaterial);
        ringGroup.add(arcMesh);
    });
}

function createPlanetRings(p_data, planetGroup) {
    if (!p_data.rings) return;

    switch (p_data.rings.type) {
        case 'jupiter':
            createJupiterRings(p_data, planetGroup);
            break;
        case 'saturn':
            createSaturnRings(p_data, planetGroup);
            break;
        case 'uranus':
            createUranusRings(p_data, planetGroup);
            break;
        case 'neptune':
            createNeptuneRings(p_data, planetGroup);
            break;
        default:
            console.warn(`Unknown ring type for planet ${p_data.name}`);
    }
}

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
        createPlanetRings(p_data, planetGroup);
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
            ), new THREE.LineBasicMaterial({ color: 0xaaaaaa, opacity: 0.5, transparent: true }));
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
