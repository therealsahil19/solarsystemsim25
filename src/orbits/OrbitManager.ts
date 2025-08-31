import * as THREE from 'three';
import { CelestialBody } from '../data';
import { scaleDistance } from '../utils/misc';

interface OrbitData {
    line: THREE.Line;
    geometries: {
        high: THREE.BufferGeometry;
        low: THREE.BufferGeometry;
    };
    currentLOD: 'high' | 'low';
}

export class OrbitManager {
    private celestialObjects: CelestialBody[];
    private segmentsHigh: number;
    private segmentsLow: number;
    private color: number;
    private opacity: number;
    private orbits: Map<string, OrbitData>;

    constructor(
        celestialObjects: CelestialBody[],
        { segmentsHigh = 512, segmentsLow = 64, color = 0xaaaaaa, opacity = 0.5 } = {}
    ) {
        this.celestialObjects = celestialObjects;
        this.segmentsHigh = segmentsHigh;
        this.segmentsLow = segmentsLow;
        this.color = color;
        this.opacity = opacity;
        this.orbits = new Map();
    }

    private createGeometries(body: CelestialBody): { high: THREE.BufferGeometry; low: THREE.BufferGeometry } {
        const a = scaleDistance(body.semiMajorAxis);
        const e = body.eccentricity;
        const b = a * Math.sqrt(1 - e * e);
        const c = a * e;

        const path = new THREE.Path().absellipse(-c, 0, a, b, 0, 2 * Math.PI, false, 0);

        const highResPoints = path.getSpacedPoints(this.segmentsHigh);
        const lowResPoints = path.getSpacedPoints(this.segmentsLow);

        const highResGeom = new THREE.BufferGeometry().setFromPoints(highResPoints);
        const lowResGeom = new THREE.BufferGeometry().setFromPoints(lowResPoints);

        return { high: highResGeom, low: lowResGeom };
    }

    public init(scene: THREE.Scene): void {
        const material = new THREE.LineBasicMaterial({
            color: this.color,
            opacity: this.opacity,
            transparent: true
        });

        this.celestialObjects.forEach(body => {
            if (body.semiMajorAxis > 0) {
                const geometries = this.createGeometries(body);

                const line = new THREE.Line(geometries.low, material);
                line.rotation.x = Math.PI / 2;
                line.userData.name = body.name;

                scene.add(line);

                this.orbits.set(body.name, {
                    line: line,
                    geometries: geometries,
                    currentLOD: 'low'
                });

                body.orbit = line;
            }
        });
    }

    public setLOD(bodyName: string, lod: 'high' | 'low'): void {
        const orbit = this.orbits.get(bodyName);
        if (orbit && orbit.currentLOD !== lod) {
            orbit.line.geometry.dispose();
            orbit.line.geometry = orbit.geometries[lod];
            orbit.currentLOD = lod;
        }
    }

    public updateLODs(camera: THREE.PerspectiveCamera, threshold: number): void {
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
