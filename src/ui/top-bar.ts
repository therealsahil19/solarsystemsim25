import { store, ScalePreset } from '../state/store';

// --- DOM Element References ---
let moreMenuBtn: HTMLButtonElement;
let moreMenuContent: HTMLDivElement;
let topBar: HTMLElement;
let appContainer: HTMLElement;
let scaleControlGroup: HTMLDivElement;
let scalePresetSelect: HTMLSelectElement;
let scaleBadge: HTMLSpanElement;

feat/responsive-design-overhaul
// Store elements to be moved and their original parents
const movableElements = new Map<HTMLElement, HTMLElement>();
=======
// --- Original Parent Elements for Responsive Moves ---
let visualsBtnParent: HTMLElement;
let settingsBtnParent: HTMLElement;
let githubLinkParent: HTMLElement;
let timeSliderGroupParent: HTMLElement;
let timePresetGroupParent: HTMLElement;
let scaleControlGroupParent: HTMLElement;
main

function cacheDOMElements() {
    moreMenuBtn = document.getElementById('more-menu-toggle') as HTMLButtonElement;
    moreMenuContent = document.getElementById('more-menu-content') as HTMLDivElement;
    topBar = document.getElementById('top-bar') as HTMLElement;
    appContainer = document.getElementById('app') as HTMLElement;
    scaleControlGroup = document.getElementById('scale-control-group') as HTMLDivElement;
    scalePresetSelect = document.getElementById('scale-preset-select') as HTMLSelectElement;
    scaleBadge = document.getElementById('scale-badge') as HTMLSpanElement;

feat/responsive-design-overhaul
    // Find all elements that should be hidden on mobile and moved to the menu
    const elementsToMove = document.querySelectorAll('.mobile-hide');
    elementsToMove.forEach(el => {
        movableElements.set(el as HTMLElement, el.parentNode as HTMLElement);
    });
=======
    // Store original parents
    visualsBtnParent = visualsBtn.parentNode as HTMLElement;
    settingsBtnParent = settingsBtn.parentNode as HTMLElement;
    githubLinkParent = githubLink.parentNode as HTMLElement;
    timeSliderGroupParent = timeSliderGroup.parentNode as HTMLElement;
    timePresetGroupParent = timePresetGroup.parentNode as HTMLElement;
    scaleControlGroupParent = scaleControlGroup.parentNode as HTMLElement;
main
}

function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
feat/responsive-design-overhaul
        // Move elements to the slide-out menu
        movableElements.forEach((_originalParent, el) => {
            if (!moreMenuContent.contains(el)) {
                moreMenuContent.appendChild(el);
            }
        });
    } else {
        // Move elements back to their original parents
        movableElements.forEach((originalParent, el) => {
            if (!originalParent.contains(el)) {
                originalParent.appendChild(el);
            }
        });
        // Ensure the menu is closed when resizing to desktop
        topBar.classList.remove('is-menu-open');
=======
        // Move to More Menu if they aren't already there
        if (!moreMenuContent.contains(timeSliderGroup)) moreMenuContent.appendChild(timeSliderGroup);
        if (!moreMenuContent.contains(timePresetGroup)) moreMenuContent.appendChild(timePresetGroup);
        if (!moreMenuContent.contains(visualsBtn)) moreMenuContent.appendChild(visualsBtn);
        if (!moreMenuContent.contains(settingsBtn)) moreMenuContent.appendChild(settingsBtn);
        if (!moreMenuContent.contains(githubLink)) moreMenuContent.appendChild(githubLink);
        if (!moreMenuContent.contains(scaleControlGroup)) moreMenuContent.appendChild(scaleControlGroup);
        moreMenuBtn.classList.remove('hidden');
    } else {
        // Move back to original positions
        timeSliderGroupParent.appendChild(timeSliderGroup);
        timePresetGroupParent.appendChild(timePresetGroup);

        const moreMenuContainer = document.getElementById('more-menu-container')!;
        visualsBtnParent.insertBefore(visualsBtn, moreMenuContainer);
        settingsBtnParent.insertBefore(settingsBtn, moreMenuContainer);
        // Insert scale control before github link
        scaleControlGroupParent.insertBefore(scaleControlGroup, githubLink);
        githubLinkParent.insertBefore(githubLink, moreMenuContainer);


        moreMenuBtn.classList.add('hidden');
        moreMenuContent.classList.add('hidden'); // Ensure menu is closed when resizing to desktop
main
    }
    updateAppPadding();
}

function updateAppPadding() {
    const topBarHeight = topBar.offsetHeight;
    appContainer.style.paddingTop = `${topBarHeight}px`;
}

function setupEventListeners() {
    moreMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isMenuOpen = topBar.classList.toggle('is-menu-open');
        moreMenuContent.classList.toggle('hidden', !isMenuOpen);
    });

feat/responsive-design-overhaul
=======
    scalePresetSelect.addEventListener('change', (e) => {
        const preset = (e.target as HTMLSelectElement).value as ScalePreset;
        store.getState().setScalePreset(preset);
    });

    store.subscribe((state) => {
        const preset = state.scalePreset;
        if (scalePresetSelect.value !== preset) {
            scalePresetSelect.value = preset;
        }

        // Update badge text based on preset
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

    // Improved click-outside-to-close logic
main
    document.addEventListener('click', (e) => {
        const target = e.target as Node;
        if (topBar.classList.contains('is-menu-open') && !moreMenuContent.contains(target) && !moreMenuBtn.contains(target)) {
            topBar.classList.remove('is-menu-open');
            moreMenuContent.classList.add('hidden');
        }
    });

    window.addEventListener('resize', handleResponsiveLayout);
}

export function initTopBar() {
    cacheDOMElements();
    setupEventListeners();
    handleResponsiveLayout(); // Initial check
}
