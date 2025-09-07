import * as THREE from 'three';
import { CelestialBody } from '../data';
import { scaleRingRadius } from '../utils/misc';
import saturnRingTextureUrl from '../assets/8k_saturn_ring_alpha.jpg';
import { initUserDataIfMissing } from '../utils/three-helpers';

/**
 * Creates the ring system for Jupiter, which consists of faint, dusty rings
 * represented by particle systems.
 * @param p_data The celestial body data for Jupiter.
 * @param planetGroup The `THREE.Group` of the planet to which the rings will be added.
 * @private
 */
function createJupiterRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Align rings with the equatorial plane
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    const mainRingData = ringData.bands.find(b => b.type === 'main');
    const haloRingData = ringData.bands.find(b => b.type === 'halo');
    const gossamerRingsData = ringData.bands.filter(b => b.type === 'gossamer');

    /** Helper to create a ring from a particle system. */
    const createParticleRing = (innerRadiusKm: number, outerRadiusKm: number, particleCount: number, color: string | number, size: number, opacity: number) => {
        const innerRadius = scaleRingRadius(innerRadiusKm);
        const outerRadius = scaleRingRadius(outerRadiusKm);
        const vertices = [];
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
            const z = (Math.random() - 0.5) * 0.05; // Small vertical displacement
            vertices.push(x, y, z);
        }

        const geometry = new THREE.BufferGeometry();
        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

        const material = new THREE.PointsMaterial({
            color: color,
            size: size,
            transparent: true,
            opacity: opacity,
            blending: THREE.AdditiveBlending, // For a brighter, glowing effect
        });

        const points = new THREE.Points(geometry, material);
        return points;
    };

    if (mainRingData) {
        const mainRing = createParticleRing(
            mainRingData.innerRadius,
            mainRingData.outerRadius,
            20000,
            ringData.color,
            0.02,
            0.05
        );
        initUserDataIfMissing(mainRing, { name: `${p_data.name} Main Ring` });
        ringGroup.add(mainRing);
    }

    if (haloRingData) {
        const haloRing = createParticleRing(
            haloRingData.innerRadius,
            haloRingData.outerRadius,
            10000,
            ringData.color,
            0.02,
            0.02
        );
        initUserDataIfMissing(haloRing, { name: `${p_data.name} Halo Ring` });
        ringGroup.add(haloRing);
    }

    gossamerRingsData.forEach(gossamerData => {
        const gossamerRing = createParticleRing(
            gossamerData.innerRadius,
            gossamerData.outerRadius,
            15000,
            ringData.color,
            0.015,
            0.01
        );
        initUserDataIfMissing(gossamerRing, { name: `${p_data.name} Gossamer Ring` });
        ringGroup.add(gossamerRing);
    });
}

/**
 * Creates the iconic ring system for Saturn using a detailed texture.
 * @param p_data The celestial body data for Saturn.
 * @param planetGroup The `THREE.Group` of the planet to which the rings will be added.
 * @param textureLoader A `THREE.TextureLoader` instance to load the ring texture.
 * @private
 */
function createSaturnRings(p_data: CelestialBody, planetGroup: THREE.Group, textureLoader: THREE.TextureLoader) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Align rings with the equatorial plane
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    const innerRadius = scaleRingRadius(ringData.bands[0].innerRadius);
    const outerRadius = scaleRingRadius(ringData.bands[ringData.bands.length - 1].outerRadius);
    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 256);

    /** Creates a simple, non-textured ring as a fallback if the texture fails to load. */
    const createFallbackRing = () => {
        console.warn(`Saturn's ring texture failed to load. Creating a fallback non-textured ring.`);
        const fallbackMaterial = new THREE.MeshStandardMaterial({
            color: ringData.color,
            side: THREE.DoubleSide,
            transparent: true,
            opacity: 0.5,
            roughness: 0.8,
            metalness: 0.1,
        });
        const rings = new THREE.Mesh(ringGeometry, fallbackMaterial);
        initUserDataIfMissing(rings, { name: `${p_data.name} Rings (Fallback)` });
        ringGroup.add(rings);
    };

    textureLoader.load(
        saturnRingTextureUrl,
        (ringTexture) => {
            ringTexture.colorSpace = THREE.SRGBColorSpace;
            const ringMaterial = new THREE.MeshStandardMaterial({
                map: ringTexture,
                alphaMap: ringTexture,
                color: ringData.color,
                side: THREE.DoubleSide,
                transparent: true,
                roughness: 0.4,
                metalness: 0.1,
            });
            const rings = new THREE.Mesh(ringGeometry, ringMaterial);
            initUserDataIfMissing(rings, { name: `${p_data.name} Rings` });
            ringGroup.add(rings);
        },
        undefined, // onProgress callback (not used)
        () => {
            createFallbackRing(); // onError callback
        }
    );
}

/**
 * Creates the narrow, dark ring system for Uranus.
 * Uses a procedurally generated noise texture to simulate the thin bands.
 * @param p_data The celestial body data for Uranus.
 * @param planetGroup The `THREE.Group` of the planet to which the rings will be added.
 * @private
 */
function createUranusRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Align rings with the equatorial plane
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    // Create a procedural noise texture for the alpha map to give the rings a subtle texture
    const noiseCanvas = document.createElement('canvas');
    const noiseContext = noiseCanvas.getContext('2d')!;
    noiseCanvas.width = 128;
    noiseCanvas.height = 1;
    const imageData = noiseContext.createImageData(128, 1);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() * 100 + 155;
        imageData.data[i] = value;
        imageData.data[i+1] = value;
        imageData.data[i+2] = value;
        imageData.data[i+3] = 255;
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

    // Create each ring band as a separate mesh
    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        initUserDataIfMissing(ring, { name: `${p_data.name} Ring (${band.type})` });
        ringGroup.add(ring);
    });
}

/**
 * Creates the clumpy and arc-like ring system for Neptune.
 * @param p_data The celestial body data for Neptune.
 * @param planetGroup The `THREE.Group` of the planet to which the rings will be added.
 * @private
 */
function createNeptuneRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    // Align rings with the equatorial plane
    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    // Create a procedural noise texture to simulate the clumpy nature of the main rings
    const noiseCanvas = document.createElement('canvas');
    const noiseContext = noiseCanvas.getContext('2d')!;
    noiseCanvas.width = 256;
    noiseCanvas.height = 1;
    const imageData = noiseContext.createImageData(256, 1);
    for (let i = 0; i < imageData.data.length; i += 4) {
        const value = Math.random() > 0.6 ? Math.random() * 80 + 20 : 0;
        imageData.data[i] = value;
        imageData.data[i+1] = value;
        imageData.data[i+2] = value;
        imageData.data[i+3] = 255;
    }
    noiseContext.putImageData(imageData, 0, 0);
    const noiseTexture = new THREE.CanvasTexture(noiseCanvas);
    noiseTexture.wrapS = THREE.RepeatWrapping;
    noiseTexture.repeat.x = 32;

    const ringMaterial = new THREE.MeshStandardMaterial({
        color: ringData.color,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
        roughness: 0.9,
        metalness: 0.1,
        alphaMap: noiseTexture,
    });

    // Create the main, continuous-but-clumpy ring bands
    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 256);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        initUserDataIfMissing(ring, { name: `${p_data.name} Ring (${band.type})` });
        ringGroup.add(ring);
    });

    // Create the bright, distinct arcs
    const arcMaterial = new THREE.MeshStandardMaterial({
        color: new THREE.Color(ringData.color).multiplyScalar(1.8),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 1.0,
        roughness: 0.8,
        metalness: 0.2,
    });

    ringData.arcs!.forEach((arc, index) => {
        const innerRadius = scaleRingRadius(arc.innerRadius);
        const outerRadius = scaleRingRadius(arc.outerRadius);
        const arcGeometry = new THREE.RingGeometry(
            innerRadius,
            outerRadius,
            128,
            1,
            arc.thetaStart, // Start angle
            arc.thetaLength // Sweep angle
        );
        const arcMesh = new THREE.Mesh(arcGeometry, arcMaterial);
        initUserDataIfMissing(arcMesh, { name: `${p_data.name} Ring Arc ${index + 1}` });
        ringGroup.add(arcMesh);
    });
}

/**
 * A dispatcher function that creates the appropriate ring system for a given planet.
 * It checks the planet's data and calls the corresponding specialized function.
 * @param p_data The celestial body data for the planet.
 * @param planetGroup The `THREE.Group` of the planet to which the rings will be added.
 * @param textureLoader A `THREE.TextureLoader` instance, needed for rings that use textures (like Saturn's).
 */
export function createPlanetRings(p_data: CelestialBody, planetGroup: THREE.Group, textureLoader: THREE.TextureLoader) {
    if (!p_data.rings) return;

    switch (p_data.rings.type) {
        case 'jupiter':
            createJupiterRings(p_data, planetGroup);
            break;
        case 'saturn':
            createSaturnRings(p_data, planetGroup, textureLoader);
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
