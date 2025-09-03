import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css'; // Import default theme

const TOUR_STORAGE_KEY = 'solarsim.tour.v1.completed';
let tour: any;

function isTourCompleted(): boolean {
    try {
        return localStorage.getItem(TOUR_STORAGE_KEY) === 'true';
    } catch (e) {
        console.error("Could not access localStorage for tour status:", e);
        return true; // Assume completed if localStorage is unavailable
    }
}

function markTourAsCompleted() {
    try {
        localStorage.setItem(TOUR_STORAGE_KEY, 'true');
    } catch (e) {
        console.error("Could not save tour status to localStorage:", e);
    }
}

function setupTourSteps() {
    tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shepherd-theme-arrows',
            scrollTo: { behavior: 'smooth', block: 'center' }
        }
    });

    tour.addStep({
        id: 'step-1-quick-access',
        text: 'This is the new Quick Access Toolbar. Click on a planet to instantly focus on it.',
        attachTo: { element: '#quick-access-toolbar', on: 'bottom' },
        buttons: [{ text: 'Next', action: tour.next }]
    });

    tour.addStep({
        id: 'step-2-detailed-selector',
        text: 'For more options, click here to open the detailed selector panel.',
        attachTo: { element: '#open-celestial-selector-btn', on: 'right' },
        buttons: [
            { text: 'Back', action: tour.back },
            { text: 'Next', action: () => {
                // Programmatically open the panel for the next step
                document.getElementById('open-celestial-selector-btn')?.click();
                tour.next();
            }}
        ]
    });

    tour.addStep({
        id: 'step-3-favorites',
        text: 'You can search, filter by type, and now filter by your favorite bodies! Click the star to favorite an item.',
        attachTo: { element: '#celestial-selector-panel', on: 'left' },
        buttons: [
            { text: 'Back', action: () => {
                document.getElementById('close-celestial-selector-btn')?.click();
                tour.back();
            }},
            { text: 'Next', action: () => {
                document.getElementById('close-celestial-selector-btn')?.click();
                tour.next();
            }}
        ]
    });

    tour.addStep({
        id: 'step-4-contextual-hud',
        text: 'When you click a body in the 3D view, a small control hub will appear, giving you quick access to common actions.',
        attachTo: { element: '#bg', on: 'top' }, // Attach to the canvas background
        buttons: [
            { text: 'Back', action: tour.back },
            { text: 'Next', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'step-5-time-controls',
        text: 'Control the flow of time here. Play, pause, and adjust the simulation speed.',
        attachTo: { element: '#time-controls', on: 'bottom' },
        buttons: [
            { text: 'Back', action: tour.back },
            { text: 'Next', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'step-6-visuals-panel',
        text: 'Open the Visuals panel to adjust settings like trail length and the visual scale of planets.',
        attachTo: { element: '#visuals-toggle-btn', on: 'bottom' },
        buttons: [
            { text: 'Back', action: tour.back },
            { text: 'Next', action: tour.next }
        ]
    });

    tour.addStep({
        id: 'step-7-help',
        text: 'Click here anytime to see keyboard shortcuts or to restart this tour.',
        attachTo: { element: '#help-button', on: 'top' },
        buttons: [
            { text: 'Back', action: tour.back },
            { text: 'Finish', action: tour.complete }
        ]
    });

    tour.on('complete', markTourAsCompleted);
    tour.on('cancel', markTourAsCompleted);
}

export function initOnboardingTour() {
    setupTourSteps();

    // Start tour automatically if it's the user's first visit
    if (!isTourCompleted()) {
        // A small delay to ensure the UI is fully rendered
        setTimeout(() => tour.start(), 1000);
    }

    // Add a button to the help panel to restart the tour
    const helpPanel = document.getElementById('help-overlay');
    if (helpPanel) {
        const relaunchButton = document.createElement('button');
        relaunchButton.textContent = 'Relaunch Tour';
        relaunchButton.className = 'btn';
        relaunchButton.style.marginTop = '15px';
        relaunchButton.addEventListener('click', () => {
            // We need to close the help panel before starting the tour
            const closeHelpBtn = document.getElementById('help-overlay-close');
            closeHelpBtn?.click();
            tour.start();
        });

        const closeButton = helpPanel.querySelector('#help-overlay-close');
        closeButton?.parentNode?.insertBefore(relaunchButton, closeButton);
    }
}
