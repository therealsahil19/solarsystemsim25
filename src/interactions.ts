import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './ui/dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { showHud } from './ui/contextual-hud';

// The simulation object is now simpler, as most state is in the store.
export type Simulation = {
    selectedObject: THREE.Object3D | null;
    focusTarget: THREE.Object3D | null;
    followTarget: THREE.Object3D | null;
    followOffset: THREE.Vector3;
    followSmoothing: number;
    isUserInteracting: boolean;
    isTweening: boolean;
    asteroidMaterialUniforms: { u_time: { value: number } } | null;
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
                // Add defensive check for userData.data
                const userData = hovered.userData;
                const data = userData?.data;
                const name = data?.name;
                const radius = data?.radius;

                if (name && typeof radius === 'number') {
                    tooltipElement.innerHTML = `<strong>${name}</strong><br>Radius: ${radius.toLocaleString()} km`;
                    tooltipElement.style.left = `${event.clientX + 15}px`;
                    tooltipElement.style.top = `${event.clientY + 15}px`;
                    tooltipElement.classList.remove('hidden');
                } else {
                    console.warn('Object missing valid userData.data:', hovered);
                    tooltipElement.classList.add('hidden');
                }
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
            showHud(clicked, camera);
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

    function triggerButtonFlash(btn: HTMLElement) {
        btn.classList.add('flash');
        btn.addEventListener('animationend', () => {
            btn.classList.remove('flash');
        }, { once: true });
    }

    dom.btnFrame.addEventListener('click', () => {
        if (simulation.selectedObject) {
            onBodySelected(simulation.selectedObject.userData.name);
            triggerButtonFlash(dom.btnFrame);
        }
    });

    dom.btnFollow.addEventListener('click', () => {
        if (!simulation.selectedObject) return;

        const isFollowing = simulation.followTarget === simulation.selectedObject;
        if (isFollowing) {
            simulation.followTarget = null;
        } else {
            simulation.followTarget = simulation.selectedObject;
            const targetPosition = new THREE.Vector3();
            simulation.followTarget.getWorldPosition(targetPosition);
            simulation.followOffset = camera.position.clone().sub(targetPosition);
        }
        triggerButtonFlash(dom.btnFollow);
    });

    dom.btnOrbit.addEventListener('click', () => {
        if (!simulation.selectedObject) return;
        const bodyName = simulation.selectedObject.userData.name;
        const orbit = orbits.find(o => o.userData.name === bodyName);
        if (orbit) {
            orbit.visible = !orbit.visible;
            const isPressed = dom.btnOrbit.getAttribute('aria-pressed') === 'true';
            dom.btnOrbit.setAttribute('aria-pressed', String(!isPressed));
            triggerButtonFlash(dom.btnOrbit);
        }
    });
}
