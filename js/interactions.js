import * as THREE from 'three';
feat/desktop-experience-improvements
import * as TWEEN from '@tweenjs/tween.js';
import { MAX_ZOOM_OUT } from '../main.js';

export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation, orbits, planetData) {
=======
import { speedLevels, MAX_ZOOM_OUT } from '../main.js';
feat/simulation-enhancements
export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation, celestialObjects) {
=======
export function setupInteractions(camera, selectableObjects, sun, domElements, simulation, onBodySelected, controls, resetSimulation, updatePauseButtonUI) {
main
main
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        // Ignore clicks on UI elements
        const clickedOnUI = [
            domElements.celestialSelector,
            domElements.controlsPanel,
            domElements.timeControls,
            domElements.infoPanel,
            domElements.helpOverlay,
            domElements.debugHUD
        ].some(el => el && el.contains(event.target));

        if (clickedOnUI) {
            return;
        }

        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(selectableObjects);

        if (intersects.length > 0) {
            const clicked = intersects[0].object;
            onBodySelected(clicked.userData.name);
        } else {
            const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            const intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(groundPlane, intersection);

            new TWEEN.Tween(controls.target)
                .to({ x: intersection.x, y: intersection.y, z: intersection.z }, 500)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
        }
    });

    // --- Time Scale UI Logic ---
    function updateTimeScaleUI() {
        const speed = simulation.speed;
        domElements.timeScaleValue.textContent = `${speed.toFixed(speed < 10 ? 1 : 0)}x`;
        domElements.timeScaleInput.value = speed.toFixed(speed < 10 ? 2 : 0);

feat/desktop-experience-improvements
        const logSpeed = Math.log10(speed);
        const slider = domElements.timeScaleSlider;
        if (slider) {
            slider.value = Math.max(slider.min, Math.min(slider.max, logSpeed));
=======
        if (simulation.isPaused) {
            simulation.isPaused = false;
            updatePauseButtonUI();
main
        }
    }

    if (domElements.timeScaleSlider) {
        domElements.timeScaleSlider.addEventListener('input', (event) => {
            const exponent = parseFloat(event.target.value);
            simulation.speed = Math.pow(10, exponent);
            if (simulation.isPaused) {
                simulation.isPaused = false;
                domElements.pauseButton.textContent = 'Pause';
            }
            updateTimeScaleUI();
        });
    }

    if (domElements.timePresetButtons) {
        domElements.timePresetButtons.forEach(button => {
            button.addEventListener('click', () => {
                const speed = parseFloat(button.dataset.speed);
                simulation.speed = speed;
                if (simulation.isPaused) {
                    simulation.isPaused = false;
                    domElements.pauseButton.textContent = 'Pause';
                }
                updateTimeScaleUI();
            });
        });
    }

    if (domElements.timeScaleInput) {
        domElements.timeScaleInput.addEventListener('change', (event) => {
            let speed = parseFloat(event.target.value);
            if (!isNaN(speed) && speed > 0) {
                simulation.speed = speed;
                if (simulation.isPaused) {
                    simulation.isPaused = false;
                    domElements.pauseButton.textContent = 'Pause';
                }
            }
            updateTimeScaleUI();
        });
    }

    function getStepDelta() {
        const speed = simulation.speed;
        if (speed >= 1000) return 30;
        if (speed >= 100) return 10;
        if (speed >= 10) return 1;
        return 1 / 24;
    }

    if (domElements.timeStepForward) {
        domElements.timeStepForward.addEventListener('click', () => {
            simulation.time += getStepDelta();
            if (simulation.isPaused) {
                simulation.singleStep = true;
                simulation.isPaused = false;
            }
        });
    }

    if (domElements.timeStepBackward) {
        domElements.timeStepBackward.addEventListener('click', () => {
            simulation.time -= getStepDelta();
            if (simulation.isPaused) {
                simulation.singleStep = true;
                simulation.isPaused = false;
            }
        });
    }

    updateTimeScaleUI();

    domElements.pauseButton.addEventListener('click', () => {
        simulation.isPaused = !simulation.isPaused;
        updatePauseButtonUI();
    });

    domElements.resetButton.addEventListener('click', () => {
        resetSimulation();
    });

    domElements.freeCameraButton.addEventListener('click', () => {
        simulation.focusTarget = null;
        domElements.freeCameraButton.classList.add('hidden');
        controls.minDistance = 0;
        controls.maxDistance = MAX_ZOOM_OUT;
    });

    controls.addEventListener('start', () => {
        simulation.isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
        simulation.isUserInteracting = false;
    });

feat/desktop-experience-improvements
    const keyActionMap = {
        'Space': 'toggle-pause',
        'Backquote': 'toggle-debug-hud',
        'KeyR': 'reset-time',
        'KeyS': 'toggle-shadows',
        'Equal': 'increase-speed',
        'NumpadAdd': 'increase-speed',
        'Minus': 'decrease-speed',
        'NumpadSubtract': 'decrease-speed',
        'KeyT': 'toggle-trails',
        'Digit1': 'select-body-1',
        'Digit2': 'select-body-2',
        'Digit3': 'select-body-3',
        'Digit4': 'select-body-4',
        'Digit5': 'select-body-5',
        'Digit6': 'select-body-6',
        'Digit7': 'select-body-7',
        'Digit8': 'select-body-8',
        'Digit9': 'select-body-9',
        'KeyF': 'frame-selected',
        'KeyH': 'toggle-help',
        'Escape': 'close-modals',
        'Period': 'frame-advance',
    };

    function frameObject(bodyMesh) {
        if (!bodyMesh) return;
        const sphere = new THREE.Box3().setFromObject(bodyMesh).getBoundingSphere(new THREE.Sphere());
        const objectSize = sphere.radius * 2;
        const fov = camera.fov * (Math.PI / 180);
        const distance = (objectSize / 2) / Math.tan(fov / 2);
        const direction = new THREE.Vector3().subVectors(camera.position, controls.target).normalize();
        const newPosition = new THREE.Vector3().addVectors(sphere.center, direction.multiplyScalar(distance * 1.2));
        new TWEEN.Tween(camera.position)
            .to({ x: newPosition.x, y: newPosition.y, z: newPosition.z }, 600)
            .easing(TWEEN.Easing.Cubic.Out)
            .start();
    }

    const handleKeyAction = (action) => {
        if (action.startsWith('select-body-')) {
            const index = parseInt(action.split('-')[2], 10) - 1;
            if (planetData[index]) {
                onBodySelected(planetData[index].name);
            }
            return;
        }

        switch (action) {
            case 'toggle-pause': domElements.pauseButton.click(); break;
            case 'toggle-debug-hud': domElements.debugHUD.classList.toggle('hidden'); break;
            case 'reset-time': domElements.resetButton.click(); break;
            case 'toggle-shadows': domElements.shadowToggle.click(); break;
            case 'increase-speed': {
                const slider = domElements.timeScaleSlider;
                let currentValue = parseFloat(slider.value);
                currentValue = Math.min(slider.max, currentValue + 0.1);
                slider.value = currentValue;
                slider.dispatchEvent(new Event('input'));
                break;
            }
            case 'decrease-speed': {
                const slider = domElements.timeScaleSlider;
                let currentValue = parseFloat(slider.value);
                currentValue = Math.max(slider.min, currentValue - 0.1);
                slider.value = currentValue;
                slider.dispatchEvent(new Event('input'));
                break;
            }
            case 'toggle-trails': orbits.forEach(o => o.visible = !o.visible); break;
            case 'frame-selected': frameObject(simulation.selectedObject); break;
            case 'toggle-help': domElements.helpOverlay.classList.toggle('hidden'); break;
            case 'close-modals': domElements.helpOverlay.classList.add('hidden'); break;
            case 'frame-advance':
                simulation.singleStep = true;
                simulation.isPaused = false;
                domElements.pauseButton.textContent = 'Pause';
                break;
            case 'fine-step-forward': simulation.time += 1 / (24 * 60); if (simulation.isPaused) { simulation.singleStep = true; simulation.isPaused = false; } break;
            case 'fine-step-backward': simulation.time -= 1 / (24 * 60); if (simulation.isPaused) { simulation.singleStep = true; simulation.isPaused = false; } break;
        }
    };

    domElements.helpOverlayClose.addEventListener('click', () => {
        domElements.helpOverlay.classList.add('hidden');
    });

    window.addEventListener('keydown', (event) => {
        const targetTagName = document.activeElement.tagName;
        if (targetTagName === 'INPUT' || targetTagName === 'TEXTAREA' || targetTagName === 'SELECT') {
            return;
        }

        let action;
        if (event.shiftKey && event.code === 'ArrowRight') {
            action = 'fine-step-forward';
        } else if (event.shiftKey && event.code === 'ArrowLeft') {
            action = 'fine-step-backward';
        } else {
            action = keyActionMap[event.code];
        }

        if (action) {
            event.preventDefault();
            handleKeyAction(action);
        }
    });
=======
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
main
}
