import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './ui/dom';
import { useStore } from './state/store';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

type Simulation = {
    speed: number;
    isPaused: boolean;
    selectedObject: THREE.Object3D | null;
    focusTarget: THREE.Object3D | null;
    followTarget: THREE.Object3D | null;
    followOffset: THREE.Vector3;
    followSmoothing: number;
    time: number;
    lastSpeed: number;
    isUserInteracting: boolean;
    isTweening: boolean;
    singleStep: boolean;
};

export function setupInteractions(
    camera: THREE.PerspectiveCamera,
    selectableObjects: THREE.Object3D[],
    sun: THREE.Object3D,
    simulation: Simulation,
    onBodySelected: (name: string) => void,
    controls: OrbitControls,
    resetSimulation: () => void,
    orbits: THREE.Line[],
) {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        const clickedOnUI = [
            dom.celestialSelector,
            dom.controlsPanel,
            dom.timeControls,
            dom.infoPanel,
            dom.helpOverlay,
            dom.debugHUD
        ].some(el => el && el.contains(event.target as Node));

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

    function updateTimeScaleUI() {
        const speed = useStore.getState().timeScale;
        dom.timeScaleValue.textContent = `${speed.toFixed(speed < 10 ? 1 : 0)}x`;
        dom.timeScaleInput.value = speed.toFixed(speed < 10 ? 2 : 0);

        const logSpeed = Math.log10(speed);
        if (dom.timeScaleSlider) {
            dom.timeScaleSlider.value = String(Math.max(Number(dom.timeScaleSlider.min), Math.min(Number(dom.timeScaleSlider.max), logSpeed)));
        }
    }

    if (dom.timeScaleSlider) {
        dom.timeScaleSlider.addEventListener('input', (event) => {
            const exponent = parseFloat((event.target as HTMLInputElement).value);
            useStore.getState().setTimeScale(Math.pow(10, exponent));
            useStore.getState().setPaused(false);
            updateTimeScaleUI();
        });
    }

    if (dom.timePresetButtons) {
        dom.timePresetButtons.forEach(button => {
            button.addEventListener('click', () => {
                const speed = parseFloat(button.dataset.speed!);
                useStore.getState().setTimeScale(speed);
                useStore.getState().setPaused(false);
                updateTimeScaleUI();
            });
        });
    }

    if (dom.timeScaleInput) {
        dom.timeScaleInput.addEventListener('change', (event) => {
            const speed = parseFloat((event.target as HTMLInputElement).value);
            if (!isNaN(speed) && speed > 0) {
                useStore.getState().setTimeScale(speed);
                useStore.getState().setPaused(false);
            }
            updateTimeScaleUI();
        });
    }

    function getStepDelta() {
        const speed = useStore.getState().timeScale;
        if (speed >= 1000) return 30;
        if (speed >= 100) return 10;
        if (speed >= 10) return 1;
        return 1 / 24;
    }

    if (dom.timeStepForward) {
        dom.timeStepForward.addEventListener('click', () => {
            simulation.time += getStepDelta();
            if (simulation.isPaused) {
                simulation.singleStep = true;
                simulation.isPaused = false;
            }
        });
    }

    if (dom.timeStepBackward) {
        dom.timeStepBackward.addEventListener('click', () => {
            simulation.time -= getStepDelta();
            if (simulation.isPaused) {
                simulation.singleStep = true;
                simulation.isPaused = false;
            }
        });
    }

    updateTimeScaleUI();

    dom.pauseButton.addEventListener('click', () => {
        useStore.getState().setPaused(!useStore.getState().isPaused);
    });

    dom.resetButton.addEventListener('click', () => {
        resetSimulation();
    });

    dom.freeCameraButton.addEventListener('click', () => {
        simulation.focusTarget = null;
        dom.freeCameraButton.classList.add('hidden');
        controls.minDistance = 0;
        controls.maxDistance = 1700;
    });

    controls.addEventListener('start', () => {
        simulation.isUserInteracting = true;
    });
    controls.addEventListener('end', () => {
        simulation.isUserInteracting = false;
    });

    dom.smallInfoCard.addEventListener('click', (e) => {
        if ((e.target as HTMLElement).tagName !== 'BUTTON') {
            dom.infoPanel.classList.remove('hidden');
        }
    });

    dom.btnFrame.addEventListener('click', () => {
        if (simulation.selectedObject) {
            onBodySelected(simulation.selectedObject.userData.name);
        }
    });

    dom.btnFollow.addEventListener('click', () => {
        if (!simulation.selectedObject) return;

        const isFollowing = dom.btnFollow.getAttribute('aria-pressed') === 'true';
        if (isFollowing) {
            simulation.followTarget = null;
            dom.btnFollow.setAttribute('aria-pressed', 'false');
        } else {
            simulation.followTarget = simulation.selectedObject;
            const targetPosition = new THREE.Vector3();
            simulation.followTarget.getWorldPosition(targetPosition);
            simulation.followOffset = camera.position.clone().sub(targetPosition);
            dom.btnFollow.setAttribute('aria-pressed', 'true');
        }
    });

    dom.btnOrbit.addEventListener('click', () => {
        if (!simulation.selectedObject) return;
        const bodyName = simulation.selectedObject.userData.name;
        const orbit = orbits.find(o => o.userData.name === bodyName);
        if (orbit) {
            orbit.visible = !orbit.visible;
        }
    });
}
