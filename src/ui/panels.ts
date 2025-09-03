import { PanelManager } from './panel-manager';

// A map to hold all our panel managers
export const panelManagers = new Map<string, PanelManager>();

/**
 * Initializes all panels, sets up their managers, and establishes global keyboard shortcuts.
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

    // Instantiate a PanelManager for each panel
    panelConfigs.forEach(config => {
        const panelEl = document.getElementById(config.id);
        const headerEl = document.getElementById(`${config.id}Header`);
        const closeEl = document.getElementById(`${config.id}-close`);

        if (panelEl && headerEl) {
            const manager = new PanelManager(config.id, panelEl, headerEl, closeEl || undefined);
            panelManagers.set(config.id, manager);

            // Add pin button functionality if it exists
            const pinBtn = document.getElementById(`${config.id}-pin`);
            if (pinBtn) {
                pinBtn.addEventListener('click', () => {
                    manager.togglePin();
                    pinBtn.setAttribute('aria-pressed', String(manager.state.pinned));
                });
                // Set initial state
                pinBtn.setAttribute('aria-pressed', String(manager.state.pinned));
            }

            // Add minimize button functionality if it exists
            const minimizeBtn = document.getElementById(`${config.id}-minimize`);
            if (minimizeBtn) {
                minimizeBtn.addEventListener('click', () => {
                    manager.toggleMinimize();
                });
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
                const manager = panelManagers.get(panelIds[digit - 1]);
                manager?.toggleVisibility();
            }
        }

        // Handle 'Esc' to close the most recently focused panel
        if (event.code === 'Escape') {
            const mostRecentPanel = PanelManager.getMostRecentlyFocusedPanel();
            if (mostRecentPanel && !mostRecentPanel.state.pinned) {
                event.preventDefault();
                event.stopPropagation(); // Prevent other 'Esc' listeners from firing
                mostRecentPanel.hide();
            }
        }
    });
}
