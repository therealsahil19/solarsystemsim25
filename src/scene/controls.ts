import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

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

    // Enable damping for smoother camera movements
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    // Adjust speeds for rotation and zooming
    controls.rotateSpeed = 0.9;
    controls.zoomSpeed = 1.2;

    // Enable panning and map it to the right mouse button
    controls.enablePan = true;
    controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;

    // Configure touch controls for mobile devices
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

    // Save the initial state so it can be reset later
    controls.saveState();

    return controls;
}
