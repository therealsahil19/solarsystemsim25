import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './ui/dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// The simulation object is now simpler, as most state is in the store.
type Simulation = {
    selectedObject: THREE.Object3D | null;
    focusTarget: THREE.Object3D | null;
    followTarget: THREE.Object3D | null;
    followOffset: THREE.Vector3;
    followSmoothing: number;
    isUserInteracting: boolean;
    isTweening: boolean;
    time: number;
    isPaused: boolean;
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
    const tooltipElement = document.getElementById('body-tooltip')!;
    let hoverTimeout: number | undefined;

    window.addEventListener('pointermove', (event: MouseEvent) => {
        clearTimeout(hoverTimeout);
        hoverTimeout = window.setTimeout(() => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(selectableObjects);

            if (intersects.length > 0) {
                const hovered = intersects[0].object;
                const { name, radius } = hovered.userData.data;

                tooltipElement.innerHTML = `<strong>${name}</strong><br>Radius: ${radius.toLocaleString()} km`;
                tooltipElement.style.left = `${event.clientX + 15}px`;
                tooltipElement.style.top = `${event.clientY + 15}px`;
                tooltipElement.classList.remove('hidden');
            } else {
                tooltipElement.classList.add('hidden');
            }
        }, 100);
    });

    window.addEventListener('click', (event) => {
        tooltipElement.classList.add('hidden');
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
