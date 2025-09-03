import * as THREE from 'three';
import { infoPanel } from './dom';

let hudElement: HTMLElement;
let hideTimeoutId: number | null = null;
const HIDE_DELAY = 6000; // 6 seconds

function handleFrameClick() {
    document.getElementById('btn-frame')?.click();
    hideHud();
}

function handleFollowClick() {
    document.getElementById('btn-follow')?.click();
    hideHud();
}

function handleOrbitClick() {
    document.getElementById('btn-orbit')?.click();
    hideHud();
}

function handleInfoClick() {
    if (infoPanel.classList.contains('hidden')) {
        infoPanel.classList.remove('hidden');
    }
    // This could be enhanced to use a panel manager to bring it to the front
    hideHud();
}

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

    // Hide HUD if another click happens anywhere
    window.addEventListener('click', () => {
        // This will be called after the button's own click handler, so it's safe
        hideHud();
    }, { capture: true }); // Use capture to ensure this runs before other click listeners that might stop propagation

    // Stop timer when mouse is over the HUD
    hudElement.addEventListener('mouseenter', () => {
        if (hideTimeoutId) {
            clearTimeout(hideTimeoutId);
            hideTimeoutId = null;
        }
    });

    // Restart timer when mouse leaves
    hudElement.addEventListener('mouseleave', () => {
        resetHideTimeout();
    });
}

export function showHud(object3d: THREE.Object3D, camera: THREE.Camera) {
    if (!hudElement) return;

    // Condition: show only if info panel is closed
    if (!infoPanel.classList.contains('hidden')) {
        hideHud(); // Ensure it's hidden if panel is open
        return;
    }

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

export function hideHud() {
    if (hudElement && !hudElement.classList.contains('hidden')) {
        hudElement.classList.add('hidden');
    }
    if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
        hideTimeoutId = null;
    }
}

function resetHideTimeout() {
    if (hideTimeoutId) {
        clearTimeout(hideTimeoutId);
    }
    hideTimeoutId = window.setTimeout(hideHud, HIDE_DELAY);
}
