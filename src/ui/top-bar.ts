import store, { AppState, ScalePreset } from '../state/store';

// --- Module-level variables for DOM Element References ---
/** @private */
let moreMenuBtn: HTMLButtonElement;
/** @private */
let moreMenuContent: HTMLDivElement;
/** @private */
let topBar: HTMLElement;
/** @private */
let appContainer: HTMLElement;
/** @private */
let scaleControlGroup: HTMLDivElement;
/** @private */
let scalePresetSelect: HTMLSelectElement;
/** @private */
let scaleBadge: HTMLSpanElement;
/** @private */
let timeSliderGroup: HTMLElement;
/** @private */
let timePresetGroup: HTMLElement;
/** @private */
let visualsBtn: HTMLElement;
/** @private */
let settingsBtn: HTMLElement;
/** @private */
let githubLink: HTMLElement;

// --- Original Parent Elements for Responsive Moves ---
/** @private */
let visualsBtnParent: HTMLElement;
/** @private */
let settingsBtnParent: HTMLElement;
/** @private */
let githubLinkParent: HTMLElement;
/** @private */
let timeSliderGroupParent: HTMLElement;
/** @private */
let timePresetGroupParent: HTMLElement;
/** @private */
let scaleControlGroupParent: HTMLElement;

/**
 * Caches references to all necessary DOM elements for the top bar and its responsive behavior.
 * @private
 */
function cacheDOMElements() {
    moreMenuBtn = document.getElementById('more-menu-toggle') as HTMLButtonElement;
    moreMenuContent = document.getElementById('more-menu-content') as HTMLDivElement;
    topBar = document.getElementById('top-bar') as HTMLElement;
    appContainer = document.getElementById('app') as HTMLElement;
    scaleControlGroup = document.getElementById('scale-control-group') as HTMLDivElement;
    scalePresetSelect = document.getElementById('scale-preset-select') as HTMLSelectElement;
    scaleBadge = document.getElementById('scale-badge') as HTMLSpanElement;
    timeSliderGroup = document.getElementById('time-control-group') as HTMLElement;
    timePresetGroup = document.getElementById('time-preset-group') as HTMLElement;
    visualsBtn = document.getElementById('visuals-btn') as HTMLElement;
    settingsBtn = document.getElementById('settings-btn') as HTMLElement;
    githubLink = document.getElementById('github-link') as HTMLElement;

    // Store original parents to move elements back on larger screens
    visualsBtnParent = visualsBtn.parentNode as HTMLElement;
    settingsBtnParent = settingsBtn.parentNode as HTMLElement;
    githubLinkParent = githubLink.parentNode as HTMLElement;
    timeSliderGroupParent = timeSliderGroup.parentNode as HTMLElement;
    timePresetGroupParent = timePresetGroup.parentNode as HTMLElement;
    scaleControlGroupParent = scaleControlGroup.parentNode as HTMLElement;
}

/**
 * Handles the responsive layout of the top bar. On smaller screens, it moves
 * less critical controls into a "More" dropdown menu. On larger screens, it
 * moves them back to their original positions.
 * @private
 */
function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
        // Move controls to the "More" menu if they aren't already there
        if (!moreMenuContent.contains(timeSliderGroup)) moreMenuContent.appendChild(timeSliderGroup);
        if (!moreMenuContent.contains(timePresetGroup)) moreMenuContent.appendChild(timePresetGroup);
        if (!moreMenuContent.contains(visualsBtn)) moreMenuContent.appendChild(visualsBtn);
        if (!moreMenuContent.contains(settingsBtn)) moreMenuContent.appendChild(settingsBtn);
        if (!moreMenuContent.contains(githubLink)) moreMenuContent.appendChild(githubLink);
        if (!moreMenuContent.contains(scaleControlGroup)) moreMenuContent.appendChild(scaleControlGroup);
        moreMenuBtn.classList.remove('hidden');
    } else {
        // Move controls back to their original positions in the top bar
        timeSliderGroupParent.appendChild(timeSliderGroup);
        timePresetGroupParent.appendChild(timePresetGroup);

        const moreMenuContainer = document.getElementById('more-menu-container')!;
        visualsBtnParent.insertBefore(visualsBtn, moreMenuContainer);
        settingsBtnParent.insertBefore(settingsBtn, moreMenuContainer);
        scaleControlGroupParent.insertBefore(scaleControlGroup, githubLink);
        githubLinkParent.insertBefore(githubLink, moreMenuContainer);


        moreMenuBtn.classList.add('hidden');
        moreMenuContent.classList.add('hidden'); // Ensure menu is closed when resizing to desktop
    }
    updateAppPadding();
}

/**
 * Adjusts the top padding of the main app container to prevent its content
 * from being obscured by the top bar.
 * @private
 */
function updateAppPadding() {
    const topBarHeight = topBar.offsetHeight;
    appContainer.style.paddingTop = `${topBarHeight}px`;
}

/**
 * Sets up all necessary event listeners for the top bar controls.
 * @private
 */
function setupEventListeners() {
    moreMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMenuOpen = !moreMenuContent.classList.contains('hidden');
        moreMenuContent.classList.toggle('hidden', isMenuOpen);
    });

    scalePresetSelect.addEventListener('change', (e) => {
        const preset = (e.target as HTMLSelectElement).value as ScalePreset;
        store.getState().setScalePreset(preset);
    });

    // Subscribe to the global store to keep the UI in sync with the state
    store.subscribe((state: AppState) => {
        const preset = state.scalePreset;
        if (scalePresetSelect.value !== preset) {
            scalePresetSelect.value = preset;
        }

        // Update the scale badge text based on the current preset
        switch (preset) {
            case 'realistic':
                scaleBadge.textContent = '1:1 Scale';
                break;
            case 'educational':
                scaleBadge.textContent = 'Large Planets';
                break;
            case 'hybrid':
                scaleBadge.textContent = 'Log Distance';
                break;
        }
    });

    // Add a global click listener to close the "More" menu when clicking outside of it.
    document.addEventListener('click', (e) => {
        const target = e.target as Node;
        if (!moreMenuContent.classList.contains('hidden') && !moreMenuContent.contains(target) && !moreMenuBtn.contains(target)) {
            moreMenuContent.classList.add('hidden');
        }
    });

    window.addEventListener('resize', handleResponsiveLayout);
}

/**
 * Initializes the top bar component by caching DOM elements, setting up
 * event listeners, and running an initial responsive layout check.
 */
export function initTopBar() {
    cacheDOMElements();
    setupEventListeners();
    handleResponsiveLayout(); // Initial check
}
