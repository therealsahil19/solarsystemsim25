import * as dom from './dom';

export function initInfoPanel(): void {
    // This function is now a placeholder.
    // The panel is initialized in panels.ts
    // We might use this later to set up specific event listeners for this panel.
}

export function updateInfoPanelColor(color: string): void {
    const header = document.getElementById('infoPanelHeader');
    if (header) {
        header.style.borderBottomColor = color;
    }
}
