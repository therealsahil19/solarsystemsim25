/** The main draggable info panel for the selected body. */
export const infoPanel = document.getElementById('infoPanel') as HTMLDivElement;
/** The heading element displaying the selected body's name in the info panel. */
export const infoName = document.getElementById('info-name') as HTMLHeadingElement;
/** The container for the info panel's control buttons (drag, pin, close). */
export const infoControls = document.getElementById('info-controls') as HTMLDivElement;
/** The main image of the celestial body in the info panel. */
export const infoImage = document.getElementById('info-image') as HTMLImageElement;
/** The "Read More" link in the info panel. */
export const infoLink = document.getElementById('info-link') as HTMLAnchorElement;
/** The short description paragraph in the info panel. */
export const infoShortDesc = document.getElementById('info-short-desc') as HTMLParagraphElement;
/** The container for basic statistics (radius, mass, etc.) in the info panel. */
export const infoBasicStats = document.getElementById('info-basic-stats') as HTMLDivElement;
/** The container for orbital characteristics in the info panel. */
export const infoOrbitalChars = document.getElementById('info-orbital-chars') as HTMLDivElement;
/** The container for the advanced details section in the info panel. */
export const infoAdvancedDetails = document.getElementById('info-advanced-details') as HTMLDivElement;
/** The button to toggle the visibility of the advanced details content. */
export const advancedDetailsToggle = document.getElementById('advanced-details-toggle') as HTMLButtonElement;
/** The content area for advanced details in the info panel. */
export const advancedDetailsContent = document.getElementById('advanced-details-content') as HTMLDivElement;

/** The main play/pause button for the simulation. */
export const playPauseButton = document.getElementById('play-pause-btn') as HTMLButtonElement;
/** The button to reset the simulation to its initial state. */
export const resetButton = document.getElementById('reset-btn') as HTMLButtonElement;
/** The checkbox to toggle shadows on and off. */
export const shadowToggle = document.getElementById('shadow-toggle') as HTMLInputElement;
/** The main canvas element where the Three.js scene is rendered. */
export const canvas = document.querySelector('#bg') as HTMLCanvasElement;

// --- Celestial Body Selector ---
/** The main container for the celestial body selection UI. */
export const selectionPanel = document.getElementById('selection-panel') as HTMLDivElement;
/** The dropdown element for celestial body selection. */
export const celestialSelector = document.getElementById('celestialSelector') as HTMLDivElement;
/** The menu part of the celestial selector that contains the list of bodies. */
export const celestialSelectorMenu = document.getElementById('celestial-selector-menu') as HTMLDivElement;

// --- Top Bar & Help ---
/** The button to detach the camera and enter free-camera mode. */
export const freeCameraButton = document.getElementById('free-camera-btn') as HTMLButtonElement;
/** The button to open the help/shortcuts overlay. */
export const helpButton = document.getElementById('help-button') as HTMLButtonElement;
/** The help overlay element. */
export const helpOverlay = document.getElementById('help-overlay') as HTMLDivElement;
/** The button to close the help overlay. */
export const helpOverlayClose = document.getElementById('help-overlay-close') as HTMLButtonElement;

// --- Time Controls ---
/** The container for all time control elements. */
export const timeControls = document.getElementById('time-controls') as HTMLDivElement;
/** The span element that displays the current time scale value. */
export const timeScaleValue = document.getElementById('time-scale-label') as HTMLSpanElement;
/** The button to step the simulation backward in time. */
export const timeStepBackward = document.getElementById('time-step-backward') as HTMLButtonElement;
/** The slider to control the simulation speed. */
export const timeScaleSlider = document.getElementById('time-scale-slider') as HTMLInputElement;
/** The button to step the simulation forward in time. */
export const timeStepForward = document.getElementById('time-step-forward') as HTMLButtonElement;
/** A NodeList of all buttons that set a preset time scale. */
export const timePresetButtons = document.querySelectorAll('.time-preset') as NodeListOf<HTMLButtonElement>;

// --- Debug HUD ---
/** The Heads-Up Display for debugging information. */
export const debugHUD = document.getElementById('debug-hud') as HTMLDivElement;
/** The span element to display the current scaling preset in the debug HUD. */
export const debugPreset = document.getElementById('debug-preset') as HTMLSpanElement;
/** The span element to display the current device pixel ratio in the debug HUD. */
export const debugDPR = document.getElementById('debug-dpr') as HTMLSpanElement;
/** The span element to display the average frame time in milliseconds in the debug HUD. */
export const debugAvgMs = document.getElementById('debug-avg-ms') as HTMLSpanElement;
/** The span element to display the dynamic resolution scale in the debug HUD. */
export const debugScale = document.getElementById('debug-scale') as HTMLSpanElement;

// --- Quick Access Toolbar ---
/** The container for the quick access toolbar. */
export const quickAccessToolbar = document.getElementById('quick-access-toolbar') as HTMLDivElement;

// --- Contextual HUD (Small Info Card) ---
/** The small info card that appears when an object is hovered. */
export const smallInfoCard = document.getElementById('small-info-card') as HTMLDivElement;
/** The thumbnail image in the small info card. */
export const cardThumb = document.getElementById('card-thumb') as HTMLImageElement;
/** The title element in the small info card. */
export const cardTitle = document.getElementById('card-title') as HTMLDivElement;
/** The stats element (distance, speed) in the small info card. */
export const cardStats = document.getElementById('card-stats') as HTMLDivElement;
/** The button to frame the selected object. */
export const btnFrame = document.getElementById('btn-frame') as HTMLButtonElement;
/** The button to follow the selected object. */
export const btnFollow = document.getElementById('btn-follow') as HTMLButtonElement;
/** The button to toggle the orbit visibility for the selected object. */
export const btnOrbit = document.getElementById('btn-orbit') as HTMLButtonElement;

// --- Main Settings Panel ---
/** The dropdown to select a performance preset. */
export const performancePreset = document.getElementById('performance-preset') as HTMLSelectElement;
/** The main panel containing various simulation controls. */
export const controlsPanel = document.getElementById('mainPanel') as HTMLDivElement;

/**
 * Initializes a custom tooltip system for the application.
 * It listens for mouseover events on the body and displays a custom tooltip
 * for any element with a `data-tooltip` or `title` attribute.
 * This prevents the use of native browser tooltips and allows for custom styling.
 */
export function initTooltips() {
    let tooltip: HTMLDivElement | null = null;

    document.body.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const title = target.getAttribute('data-tooltip') || target.getAttribute('title');

        if (!title) return;

        // Prevent default browser tooltip by moving title to data-tooltip
        if (target.getAttribute('title')) {
            target.setAttribute('data-tooltip', title);
            target.removeAttribute('title');
        }

        tooltip = document.createElement('div');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = title;
        document.body.appendChild(tooltip);

        // Position the tooltip above the target element, with boundary checks
        const targetRect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let top = targetRect.top - tooltipRect.height - 8;
        let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);

        if (top < 0) { // If not enough space above, show below
            top = targetRect.bottom + 8;
        }
        if (left < 0) { // Clamp to left edge
            left = 5;
        }
        if (left + tooltipRect.width > window.innerWidth) { // Clamp to right edge
            left = window.innerWidth - tooltipRect.width - 5;
        }

        tooltip.style.position = 'fixed';
        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
        tooltip.style.visibility = 'visible';
        tooltip.style.opacity = '1';
    });

    document.body.addEventListener('mouseout', () => {
        if (tooltip) {
            tooltip.remove();
            tooltip = null;
        }
    });
}
