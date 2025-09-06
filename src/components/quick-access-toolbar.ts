import store from '../state/store';
import { quickAccessToolbar } from './dom';

/** The list of celestial bodies to feature in the quick access toolbar. @private */
const QUICK_ACCESS_BODIES = ['Sun', 'Earth', 'Mars', 'Jupiter'];
/** The time in milliseconds before the toolbar fades out. @private */
const FADE_TIMEOUT = 4000; // 4 seconds

/** The timeout ID for the fade-out timer. @private */
let fadeTimeoutId: number;

/**
 * Handles clicks on the body buttons in the toolbar.
 * @param event The mouse event.
 * @private
 */
function handleBodyClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLElement;
    const bodyName = target.dataset.body;
    if (bodyName) {
        store.getState().setSelectedBodyId(bodyName);
    }
}

/**
 * Handles clicks on the overflow ('...') button, which opens the main celestial selector.
 * @private
 */
function handleOverflowClick() {
    const openSelectorBtn = document.getElementById('open-celestial-selector-btn');
    if (openSelectorBtn) {
        openSelectorBtn.click();
    }
}

/**
 * Resets the fade-out timer, making the toolbar visible and setting a new timer to hide it.
 * @private
 */
function resetFadeTimeout() {
    if (!quickAccessToolbar) return;
    clearTimeout(fadeTimeoutId);
    quickAccessToolbar.classList.remove('hidden');
    fadeTimeoutId = window.setTimeout(() => {
        quickAccessToolbar.classList.add('hidden');
    }, FADE_TIMEOUT);
}

/**
 * Sets up the quick access toolbar.
 * This function populates the toolbar with buttons for major celestial bodies
 * and sets up the auto-fade behavior.
 */
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

    // Add the overflow button
    const overflowButton = document.createElement('button');
    overflowButton.id = 'quick-access-overflow';
    overflowButton.className = 'quick-access-btn';
    overflowButton.textContent = '⋯';
    overflowButton.addEventListener('click', handleOverflowClick);
    quickAccessToolbar.appendChild(overflowButton);


    // Set up event listeners for the fade logic
    document.body.addEventListener('mousemove', resetFadeTimeout, { passive: true });
    document.body.addEventListener('touchstart', resetFadeTimeout, { passive: true });
    quickAccessToolbar.addEventListener('mouseenter', () => clearTimeout(fadeTimeoutId));
    quickAccessToolbar.addEventListener('mouseleave', resetFadeTimeout);

    // Initial setup to show the toolbar
    resetFadeTimeout();
}
