import * as THREE from 'three';
import { CelestialBody } from "../data";

export interface SceneBody extends CelestialBody {
    group: THREE.Group;
    mesh: THREE.Object3D;
    physicsPosition: THREE.Vector3;
}
