import * as THREE from 'three';
import { CelestialBody } from "../data";

/**
 * Represents a celestial body within the 3D scene.
 * It extends the base `CelestialBody` data with Three.js-specific objects
 * required for rendering and physics updates.
 */
export interface SceneBody extends CelestialBody {
    /**
     * The main `THREE.Group` for the celestial body. This group acts as a container
     * for the body's mesh and any associated objects (like rings or moons if it's a parent).
     * Its position is updated in the animation loop.
     */
    group: THREE.Group;

    /**
     * The primary `THREE.Object3D` representing the visual appearance of the celestial body.
     * This is typically a `THREE.Mesh` or a `THREE.LOD` (Level of Detail) object.
     */
    mesh: THREE.Object3D;

    /**
     * The body's position in the physics simulation, measured in Astronomical Units (AU).
     * This vector is updated by the physics worker and is used as the source of truth
     * for calculating the display position.
     */
    physicsPosition: THREE.Vector3;
}
