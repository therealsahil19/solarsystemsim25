import * as THREE from 'three';
import { infoPanel } from './dom';

/** The contextual HUD element. @private */
let hudElement: HTMLElement;
/** The timeout ID for the auto-hide timer. @private */
let hideTimeoutId: number | null = null;
/** The delay in milliseconds before the HUD auto-hides. @private */
const HIDE_DELAY = 6000; // 6 seconds

/**
 * Click handler for the 'Frame' button. Clicks the main frame button and hides the HUD.
 * @private
 */
function handleFrameClick() {
    document.getElementById('btn-frame')?.click();
    hideHud();
}

/**
 * Click handler for the 'Follow' button. Clicks the main follow button and hides the HUD.
 * @private
 */
function handleFollowClick() {
    document.getElementById('btn-follow')?.click();
    hideHud();
}

/**
 * Click handler for the 'Orbit' button. Clicks the main orbit button and hides the HUD.
 * @private
 */
function handleOrbitClick() {
    document.getElementById('btn-orbit')?.click();
    hideHud();
}

/**
 * Click handler for the 'Info' button. Shows the main info panel and hides the HUD.
 * @private
 */
function handleInfoClick() {
    if (infoPanel.classList.contains('hidden')) {
        infoPanel.classList.remove('hidden');
    }
    // This could be enhanced to use a panel manager to bring it to the front.
    hideHud();
}

/**
 * Initializes the contextual HUD, finds its DOM elements, and attaches event listeners.
 */
export function initContextualHud() {
    hudElement = document.getElementById('contextual-hud')!;
    if (!hudElement) return;

    const frameBtn = document.getElementById('hud-frame-btn')!;
    const followBtn = document.getElementById('hud-follow-btn')!;
    const orbitBtn = document.getElementById('hud-orbit-btn')!;
    const infoBtn = document.getElementById('hud-info-btn')!;

    frameBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleFrameClick();
    });
    followBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleFollowClick();
    });
    orbitBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleOrbitClick();
    });
    infoBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        handleInfoClick();
    });

    // Hide HUD if a click happens anywhere else in the window.
    window.addEventListener('click', () => {
        // This will be called after a button's own click handler, so it's safe.
        hideHud();
    }, { capture: true }); // Use capture to ensure this runs before other click listeners can stop propagation.

    // Stop the auto-hide timer when the mouse is over the HUD.
    hudElement.addEventListener('mouseenter', () => {
        if (hideTimeoutId) {
            clearTimeout(hideTimeoutId);
            hideTimeoutId = null;
        }
    });

    // Restart the auto-hide timer when the mouse leaves the HUD.
    hudElement.addEventListener('mouseleave', () => {
        resetHideTimeout();
    });
}

/**
 * Shows the contextual HUD next to a specified 3D object.
 * The HUD will only be shown if the main info panel is currently closed.
 * @param object3d The `THREE.Object3D` to position the HUD next to.
 * @param camera The main scene camera, used for projecting the 3D position to 2D screen space.
 */
export function showHud(object3d: THREE.Object3D, camera: THREE.Camera) {
    if (!hudElement) return;

    // Condition: only show the HUD if the main info panel is closed.
    if (!infoPanel.classList.contains('hidden')) {
        hideHud(); // Ensure it's hidden if the panel is open.
        return;
    }

    // Project the 3D world position to 2D screen coordinates.
    const vector = new THREE.Vector3();
    object3d.getWorldPosition(vector);
    vector.project(camera);

    const x = (vector.x * .5 + .5) * window.innerWidth;
    const y = (vector.y * -.5 + .5) * window.innerHeight;

    hudElement.style.left = `${x}px`;
    hudElement.style.top = `${y}px`;
    hudElement.classList.remove('hidden');

    resetHideTimeout();
}

/**
 * Immediately hides the contextual HUD and cancels any pending auto-hide timer.
 */
export function hideHud() {
    if (hudElement && !hudElement.classList.contains('hidden')) {
        hudElement.classList.add('hidden');
    }
    if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
        hideTimeoutId = null;
    }
}

/**
 * Resets the auto-hide timer. If a timer is already running, it's cleared
 * and a new one is started.
 * @private
 */
function resetHideTimeout() {
    if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
    }
    hideTimeoutId = window.setTimeout(hideHud, HIDE_DELAY);
}
