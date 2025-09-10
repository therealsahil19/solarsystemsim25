import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import simStore from '../state/simStore';
import { calculateDisplayPosition } from '../utils/scaling';

/**
 * Creates and configures the `OrbitControls` for the scene.
 * These controls allow the user to interact with the camera by orbiting,
 * panning, and zooming.
 * @param camera The `THREE.PerspectiveCamera` to be controlled.
 * @param renderer The `THREE.WebGLRenderer` whose DOM element will be used for event listeners.
 * @returns An instance of `OrbitControls` with the application's default settings.
 */
export function createControls(camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer): OrbitControls {
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = false;
    controls.enablePan = false;
    controls.enableRotate = false;
    controls.enableZoom = false;

    return controls;
}
