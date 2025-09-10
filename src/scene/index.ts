import * as THREE from 'three';
import { createRenderer } from './renderer';
import { createControls } from './controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

/**
 * The main `THREE.Scene` instance for the application.
 * All rendered objects, lights, and cameras are added to this scene.
 */
export const scene = new THREE.Scene();

/**
 * The main `THREE.PerspectiveCamera` used to view the scene.
 */
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);

/**
 * A `THREE.PointLight` that acts as the primary light source, representing the Sun.
 * It is configured to cast shadows.
 */
export const pointLight = new THREE.PointLight(0xffffff, 500);

/**
 * The main `THREE.WebGLRenderer` instance.
 * This is initialized by the `initScene` function.
 */
export let renderer: THREE.WebGLRenderer;

/**
 * The `OrbitControls` instance for camera interaction.
 * This is initialized by the `initScene` function.
 */
export let controls: OrbitControls;

/**
 * Initializes the core components of the Three.js scene.
 * This function sets up the camera, renderer, controls, and lighting,
 * and should be called once when the application starts.
 * @param canvas The HTMLCanvasElement on which the scene will be rendered.
 */
export function initScene(canvas: HTMLCanvasElement) {
    if (!canvas) {
        throw new Error("FATAL: Canvas element not provided to initScene. App cannot start.");
    }
    // Set initial camera position
    camera.position.set(0, 150, 400);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    // Create the renderer and controls
    renderer = createRenderer(canvas);
    controls = createControls(camera, renderer);
    controls.target.set(0, 0, 0);

    // Configure the main point light (the Sun)
    pointLight.castShadow = true;
    pointLight.distance = 0;
    pointLight.decay = 1;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;

    // Add a soft ambient light to illuminate the entire scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
}
