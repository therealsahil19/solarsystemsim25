import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './ui/dom';
import { planetData } from './data';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { getShortcuts, ShortcutAction } from './state/shortcuts';
import { renderShortcutsList } from './ui/shortcuts-panel';

type Simulation = {
    selectedObject: THREE.Object3D | null;
    time: number;
    isPaused: boolean;
    singleStep: boolean;
};

export function setupKeyboardShortcuts(
    simulation: Simulation,
    orbits: THREE.Line[],
    onBodySelected: (name: string) => void,
    camera: THREE.PerspectiveCamera,
    controls: OrbitControls,
) {
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

    const handleKeyAction = (action: ShortcutAction) => {
        if (action.startsWith('select-body-')) {
            const index = parseInt(action.split('-')[2], 10) - 1;
            if (planetData[index]) {
                onBodySelected(planetData[index].name);
            }
            return;
        }

        switch (action) {
            case 'toggle-pause': dom.pauseButton.click(); break;
            case 'toggle-debug-hud': dom.debugHUD.classList.toggle('hidden'); break;
            case 'reset-time': dom.resetButton.click(); break;
            case 'toggle-shadows': dom.shadowToggle.click(); break;
            case 'increase-speed': {
                const slider = dom.timeScaleSlider;
                let currentValue = parseFloat(slider.value);
                currentValue = Math.min(Number(slider.max), currentValue + 0.1);
                slider.value = String(currentValue);
                slider.dispatchEvent(new Event('input'));
                break;
            }
            case 'decrease-speed': {
                const slider = dom.timeScaleSlider;
                let currentValue = parseFloat(slider.value);
                currentValue = Math.max(Number(slider.min), currentValue - 0.1);
                slider.value = String(currentValue);
                slider.dispatchEvent(new Event('input'));
                break;
            }
            case 'toggle-trails': orbits.forEach(o => o.visible = !o.visible); break;
            case 'frame-selected': frameObject(simulation.selectedObject); break;
            case 'toggle-help':
                renderShortcutsList();
                dom.helpOverlay.classList.toggle('hidden');
                break;
            case 'close-modals': dom.helpOverlay.classList.add('hidden'); break;
            case 'frame-advance':
                simulation.singleStep = true;
                simulation.isPaused = false;
                dom.pauseButton.textContent = 'Pause';
                break;
            case 'fine-step-forward': simulation.time += 1 / (24 * 60); if (simulation.isPaused) { simulation.singleStep = true; simulation.isPaused = false; } break;
            case 'fine-step-backward': simulation.time -= 1 / (24 * 60); if (simulation.isPaused) { simulation.singleStep = true; simulation.isPaused = false; } break;
        }
    };

    dom.helpOverlayClose.addEventListener('click', () => {
        dom.helpOverlay.classList.add('hidden');
    });

    window.addEventListener('keydown', (event) => {
        if (document.activeElement && ['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) {
            return;
        }

        const shortcuts = getShortcuts();
        let actionToPerform: ShortcutAction | null = null;

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
