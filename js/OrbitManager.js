import * as THREE from 'three';
import { scaleDistance } from './utils.js';

export class OrbitManager {
    constructor(celestialObjects, { segmentsHigh = 512, segmentsLow = 64, color = 0xaaaaaa, opacity = 0.5 } = {}) {
        this.celestialObjects = celestialObjects;
        this.segmentsHigh = segmentsHigh;
        this.segmentsLow = segmentsLow;
        this.color = color;
        this.opacity = opacity;
        this.orbits = new Map();
    }

    createGeometries(body) {
        const a = scaleDistance(body.semiMajorAxis);
        const e = body.eccentricity;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e; // distance from center to focus

        const path = new THREE.Path().absellipse(-c, 0, a, b, 0, 2 * Math.PI, false, 0);

        const highResPoints = path.getSpacedPoints(this.segmentsHigh);
        const lowResPoints = path.getSpacedPoints(this.segmentsLow);

        const highResGeom = new THREE.BufferGeometry().setFromPoints(highResPoints);
        const lowResGeom = new THREE.BufferGeometry().setFromPoints(lowResPoints);

        return { high: highResGeom, low: lowResGeom };
    }

    init(scene) {
        const material = new THREE.LineBasicMaterial({
            color: this.color,
            opacity: this.opacity,
            transparent: true
        });

        this.celestialObjects.forEach(body => {
            if (body.semiMajorAxis > 0) {
                const geometries = this.createGeometries(body);

                // Start with low-res geometry
                const line = new THREE.Line(geometries.low, material);
                line.rotation.x = Math.PI / 2;

                scene.add(line);

                this.orbits.set(body.name, {
                    line: line,
                    geometries: geometries,
                    currentLOD: 'low'
                });

                // Also attach the orbit line to the celestial object for easy access
                body.orbit = line;
            }
        });
    }

    setLOD(bodyName, lod) {
        const orbit = this.orbits.get(bodyName);
        if (orbit && orbit.currentLOD !== lod) {
            orbit.line.geometry.dispose(); // Dispose of the old geometry
            orbit.line.geometry = orbit.geometries[lod];
            orbit.currentLOD = lod;
        }
    }

    updateLODs(camera, threshold) {
        this.orbits.forEach((orbit, name) => {
            const body = this.celestialObjects.find(c => c.name === name);
            if (body && body.group) {
                const distance = camera.position.distanceTo(body.group.position);
                const newLod = distance > threshold ? 'low' : 'high';
                this.setLOD(name, newLod);
            }
        });
    }
}
