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

    // Enable damping for smoother camera movements
    controls.enableDamping = true;
    controls.dampingFactor = 0.04; // Slightly lower for smoother feel

    // Adjust speeds for rotation and zooming - reduced for more precise control
    controls.rotateSpeed = 0.7; // Reduced from 0.9 for less sensitivity
    controls.zoomSpeed = 1.0;   // Reduced from 1.2 for smoother zooming

    // Enable panning and map it to the right mouse button
    controls.enablePan = true;
    controls.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    controls.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    // Disable middle mouse button (often used for dolly/zoom)
    controls.mouseButtons.MIDDLE = null as any;
    // Disable keyboard controls (arrow keys)
    controls.enableKeys = false;

    // Prevent camera from flipping below the horizon
    controls.maxPolarAngle = Math.PI / 2;

    // Map AU distances into display-space units based on the current scale preset
    const auToSceneUnits = (au: number) => {
        const preset = simStore.getState().scalePreset;
        const v = new THREE.Vector3(au, 0, 0);
        const p = calculateDisplayPosition(v, { active: false, progress: 1, fromPreset: preset, toPreset: preset });
        return p.length();
    };

    // Set conservative default zoom bounds (1 AU .. 1000 AU) in display units
    controls.minDistance = auToSceneUnits(1);
    controls.maxDistance = auToSceneUnits(1000);

    // Keep zoom bounds in sync if the scale preset changes
    simStore.subscribe(
        (s) => s.scalePreset,
        () => {
            controls.minDistance = auToSceneUnits(1);
            controls.maxDistance = auToSceneUnits(1000);
        }
    );

    // Configure touch controls for mobile devices
    controls.touches = { ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN };

    // Save the initial state so it can be reset later
    controls.saveState();

    return controls;
}
