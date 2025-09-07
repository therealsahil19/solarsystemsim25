import * as THREE from 'three';
import * as TWEEN from '@tweenjs/tween.js';
import * as dom from './components/dom';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { showHud } from './components/contextual-hud';
import { warnOnce } from './utils/three-helpers';

/**
 * A type definition for the simulation state object passed to interaction handlers.
 * This holds mutable state related to user interaction and camera targets.
 */
export type Simulation = {
    /** The currently selected `THREE.Object3D`. */
    selectedObject: THREE.Object3D | null;
    /** The object the camera is currently moving towards or focused on. */
    focusTarget: THREE.Object3D | null;
    /** The object the camera is actively following. */
    followTarget: THREE.Object3D | null;
    /** The offset vector from the followed target to the camera. */
    followOffset: THREE.Vector3;
    /** The smoothing factor for the camera following movement. */
    followSmoothing: number;
    /** A flag indicating if the user is currently interacting with the camera controls. */
    isUserInteracting: boolean;
    /** A flag indicating if the camera is currently in a tween animation. */
    isTweening: boolean;
    /** A reference to the uniforms of the asteroid belt material for animation. */
    asteroidMaterialUniforms: { u_time: { value: number } } | null;
};

/**
 * Sets up all user interaction handlers for the 3D scene.
 * This includes mouse hovering, clicking on celestial bodies, and handling
 * button clicks on various UI elements related to scene interaction.
 *
 * @param camera The main `THREE.PerspectiveCamera`.
 * @param selectableObjects An array of `THREE.Object3D` that can be selected by the user.
 * @param sun A reference to the Sun's `THREE.Object3D`.
 * @param simulation The mutable simulation state object.
 * @param onBodySelected A callback function to execute when a celestial body is selected.
 * @param controls The `OrbitControls` instance.
 * @param resetSimulation A function to reset the simulation to its initial state.
 * @param orbits An array of all orbit line objects.
 */
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

    /**
     * Walk up the object hierarchy to find an ancestor that holds userData.data.
     * Returns that ancestor and its data if found.
     */
    function findDataCarrier(obj: THREE.Object3D | null | undefined): { node: THREE.Object3D, data: any } | null {
        let cur: THREE.Object3D | null | undefined = obj || null;
        while (cur) {
            const data = (cur as any).userData?.data;
            if (data) return { node: cur, data };
            cur = cur.parent as any;
        }
        return null;
    }

    // --- Hover Tooltip Logic ---
    window.addEventListener('pointermove', (event: MouseEvent) => {
        clearTimeout(hoverTimeout);
        hoverTimeout = window.setTimeout(() => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(selectableObjects);

            if (intersects.length > 0) {
                const hovered = intersects[0].object;
                const carrier = findDataCarrier(hovered);
                const name = carrier?.data?.name;
                const radius = carrier?.data?.radius;

                if (name && typeof radius === 'number') {
                    tooltipElement.innerHTML = `<strong>${name}</strong><br>Radius: ${radius.toLocaleString()} km`;
                    tooltipElement.style.left = `${event.clientX + 15}px`;
                    tooltipElement.style.top = `${event.clientY + 15}px`;
                    tooltipElement.classList.remove('hidden');
                } else {
                    warnOnce(hovered.uuid, 'Object missing valid userData.data:', hovered);
                    tooltipElement.classList.add('hidden');
                }
            } else {
                tooltipElement.classList.add('hidden');
            }
        }, 100);
    });

    // --- Click Handling ---
    window.addEventListener('click', (event: MouseEvent) => {
        tooltipElement.classList.add('hidden');
        // Ignore clicks that land on UI elements
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
            // Clicked on a celestial body
            const clicked = intersects[0].object;
            const carrier = findDataCarrier(clicked);
            const bodyName = carrier?.data?.name;
            if (bodyName) {
                onBodySelected(bodyName);
                showHud(clicked, camera);
            }
        } else {
            // Clicked on empty space, pan the camera target
            const groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
            const intersection = new THREE.Vector3();
            raycaster.ray.intersectPlane(groundPlane, intersection);

            new TWEEN.Tween(controls.target)
                .to({ x: intersection.x, y: intersection.y, z: intersection.z }, 500)
                .easing(TWEEN.Easing.Cubic.Out)
                .start();
        }
    });

    // --- UI Button Event Listeners ---
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

    dom.smallInfoCard.addEventListener('click', (e: MouseEvent) => {
        if ((e.target as HTMLElement).tagName !== 'BUTTON') {
            dom.infoPanel.classList.remove('hidden');
        }
    });

    /** Adds a brief flash animation to a button to provide visual feedback. @private */
    function triggerButtonFlash(btn: HTMLElement) {
        btn.classList.add('flash');
        btn.addEventListener('animationend', () => {
            btn.classList.remove('flash');
        }, { once: true });
    }

    dom.btnFrame.addEventListener('click', () => {
        const carrier = findDataCarrier(simulation.selectedObject as any);
        const bodyName = carrier?.data?.name;
        if (bodyName) {
            onBodySelected(bodyName);
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
        const carrier = findDataCarrier(simulation.selectedObject as any);
        const bodyName = carrier?.data?.name;
        if (!bodyName) return;

        const orbit = orbits.find(o => o.userData.name === bodyName);
        if (orbit) {
            orbit.visible = !orbit.visible;
            const isPressed = dom.btnOrbit.getAttribute('aria-pressed') === 'true';
            dom.btnOrbit.setAttribute('aria-pressed', String(!isPressed));
            triggerButtonFlash(dom.btnOrbit);
        }
    });
}
