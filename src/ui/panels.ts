import { PanelManager } from './panel-manager';
import { PanelController } from './panel-types';

// A map to hold all our panel controllers
export const panelControllers = new Map<string, PanelController>();

/**
 * Initializes all panels, sets up their controllers, and establishes global keyboard shortcuts.
 * @deprecated This function appears to be unused and may be dead code.
 */
export function initPanels() {
    // Define the configuration for each panel
    const panelConfigs = [
        { id: 'infoPanel', name: 'Info' },
        { id: 'mainPanel', name: 'Controls' },
        { id: 'presetsPanel', name: 'Presets' },
        { id: 'shortcutsPanel', name: 'Shortcuts' },
        { id: 'celestialSelector', name: 'Celestial Selector'}
    ];

    // Instantiate a PanelController for each panel
    panelConfigs.forEach(config => {
        const panelEl = document.getElementById(config.id);
        if (panelEl) {
            const controller = PanelManager.createPanel(config.id, config.name, panelEl);
            panelControllers.set(config.id, controller);

            // Add pin button functionality if it exists
            const pinBtn = panelEl.querySelector('.pin-btn');
            if (pinBtn) {
                pinBtn.addEventListener('click', () => {
                    controller.togglePin();
                    pinBtn.setAttribute('aria-pressed', String(controller.isPinned()));
                });
                // Set initial state
                pinBtn.setAttribute('aria-pressed', String(controller.isPinned()));
            }

        } else {
            console.warn(`Panel elements for '${config.name}' not found. Skipping initialization.`);
        }
    });

    // Setup global keyboard shortcuts for panels
    setupPanelShortcuts();
}

/**
 * Sets up keyboard event listeners for panel-related actions.
 */
function setupPanelShortcuts() {
    window.addEventListener('keydown', (event) => {
        // Ignore shortcuts if user is typing in an input field
        const target = event.target as HTMLElement;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
            return;
        }

        // Handle Ctrl + [1-4] for toggling panels
        if (event.ctrlKey && event.code.startsWith('Digit')) {
            const digit = parseInt(event.code.replace('Digit', ''), 10);
            const panelIds = ['infoPanel', 'mainPanel', 'presetsPanel', 'shortcutsPanel'];
            if (digit >= 1 && digit <= panelIds.length) {
                event.preventDefault();
                const controller = panelControllers.get(panelIds[digit - 1]);
                controller?.toggleVisibility();
            }
        }

        // Handle 'Esc' to close the most recently focused panel
        if (event.code === 'Escape') {
            const mostRecentController = PanelManager.getMostRecentlyFocusedController();
            if (mostRecentController && !mostRecentController.isPinned()) {
                event.preventDefault();
                event.stopPropagation(); // Prevent other 'Esc' listeners from firing
                mostRecentController.hide();
            }
        }
    });
}
