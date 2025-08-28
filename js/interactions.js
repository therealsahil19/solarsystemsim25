import * as THREE from 'three';
import { speedLevels, MAX_ZOOM_OUT } from '../main.js';

export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        // ignore clicks on the UI
        if (domElements.celestialSelector.contains(event.target) || domElements.controlsPanel.contains(event.target)) {
            return;
        }

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(selectableObjects);

        if (intersects.length > 0) {
            const clicked = intersects[0].object;
            onBodySelected(clicked.userData.name);
        }
    });

    domElements.speedSlider.addEventListener('input', (event) => {
        const speedIndex = parseInt(event.target.value, 10);
        simulation.speed = speedLevels[speedIndex];
        domElements.speedValue.textContent = `${speedLevels[speedIndex]}x`;

        if (simulation.isPaused) {
            simulation.isPaused = false;
            domElements.pauseButton.textContent = 'Pause';
        }
    });

    domElements.pauseButton.addEventListener('click', () => {
        simulation.isPaused = !simulation.isPaused;
        domElements.pauseButton.textContent = simulation.isPaused ? 'Resume' : 'Pause';
    });

    domElements.resetButton.addEventListener('click', () => {
        resetSimulation();
    });

    domElements.freeCameraButton.addEventListener('click', () => {
        // Setting focusTarget to null stops the camera from following an object,
        // enabling "Free Camera" mode. The camera remains in its current position.
        simulation.focusTarget = null;
        domElements.freeCameraButton.classList.add('hidden');
        controls.minDistance = 0; // Reset zoom constraint
        controls.maxDistance = MAX_ZOOM_OUT; // Oort cloud visible
    });

    // --- User Interaction Tracking ---
    controls.addEventListener('start', () => {
        simulation.isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
        simulation.isUserInteracting = false;
    });

    // Initial state
    // simulation.focusTarget = sun; // Let's start with a free camera
}
