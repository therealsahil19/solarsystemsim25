import * as THREE from 'three';
import simStore from '../state/simStore';
import { Trail } from './Trail';
import { calculateDisplayPosition, ScaleTransition } from '../utils/scaling';
import { SceneBody } from '../types/scene';

/**
 * Represents a single point in a celestial body's position history.
 * @internal
 */
interface HistoryPoint {
    /** The simulation time (in days) at which this point was recorded. */
    time: number;
    /** The unscaled physical position in Astronomical Units (AU). */
    position: THREE.Vector3;
}

/**
 * Manages all dynamic `Trail` objects in the scene.
 * This class is responsible for creating a trail for each body, recording their
 * position history over time, and updating the trail geometries each frame.
 */
export class TrailManager {
    private trails = new Map<string, Trail>();
    private trailHistories = new Map<string, HistoryPoint[]>();
    private bodyMap = new Map<string, SceneBody>();

    /**
     * @param bodies An array of all `SceneBody` objects to be managed.
     * @param scene The main `THREE.Scene` to which the trails will be added.
     */
    constructor(private bodies: SceneBody[], private scene: THREE.Scene) {
        this.bodies.forEach(b => this.bodyMap.set(b.id, b));
    }

    /**
     * Initializes a `Trail` instance for each celestial body (except the sun)
     * and adds its line object to the scene.
     */
    public init() {
        this.bodies.forEach(body => {
            if (body.id !== 'sun') {
                const trail = new Trail(8000, new THREE.Color(body.color)); // 8000 is a generous max point count
                this.trails.set(body.id, trail);
                this.trailHistories.set(body.id, []);
                this.scene.add(trail.line);
            }
        });
    }

    /**
     * The main update loop for all trails. Called once per frame.
     * This method records the current position of each body, prunes the history
     * to the desired length, and updates the visual trail line.
     * @param scaleTransition The current scale transition state, used for positioning points.
     */
    public update(scaleTransition: ScaleTransition) {
        const { trailsEnabled, simTime } = simStore.getState();

        this.trails.forEach((trail, id) => {
            trail.setVisible(trailsEnabled);
            if (!trailsEnabled) return;

            const body = this.bodyMap.get(id);
            if (!body?.group) return;

            const history = this.trailHistories.get(id)!;

            // Add current physical position to history.
            history.push({
                time: simTime,
                position: body.physicsPosition.clone(),
            });

            // Determine trail duration based on orbital period and prune history.
            const isMoon = body.parentId !== 'sun' && body.parentId !== null;
            // Moons get shorter trails relative to their orbit to avoid clutter.
            const trailDurationDays = body.orbitalPeriod * (isMoon ? 0.5 : 2);

            const cutoffTime = simTime - trailDurationDays;
            const firstValidIndex = history.findIndex(p => p.time >= cutoffTime);

            if (firstValidIndex > 0) {
                history.splice(0, firstValidIndex);
            }

            // Scale the historical points to their display positions and update the trail geometry.
            const scaledPoints = history
                .filter(p => p && p.position && (typeof p.position.x === 'number') && (typeof p.position.y === 'number') && (typeof p.position.z === 'number'))
                .map(p => {
                    try {
                        return calculateDisplayPosition(p.position, scaleTransition);
                    } catch (error) {
                        console.warn('TrailManager.update: Error calculating display position:', error, p);
                        return new THREE.Vector3(0, 0, 0); // Fallback
                    }
                });

            // A final safety check to filter out any invalid points before updating the line.
            if (scaledPoints.length > 0 && scaledPoints.some(p => !p || typeof p.x !== 'number' || typeof p.y !== 'number' || typeof p.z !== 'number')) {
                console.warn('TrailManager.update: Invalid scaled points detected, filtering them out');
                const validPoints = scaledPoints.filter(p => p && typeof p.x === 'number' && typeof p.y === 'number' && typeof p.z === 'number');
                trail.updateFromSampledPoints(validPoints);
            } else {
                trail.updateFromSampledPoints(scaledPoints);
            }
        });
    }

    /**
     * Updates the resolution on all trail materials. This is required by `LineMaterial`
     * and should be called on window resize.
     * @param x The new width of the renderer.
     * @param y The new height of the renderer.
     */
    public updateResolutions(x: number, y: number) {
        this.trails.forEach(trail => trail.updateResolution(x, y));
    }
}
