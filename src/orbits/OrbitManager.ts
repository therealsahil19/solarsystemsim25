import * as THREE from 'three';
import { CelestialBody } from '../data';
import store from '../state/store';
import { calculateDisplayPosition, ScaleTransition } from '../utils/scaling';
import { keplerToCartesianFromMeanAnomaly, OrbitalElements as KeplerOrbitalElements } from './kepler';
import { KM_PER_AU } from '../utils/units';

interface OrbitData {
    line: THREE.Line;
    // Store unscaled AU points for dynamic rescaling
    auPoints: {
        high: THREE.Vector3[];
        low: THREE.Vector3[];
    };
    currentLOD: 'high' | 'low';
}

export class OrbitManager {
    private orbits = new Map<string, OrbitData>();
    private G = 6.67430e-11; // Gravitational constant

    constructor(
        private celestialObjects: CelestialBody[],
        private segmentsHigh = 512,
        private segmentsLow = 128,
        private color = 0xaaaaaa,
        private opacity = 0.5
    ) {}

    private createAuPoints(body: CelestialBody): { high: THREE.Vector3[]; low: THREE.Vector3[] } {
        const pointsHigh: THREE.Vector3[] = [];

        const elements = body.orbitalElements;
        const semiMajorAxisKm = elements?.aKm ?? (body.parentId === 'sun' ? body.semiMajorAxis * KM_PER_AU : body.semiMajorAxisKm!);
        if (!semiMajorAxisKm) return { high: [], low: [] };

        const eccentricity = elements?.e ?? body.eccentricity;
        const inclinationDeg = elements?.iDeg ?? body.inclination ?? 0;
        const lanDeg = elements?.lanDeg ?? 0;
        const argPeriDeg = elements?.argPeriDeg ?? 0;

        // For a stable orbit path, we don't need mean anomaly at epoch or a specific epoch.
        // We generate the path by iterating through the mean anomaly from 0 to 2*PI.
        const M0_rad = 0;
        const epoch = 0;

        let parentMassKg = 1.9885e30; // Default to Sun's mass
        if (body.parentId && body.parentId !== 'sun') {
            const parentBody = this.celestialObjects.find(b => b.id === body.parentId);
            if (parentBody?.mass) {
                parentMassKg = parentBody.mass * 1e24;
            }
        }
        const mu = this.G * parentMassKg;

        const keplerElements: KeplerOrbitalElements = {
            a_m: semiMajorAxisKm * 1000,
            e: eccentricity,
            i_rad: inclinationDeg * (Math.PI / 180),
            Omega_rad: lanDeg * (Math.PI / 180),
            omega_rad: argPeriDeg * (Math.PI / 180),
            M0_rad,
            epoch,
            mu
        };

        const AU_M = KM_PER_AU * 1000;

        for (let i = 0; i <= this.segmentsHigh; i++) {
            const M = (i / this.segmentsHigh) * 2 * Math.PI;
            const pos_m = keplerToCartesianFromMeanAnomaly(keplerElements, M);
            pointsHigh.push(new THREE.Vector3(pos_m.x / AU_M, pos_m.y / AU_M, pos_m.z / AU_M));
        }

        const pointsLow: THREE.Vector3[] = [];
        const step = this.segmentsHigh / this.segmentsLow;
        for (let i = 0; i <= this.segmentsLow; i++) {
            const index = Math.min(Math.round(i * step), pointsHigh.length - 1);
            pointsLow.push(pointsHigh[index]);
        }

        return { high: pointsHigh, low: pointsLow };
    }

    public init(scene: THREE.Scene, bodyMap: Map<string, { group: THREE.Group }>): void {
        const material = new THREE.LineBasicMaterial({
            color: this.color,
            opacity: this.opacity,
            transparent: true,
            linewidth: 1, // Note: this is not supported by all renderers/drivers
        });

        this.celestialObjects.forEach(body => {
            if (body.id === 'sun' || !body.parentId) return;

            const auPoints = this.createAuPoints(body);
            if (auPoints.high.length === 0) return;

            const initialPoints = auPoints.low.map(p => calculateDisplayPosition(p, { active: false, progress: 1, fromPreset: 'realistic', toPreset: store.getState().scalePreset }));
            const geometry = new THREE.BufferGeometry().setFromPoints(initialPoints);

            const line = new THREE.Line(geometry, material);
            line.userData.name = `${body.name} Orbit`;

            const parent = bodyMap.get(body.parentId);
            if (parent) {
                parent.group.add(line);
            } else {
                scene.add(line);
            }

            this.orbits.set(body.id, {
                line: line,
                auPoints: auPoints,
                currentLOD: 'low'
            });

            body.orbit = line;
        });
    }

    public update(transition: ScaleTransition): void {
        this.orbits.forEach((orbit) => {
            const auPoints = orbit.currentLOD === 'high' ? orbit.auPoints.high : orbit.auPoints.low;
            const positions = orbit.line.geometry.attributes.position as THREE.BufferAttribute;

            for (let i = 0; i < auPoints.length; i++) {
                const scaledPos = calculateDisplayPosition(auPoints[i], transition);
                positions.setXYZ(i, scaledPos.x, scaledPos.y, scaledPos.z);
            }

            positions.needsUpdate = true;
            orbit.line.geometry.computeBoundingSphere();
        });
    }

    public setLOD(bodyId: string, lod: 'high' | 'low'): void {
        const orbit = this.orbits.get(bodyId);
        if (orbit && orbit.currentLOD !== lod) {
            const newPoints = lod === 'high' ? orbit.auPoints.high : orbit.auPoints.low;
            orbit.line.geometry.dispose();
            orbit.line.geometry = new THREE.BufferGeometry().setFromPoints(newPoints);
            orbit.currentLOD = lod;
        }
    }

    public updateLODs(camera: THREE.PerspectiveCamera, threshold: number): void {
        this.orbits.forEach((orbit, id) => {
            const body = this.celestialObjects.find(c => c.id === id);
            if (body?.group) {
                const distance = camera.position.distanceTo(body.group.position);
                const newLod = distance > threshold ? 'low' : 'high';
                this.setLOD(id, newLod);
            }
        });
    }
}
