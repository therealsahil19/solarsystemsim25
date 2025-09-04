import { store } from '../state/store';
import { quickAccessToolbar } from './dom';

const QUICK_ACCESS_BODIES = ['Sun', 'Earth', 'Mars', 'Jupiter'];
const FADE_TIMEOUT = 4000; // 4 seconds

let fadeTimeoutId: number;

function handleBodyClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const bodyName = target.dataset.body;
    if (bodyName) {
        store.getState().setSelectedBodyId(bodyName);
    }
}

function handleOverflowClick() {
    const openSelectorBtn = document.getElementById('open-celestial-selector-btn');
    if (openSelectorBtn) {
        openSelectorBtn.click();
    }
}

function resetFadeTimeout() {
    if (!quickAccessToolbar) return;
    clearTimeout(fadeTimeoutId);
    quickAccessToolbar.classList.remove('hidden');
    fadeTimeoutId = window.setTimeout(() => {
        quickAccessToolbar.classList.add('hidden');
    }, FADE_TIMEOUT);
}

export function setupQuickAccessToolbar() {
    if (!quickAccessToolbar) return;

    // Populate buttons
    quickAccessToolbar.innerHTML = '';
    QUICK_ACCESS_BODIES.forEach(name => {
        const button = document.createElement('button');
        button.className = 'quick-access-btn';
        button.dataset.body = name;
        button.textContent = name;
        button.addEventListener('click', handleBodyClick);
        quickAccessToolbar.appendChild(button);
    });

    const overflowButton = document.createElement('button');
    overflowButton.id = 'quick-access-overflow';
    overflowButton.className = 'quick-access-btn';
    overflowButton.textContent = '⋯';
    overflowButton.addEventListener('click', handleOverflowClick);
    quickAccessToolbar.appendChild(overflowButton);


    // Fade logic
    document.body.addEventListener('mousemove', resetFadeTimeout, { passive: true });
    document.body.addEventListener('touchstart', resetFadeTimeout, { passive: true });
    quickAccessToolbar.addEventListener('mouseenter', () => clearTimeout(fadeTimeoutId));
    quickAccessToolbar.addEventListener('mouseleave', resetFadeTimeout);

    // Initial setup
    resetFadeTimeout();
}
