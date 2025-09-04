import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './ui/dom';
import { celestialBodyData } from './data';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { getShortcuts, ShortcutAction } from './state/shortcuts';
import { renderShortcutsList } from './ui/shortcuts-panel';
import store from './state/store';
import { Simulation } from './interactions';

/**
 * Sets up the global keyboard shortcut listeners for the application.
 *
 * @param simulation The mutable simulation state object.
 * @param orbits An array of all orbit line objects (currently unused but available).
 * @param onBodySelected A callback function to execute when a celestial body is selected via a shortcut.
 * @param camera The main `THREE.PerspectiveCamera`.
 * @param controls The `OrbitControls` instance.
 */
export function setupKeyboardShortcuts(
    simulation: Simulation,
    orbits: THREE.Line[],
    onBodySelected: (name: string) => void,
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
) {
    /**
     * Smoothly tweens the camera to frame a specific 3D object.
     * @param bodyMesh The `THREE.Object3D` to frame.
     * @private
     */
    function frameObject(bodyMesh: THREE.Object3D | null) {
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

    /**
     * The main action dispatcher. Takes a `ShortcutAction` and executes the corresponding logic.
     * @param action The `ShortcutAction` to perform.
     * @private
     */
    const handleKeyAction = (action: ShortcutAction) => {
        // Handle selecting bodies by number keys (1-9)
        if (action.startsWith('select-body-')) {
            const index = parseInt(action.split('-')[2], 10) - 1;
            if (celestialBodyData[index]) {
                onBodySelected(celestialBodyData[index].name);
            }
            return;
        }

        const { timeScale, setTimeScale, isPaused, setPaused, setSimTime, simTime } = store.getState();

        switch (action) {
            case 'toggle-pause': setPaused(!isPaused); break;
            case 'toggle-debug-hud': dom.debugHUD.classList.toggle('hidden'); break;
            case 'reset-time': dom.resetButton.click(); break;
            case 'toggle-shadows': (dom.shadowToggle as HTMLInputElement).click(); break;
            case 'increase-speed':
                setTimeScale(timeScale * 1.5);
                break;
            case 'decrease-speed':
                setTimeScale(timeScale / 1.5);
                break;
            case 'toggle-trails': {
                // Programmatically click the UI toggle to keep state consistent
                const toggle = document.getElementById('trails-enabled-toggle') as HTMLInputElement;
                if (toggle) toggle.click();
                break;
            }
            case 'frame-selected': frameObject(simulation.selectedObject); break;
            case 'toggle-help':
                renderShortcutsList();
                dom.helpOverlay.classList.toggle('hidden');
                break;
            case 'close-modals': dom.helpOverlay.classList.add('hidden'); break;
            case 'frame-advance':
                if(!isPaused) setPaused(true);
                setSimTime(simTime + 86400); // Step 1 day
                break;
            case 'fine-step-forward':
                if(!isPaused) setPaused(true);
                setSimTime(simTime + 3600); // Step 1 hour
                break;
            case 'fine-step-backward':
                if(!isPaused) setPaused(true);
                setSimTime(simTime - 3600); // Step 1 hour back
                break;
        }
    };

    dom.helpOverlayClose.addEventListener('click', () => {
        dom.helpOverlay.classList.add('hidden');
    });

    // The main keyboard event listener
    window.addEventListener('keydown', (event) => {
        // Ignore shortcuts if the user is typing in an input field
        if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            return;
        }

        const shortcuts = getShortcuts();
        let actionToPerform: ShortcutAction | null = null;

        // Find which action, if any, matches the current key press
        for (const action in shortcuts) {
            const binding = shortcuts[action as ShortcutAction];
            if (binding) {
                const eventMatch =
                    event.code === binding.code &&
                    !!event.shiftKey === !!binding.shiftKey &&
                    !!event.ctrlKey === !!binding.ctrlKey &&
                    !!event.altKey === !!binding.altKey;

                if (eventMatch) {
                    actionToPerform = action as ShortcutAction;
                    break;
                }
            }
        }

        if (actionToPerform) {
            event.preventDefault();
            handleKeyAction(actionToPerform);
        }
    });
}
