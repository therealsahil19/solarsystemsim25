import * as THREE from 'three';
import { speedLevels, MAX_ZOOM_OUT } from '../main.js';
feat/simulation-enhancements
export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation, celestialObjects) {
=======
export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation, updatePauseButtonUI) {
main
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
            updatePauseButtonUI();
        }
    });

    domElements.pauseButton.addEventListener('click', () => {
        simulation.isPaused = !simulation.isPaused;
        updatePauseButtonUI();
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

    // --- Small Card Button Interactions ---
    domElements.smallInfoCard.addEventListener('click', (e) => {
        // Prevent button clicks from triggering this
        if (e.target.tagName !== 'BUTTON') {
            domElements.infoPanel.classList.remove('hidden');
        }
    });

    domElements.btnFrame.addEventListener('click', () => {
        if (simulation.selectedObject) {
            onBodySelected(simulation.selectedObject.userData.name);
        }
    });

    domElements.btnFollow.addEventListener('click', () => {
        if (!simulation.selectedObject) return;

        const isFollowing = domElements.btnFollow.getAttribute('aria-pressed') === 'true';
        if (isFollowing) {
            simulation.followTarget = null;
            domElements.btnFollow.setAttribute('aria-pressed', 'false');
        } else {
            simulation.followTarget = simulation.selectedObject;
            // Calculate and store the offset when follow is initiated
            const targetPosition = new THREE.Vector3();
            simulation.followTarget.getWorldPosition(targetPosition);
            simulation.followOffset = camera.position.clone().sub(targetPosition);
            domElements.btnFollow.setAttribute('aria-pressed', 'true');
        }
    });

    domElements.btnOrbit.addEventListener('click', () => {
        if (!simulation.selectedObject) return;
        const body = celestialObjects.find(c => c.name === simulation.selectedObject.userData.name);
        if (body && body.orbit) {
            body.orbit.visible = !body.orbit.visible;
        }
    });

    // --- Keyboard Shortcuts ---
    window.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'f' && simulation.selectedObject) {
            onBodySelected(simulation.selectedObject.userData.name);
        }
    });

    // Initial state
    // simulation.focusTarget = sun; // Let's start with a free camera
}
