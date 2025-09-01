import * as THREE from 'three';
import { createRenderer } from './renderer';
import { createControls } from './controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Create and export singletons that can be imported by other modules
export const scene = new THREE.Scene();
export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
export const pointLight = new THREE.PointLight(0xffffff, 500);

// These will be initialized by the init function
export let renderer: THREE.WebGLRenderer;
export let controls: OrbitControls;

export function initScene(canvas: HTMLCanvasElement) {
    camera.position.z = 80;
    camera.position.y = 30;
    camera.updateProjectionMatrix();

    renderer = createRenderer(canvas);
    controls = createControls(camera, renderer);

    pointLight.castShadow = true;
    pointLight.distance = 0;
    pointLight.decay = 1;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // The function no longer needs to return anything as the objects are exported
}
