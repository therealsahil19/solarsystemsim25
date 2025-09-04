import * as THREE from 'three';
import { CelestialBody } from '../data';
import { getAssetUrl } from '../utils/assets';
import { scaleRingRadius } from '../utils/misc';
import { initUserDataIfMissing } from '../utils/three-helpers';

function createJupiterRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    const mainRingData = ringData.bands.find(b => b.type === 'main');
    const haloRingData = ringData.bands.find(b => b.type === 'halo');
    const gossamerRingsData = ringData.bands.filter(b => b.type === 'gossamer');

    const createParticleRing = (innerRadiusKm: number, outerRadiusKm: number, particleCount: number, color: string | number, size: number, opacity: number) => {
        const innerRadius = scaleRingRadius(innerRadiusKm);
        const outerRadius = scaleRingRadius(outerRadiusKm);
        const vertices = [];
        for (let i = 0; i < particleCount; i++) {
            const angle = Math.random() * 2 * Math.PI;
            const radius = THREE.MathUtils.randFloat(innerRadius, outerRadius);
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);
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
            blending: THREE.AdditiveBlending,
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

function createSaturnRings(p_data: CelestialBody, planetGroup: THREE.Group, textureLoader: THREE.TextureLoader) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

    const innerRadius = scaleRingRadius(ringData.bands[0].innerRadius);
    const outerRadius = scaleRingRadius(ringData.bands[ringData.bands.length - 1].outerRadius);
    const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 256);

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
        getAssetUrl(ringData.texture!),
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
        undefined,
        () => {
            createFallbackRing();
        }
    );
}

function createUranusRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

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

    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 128);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        initUserDataIfMissing(ring, { name: `${p_data.name} Ring (${band.type})` });
        ringGroup.add(ring);
    });
}

function createNeptuneRings(p_data: CelestialBody, planetGroup: THREE.Group) {
    const ringData = p_data.rings!;
    const ringGroup = new THREE.Group();
    planetGroup.add(ringGroup);

    ringGroup.rotation.x = Math.PI / 2;
    if (p_data.axialTilt) {
        const tiltInRadians = p_data.axialTilt * (Math.PI / 180);
        ringGroup.rotation.z = tiltInRadians;
    }

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

    ringData.bands.forEach(band => {
        const innerRadius = scaleRingRadius(band.innerRadius);
        const outerRadius = scaleRingRadius(band.outerRadius);
        const ringGeometry = new THREE.RingGeometry(innerRadius, outerRadius, 256);
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        initUserDataIfMissing(ring, { name: `${p_data.name} Ring (${band.type})` });
        ringGroup.add(ring);
    });

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
            arc.thetaStart,
            arc.thetaLength
        );
        const arcMesh = new THREE.Mesh(arcGeometry, arcMaterial);
        initUserDataIfMissing(arcMesh, { name: `${p_data.name} Ring Arc ${index + 1}` });
        ringGroup.add(arcMesh);
    });
}

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
