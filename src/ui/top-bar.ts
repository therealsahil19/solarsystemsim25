// --- DOM Element References ---
let moreMenuBtn: HTMLButtonElement;
let moreMenuContent: HTMLDivElement;
let topBar: HTMLElement;
let appContainer: HTMLElement;

// Store elements to be moved and their original parents
const movableElements = new Map<HTMLElement, HTMLElement>();

function cacheDOMElements() {
    moreMenuBtn = document.getElementById('more-menu-toggle') as HTMLButtonElement;
    moreMenuContent = document.getElementById('more-menu-content') as HTMLDivElement;
    topBar = document.getElementById('top-bar') as HTMLElement;
    appContainer = document.getElementById('app') as HTMLElement;

    // Find all elements that should be hidden on mobile and moved to the menu
    const elementsToMove = document.querySelectorAll('.mobile-hide');
    elementsToMove.forEach(el => {
        movableElements.set(el as HTMLElement, el.parentNode as HTMLElement);
    });
}

function handleResponsiveLayout() {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
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
