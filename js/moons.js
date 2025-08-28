import * as THREE from 'three';
import { scaleBodyRadius } from './utils.js';

export function createMoons(p_data, planetGroup, selectableObjects) {
    if (!p_data.moons) return;

    p_data.moons.forEach(m_data => {
        const moonScaledDistance = scaleBodyRadius(p_data.radius) + m_data.semiMajorAxis * 200;
        const moonGeometry = new THREE.SphereGeometry(scaleBodyRadius(m_data.radius), 16, 16);
        const moonMaterial = new THREE.MeshStandardMaterial({ color: m_data.color });
        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moon.castShadow = true;
        moon.receiveShadow = true;
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
