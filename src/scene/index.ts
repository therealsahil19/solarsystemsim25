import * as THREE from 'three';
import { createRenderer } from './renderer';
import { createControls } from './controls';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export function setupScene(canvas: HTMLCanvasElement): {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    pointLight: THREE.PointLight;
} {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000);
    camera.position.z = 80;
    camera.position.y = 30;
    camera.updateProjectionMatrix();

    const renderer = createRenderer(canvas);
    const controls = createControls(camera, renderer);

    const pointLight = new THREE.PointLight(0xffffff, 500);
    pointLight.castShadow = true;
    pointLight.distance = 0;
    pointLight.decay = 1;
    pointLight.shadow.mapSize.width = 2048;
    pointLight.shadow.mapSize.height = 2048;
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    return { scene, camera, renderer, controls, pointLight };
}
