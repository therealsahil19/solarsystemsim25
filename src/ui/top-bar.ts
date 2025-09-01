// --- DOM Element References ---
let visualsBtn: HTMLButtonElement;
let settingsBtn: HTMLButtonElement;
let githubLink: HTMLAnchorElement;
let timeSliderGroup: HTMLDivElement;
let timePresetGroup: HTMLDivElement;
let moreMenuBtn: HTMLButtonElement;
let visualsPanel: HTMLDivElement;
let settingsPanel: HTMLDivElement;
let moreMenuContent: HTMLDivElement;
let topBar: HTMLElement;
let appContainer: HTMLElement;

// --- Original Parent Elements for Responsive Moves ---
let visualsBtnParent: HTMLElement;
let settingsBtnParent: HTMLElement;
let githubLinkParent: HTMLElement;
let timeSliderGroupParent: HTMLElement;
let timePresetGroupParent: HTMLElement;

function cacheDOMElements() {
    visualsBtn = document.getElementById('visuals-toggle-btn') as HTMLButtonElement;
    settingsBtn = document.getElementById('settings-toggle-btn') as HTMLButtonElement;
    githubLink = document.getElementById('github-link') as HTMLAnchorElement;
    timeSliderGroup = document.getElementById('time-slider-group') as HTMLDivElement;
    timePresetGroup = document.getElementById('time-presets-group') as HTMLDivElement;
    moreMenuBtn = document.getElementById('more-menu-toggle') as HTMLButtonElement;
    visualsPanel = document.getElementById('visuals-panel') as HTMLDivElement;
    settingsPanel = document.getElementById('settings-panel') as HTMLDivElement;
    moreMenuContent = document.getElementById('more-menu-content') as HTMLDivElement;
    topBar = document.getElementById('top-bar') as HTMLElement;
    appContainer = document.getElementById('app') as HTMLElement;

    // Store original parents
    visualsBtnParent = visualsBtn.parentNode as HTMLElement;
    settingsBtnParent = settingsBtn.parentNode as HTMLElement;
    githubLinkParent = githubLink.parentNode as HTMLElement;
    timeSliderGroupParent = timeSliderGroup.parentNode as HTMLElement;
    timePresetGroupParent = timePresetGroup.parentNode as HTMLElement;
}

function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 850;

    if (isMobile) {
        // Move to More Menu if they aren't already there
        if (!moreMenuContent.contains(timeSliderGroup)) moreMenuContent.appendChild(timeSliderGroup);
        if (!moreMenuContent.contains(timePresetGroup)) moreMenuContent.appendChild(timePresetGroup);
        if (!moreMenuContent.contains(visualsBtn)) moreMenuContent.appendChild(visualsBtn);
        if (!moreMenuContent.contains(settingsBtn)) moreMenuContent.appendChild(settingsBtn);
        if (!moreMenuContent.contains(githubLink)) moreMenuContent.appendChild(githubLink);
        moreMenuBtn.classList.remove('hidden');
    } else {
        // Move back to original positions
        timeSliderGroupParent.appendChild(timeSliderGroup);
        timePresetGroupParent.appendChild(timePresetGroup);

        // Insert before the 'more menu' container
        const moreMenuContainer = document.getElementById('more-menu-container')!;
        visualsBtnParent.insertBefore(visualsBtn, moreMenuContainer);
        settingsBtnParent.insertBefore(settingsBtn, moreMenuContainer);
        githubLinkParent.insertBefore(githubLink, moreMenuContainer);

        moreMenuBtn.classList.add('hidden');
        moreMenuContent.classList.add('hidden'); // Ensure menu is closed when resizing to desktop
    }
    updateAppPadding();
}

function updateAppPadding() {
    const topBarHeight = topBar.offsetHeight;
    appContainer.style.paddingTop = `${topBarHeight}px`;
}

function closeAllPanels() {
    visualsPanel.classList.add('hidden');
    settingsPanel.classList.add('hidden');
    moreMenuContent.classList.add('hidden');
}

function setupEventListeners() {
    visualsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = visualsPanel.classList.contains('hidden');
        closeAllPanels();
        visualsPanel.classList.toggle('hidden', !isHidden);
    });

    settingsBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isHidden = settingsPanel.classList.contains('hidden');
        closeAllPanels();
        settingsPanel.classList.toggle('hidden', !isHidden);
    });

    moreMenuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        moreMenuContent.classList.toggle('hidden');
    });

    // Improved click-outside-to-close logic
    document.addEventListener('click', (e) => {
        const target = e.target as Node;
        // Close if the click is outside the top bar AND outside any open panel
        if (!topBar.contains(target) && !visualsPanel.classList.contains('hidden') && !visualsPanel.contains(target)) {
           closeAllPanels();
        }
        if (!topBar.contains(target) && !settingsPanel.classList.contains('hidden') && !settingsPanel.contains(target)) {
           closeAllPanels();
        }
    });

    window.addEventListener('resize', () => {
        handleResponsiveLayout();
    });
}

export function initTopBar() {
    cacheDOMElements();
    setupEventListeners();
    handleResponsiveLayout();
}
