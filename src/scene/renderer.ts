import * as THREE from 'three';

/**
 * Creates and configures the `THREE.WebGLRenderer` for the application.
 * This function sets up the renderer with default settings for size,
 * shadow mapping, and tone mapping to achieve a visually appealing result.
 * @param canvas The HTMLCanvasElement to which the renderer will draw.
 * @returns An instance of `THREE.WebGLRenderer` configured for the scene.
 */
export function createRenderer(canvas: HTMLCanvasElement): THREE.WebGLRenderer {
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        logarithmicDepthBuffer: true // Enabled for better precision at astronomical scales
    });

    // Set initial size and enable shadow mapping
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Softer shadows

    // Use ACES Filmic tone mapping for a more cinematic look
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;

    return renderer;
}
