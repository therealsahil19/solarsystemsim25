export const infoPanel = document.getElementById('infoPanel') as HTMLDivElement;
export const infoName = document.getElementById('info-name') as HTMLHeadingElement;
export const infoControls = document.getElementById('info-controls') as HTMLDivElement;
export const infoImage = document.getElementById('info-image') as HTMLImageElement;
export const infoLink = document.getElementById('info-link') as HTMLAnchorElement;
export const infoShortDesc = document.getElementById('info-short-desc') as HTMLParagraphElement;
export const infoBasicStats = document.getElementById('info-basic-stats') as HTMLDivElement;
export const infoOrbitalChars = document.getElementById('info-orbital-chars') as HTMLDivElement;
export const infoAdvancedDetails = document.getElementById('info-advanced-details') as HTMLDivElement;
export const advancedDetailsToggle = document.getElementById('advanced-details-toggle') as HTMLButtonElement;
export const advancedDetailsContent = document.getElementById('advanced-details-content') as HTMLDivElement;
export const pauseButton = document.getElementById('pause-btn') as HTMLButtonElement;
export const resetButton = document.getElementById('reset-btn') as HTMLButtonElement;
export const shadowToggle = document.getElementById('shadow-toggle') as HTMLInputElement;
export const canvas = document.querySelector('#bg') as HTMLCanvasElement;

export const controlsPanel = document.getElementById('controls-panel') as HTMLDivElement;
export const selectionPanel = document.getElementById('selection-panel') as HTMLDivElement;
export const celestialSelector = document.getElementById('celestial-selector') as HTMLDivElement;
export const celestialSelectorToggle = document.getElementById('celestial-selector-toggle') as HTMLButtonElement;
export const celestialSelectorMenu = document.getElementById('celestial-selector-menu') as HTMLDivElement;
export const quickAccessToolbar = document.getElementById('quick-access-toolbar') as HTMLDivElement;
export const freeCameraButton = document.getElementById('free-camera-btn') as HTMLButtonElement;
export const performancePreset = document.getElementById('performance-preset') as HTMLSelectElement;

export const debugHUD = document.getElementById('debug-hud') as HTMLDivElement;
export const debugPreset = document.getElementById('debug-preset') as HTMLSpanElement;
export const debugDPR = document.getElementById('debug-dpr') as HTMLSpanElement;
export const debugAvgMs = document.getElementById('debug-avg-ms') as HTMLSpanElement;
export const debugScale = document.getElementById('debug-scale') as HTMLSpanElement;

export const helpOverlay = document.getElementById('help-overlay') as HTMLDivElement;
export const helpOverlayClose = document.getElementById('help-overlay-close') as HTMLButtonElement;
export const helpButton = document.getElementById('help-button') as HTMLButtonElement;

export const timeScaleValue = document.getElementById('time-scale-value') as HTMLSpanElement;
export const timeStepBackward = document.getElementById('time-step-backward') as HTMLButtonElement;
export const timeScaleSlider = document.getElementById('time-scale-slider') as HTMLInputElement;
export const timeStepForward = document.getElementById('time-step-forward') as HTMLButtonElement;
export const timePresetButtons = document.querySelectorAll('.time-preset') as NodeListOf<HTMLButtonElement>;
export const timeScaleInput = document.getElementById('time-scale-input') as HTMLInputElement;
export const timeControls = document.getElementById('time-controls') as HTMLDivElement;

// Small Info Card
export const smallInfoCard = document.getElementById('small-info-card') as HTMLDivElement;
export const cardThumb = document.getElementById('card-thumb') as HTMLImageElement;
export const cardTitle = document.getElementById('card-title') as HTMLDivElement;
export const cardStats = document.getElementById('card-stats') as HTMLDivElement;
export const btnFrame = document.getElementById('btn-frame') as HTMLButtonElement;
export const btnFollow = document.getElementById('btn-follow') as HTMLButtonElement;
export const btnOrbit = document.getElementById('btn-orbit') as HTMLButtonElement;

export function initTooltips() {
    let tooltip: HTMLDivElement | null = null;

    document.body.addEventListener('mouseover', (e) => {
        const target = e.target as HTMLElement;
        const title = target.getAttribute('data-tooltip') || target.getAttribute('title');

        if (!title) return;

        // Prevent default browser tooltip
        if (target.getAttribute('title')) {
            target.setAttribute('data-tooltip', title);
            target.removeAttribute('title');
        }

        tooltip = document.createElement('div');
        tooltip.className = 'tooltip-text';
        tooltip.textContent = title;
        document.body.appendChild(tooltip);

        const targetRect = target.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();

        let top = targetRect.top - tooltipRect.height - 8;
        let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);

        if (top < 0) {
            top = targetRect.bottom + 8;
        }
        if (left < 0) {
            left = 5;
        }
        if (left + tooltipRect.width > window.innerWidth) {
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
