import * as THREE from 'three';
import { LOD } from 'three';
import { celestialBodyData, CelestialBody } from '../data';
import { createPlanetRings } from '../bodies/rings';
import { safeLoadTexture } from '../utils/assets';
import { getGlowColor } from '../utils/misc';
import { initUserDataIfMissing } from '../utils/three-helpers';
import { pointLight, scene } from '../scene';

export async function createScene() {
    const textureLoader = new THREE.TextureLoader();

    const celestialObjects: (CelestialBody & { group: THREE.Group; mesh: THREE.Object3D; physicsPosition: THREE.Vector3 })[] = [];
    const selectableObjects: THREE.Object3D[] = [];
    const bodyMap = new Map<string, { data: CelestialBody, group: THREE.Group, mesh: THREE.Object3D, physicsPosition: THREE.Vector3 }>();
    let sun: THREE.Object3D | undefined;

    for (const bodyData of celestialBodyData) {
        const bodyGroup = new THREE.Group();
        let bodyMaterial;

        if (bodyData.name === 'Sun') {
            // Use a simple unlit material to avoid banding/weird shading on the sun
            bodyMaterial = new THREE.MeshBasicMaterial({ color: 0xffe066 });
            // Tweak the scene's main point light which is attached later to the sun mesh
            try { pointLight.intensity = 1.0; } catch {}
        } else {
            let map: THREE.Texture | null = null;
            if (bodyData.texture) {
                map = await safeLoadTexture(bodyData.texture);
            }
            bodyMaterial = map
                ? new THREE.MeshStandardMaterial({ color: bodyData.color || 0xffffff, map })
                : new THREE.MeshStandardMaterial({ color: bodyData.color || 0xffffff });
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

        bodyMesh.userData = { id: bodyData.id, name: bodyData.name, type: bodyData.parentId === 'sun' || bodyData.parentId === null ? 'planet' : 'moon', data: bodyData };
        bodyGroup.add(bodyMesh);

        const celestialObject = { ...bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: new THREE.Vector3() };
        celestialObjects.push(celestialObject);
        selectableObjects.push(bodyMesh);
        bodyMap.set(bodyData.id, { data: bodyData, group: bodyGroup, mesh: bodyMesh, physicsPosition: celestialObject.physicsPosition });

        createPlanetRings(bodyData, bodyGroup, textureLoader);
    }

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

    function createStarryBackground() {
        const starVertices = [] as number[];
        for (let i = 0; i < 8000; i++) {
            const x = (Math.random() - 0.5) * 4000;
            const y = (Math.random() - 0.5) * 4000;
            const z = (Math.random() - 0.5) * 4000;
            starVertices.push(x, y, z);
        }
        const starGeometry = new THREE.BufferGeometry();
        starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
        const starMaterial = new THREE.PointsMaterial({
            color: 0x99a0aa,
            size: 0.05,
            transparent: true,
            opacity: 0.6,
            depthWrite: false,
            sizeAttenuation: true
        });
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
        initUserDataIfMissing(inst, { name: 'Asteroid Belt' });
        inst.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
        const distanceScale = 150.0;
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
        return uniforms;
    }

    function createOortCloud() {
        const count = 2000;
        const oortRadius = 1500;
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            const radius = oortRadius * (0.85 + 0.3 * Math.random());
            const x = radius * Math.sin(phi) * Math.cos(theta);
            const y = radius * Math.sin(phi) * Math.sin(theta);
            const z = radius * Math.cos(phi);
            positions[i * 3 + 0] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
        }
        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const mat = new THREE.PointsMaterial({
            color: 0x6b8fb5,
            size: 1.2,
            transparent: true,
            opacity: 0.18,
            depthWrite: false,
            sizeAttenuation: true
        });
        const points = new THREE.Points(geom, mat);
        initUserDataIfMissing(points, { name: 'Oort Cloud' });
        scene.add(points);
    }

    createStarryBackground();
    const asteroidUniforms = createAsteroidBelt();
    createOortCloud();

    return { celestialObjects, selectableObjects, bodyMap, sun, asteroidUniforms };
}
