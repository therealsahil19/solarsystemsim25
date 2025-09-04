/**
 * Initializes the main information panel.
 * @deprecated This function is currently a placeholder. The panel is now managed by
 * the `PanelManager` and its initialization logic is handled elsewhere. This function
 * may be used in the future to set up specific event listeners for this panel.
 */
export function initInfoPanel(): void {
    // This function is now a placeholder.
    // The panel is initialized via PanelManager.createPanel in its own component file.
    // We might use this later to set up specific event listeners for this panel.
}

/**
 * Updates the bottom border color of the info panel's header to match the
 * color of the currently selected celestial body.
 * @param color A CSS color string (e.g., '#ffcc00').
 */
export function updateInfoPanelColor(color: string): void {
    const header = document.getElementById('infoPanelHeader');
    if (header) {
        header.style.borderBottomColor = color;
    }
}
