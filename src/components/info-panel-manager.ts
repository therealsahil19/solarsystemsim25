import { CelestialBody } from '../data';
import * as dom from './dom';
import { KM_PER_AU } from '../utils/units';
import { PanelManager } from './panel-manager';
import { PanelController } from './panel-types';
import { updateInfoPanelColor } from './info-panel';

/**
 * Manages the state and behavior of the main information panel.
 * This class ensures the panel displays the correct information,
 * handles smooth content updates, and intelligently positions
 * itself to avoid overlapping with other UI elements.
 */
export class InfoPanelManager {
    private panelController: PanelController;
    private isAnimating = false;

    constructor() {
        if (!dom.infoPanel) {
            throw new Error("Info panel element not found in the DOM.");
        }
        this.panelController = PanelManager.createPanel('infoPanel', 'Info', dom.infoPanel);

        window.addEventListener('resize', () => this.calculateSafePosition());
    }

    /**
     * Updates the content of the info panel to display data for a new celestial body.
     * It handles smooth transitions between content updates.
     * @param selectedBody The full celestial object, including mesh and data.
     */
    public async updateContent(selectedBody: { data: CelestialBody; mesh: any }) {
        if (this.isAnimating) {
            console.warn("Animation in progress, skipping update.");
            return;
        }

        this.isAnimating = true;

        await this.fadeOut();

        this.populateContent(selectedBody);
        this.calculateSafePosition();
        this.panelController.show(); // Ensure panel is visible before fading in

        await this.fadeIn();

        this.isAnimating = false;
    }

    /**
     * Fades the panel out by adding a CSS class and waiting for the transition to complete.
     * @returns A promise that resolves when the animation is finished.
     */
    private fadeOut(): Promise<void> {
        return new Promise(resolve => {
            if (import.meta.env.MODE === 'test') {
                dom.infoPanel.classList.add('fade-out');
                return resolve();
            }
            const onTransitionEnd = () => {
                dom.infoPanel.removeEventListener('transitionend', onTransitionEnd);
                resolve();
            };
            dom.infoPanel.addEventListener('transitionend', onTransitionEnd);
            dom.infoPanel.classList.add('fade-out');
        });
    }

    /**
     * Fades the panel in by removing the CSS class.
     * @returns A promise that resolves when the animation is finished.
     */
    private fadeIn(): Promise<void> {
        return new Promise(resolve => {
            if (import.meta.env.MODE === 'test') {
                dom.infoPanel.classList.remove('fade-out');
                return resolve();
            }
            const onTransitionEnd = () => {
                dom.infoPanel.removeEventListener('transitionend', onTransitionEnd);
                resolve();
            };
            dom.infoPanel.addEventListener('transitionend', onTransitionEnd);
            dom.infoPanel.classList.remove('fade-out');
        });
    }

    /**
     * Populates the panel's DOM elements with the data from the celestial body.
     * @param selectedBody The full celestial object, including mesh and data.
     */
    private populateContent(selectedBody: { data: CelestialBody; mesh: any }) {
        const { data: body, mesh } = selectedBody;
        dom.infoName.textContent = body.name;

        let material;
        if (mesh instanceof (window as any).THREE.LOD) {
            material = (mesh.levels[0].object as any).material;
        } else {
            material = mesh.material;
        }
        const color = `#${material.color.getHexString()}`;
        updateInfoPanelColor(color);


        dom.infoImage.src = body.edu?.image || '';
        dom.infoImage.alt = `Image of ${body.name}`;
        dom.infoLink.href = body.edu?.readMoreUrl || '#';
        dom.infoShortDesc.textContent = body.edu?.shortDescription || '';

        // Clear and repopulate stats
        dom.infoBasicStats.innerHTML = '';
        dom.infoOrbitalChars.innerHTML = '';
        this.addStat(dom.infoBasicStats, 'Radius', body.radius.toLocaleString(), 'km');
        this.addStat(dom.infoBasicStats, 'Mass', body.mass ?? 'N/A', 'x 10^24 kg');
        this.addStat(dom.infoBasicStats, 'Density', body.density ?? 'N/A', 'kg/m³');
        this.addStat(dom.infoBasicStats, 'Gravity', body.surfaceGravity ?? 'N/A', 'm/s²');

        const type = body.parentId === 'sun' || body.parentId === null ? 'planet' : 'moon';
        const distanceInKm = type === 'moon' ? (body.semiMajorAxisKm || 0) : body.semiMajorAxis * KM_PER_AU;
        this.addStat(dom.infoOrbitalChars, 'Orbital Period', body.orbitalPeriod ?? 'N/A', 'days');
        this.addStat(dom.infoOrbitalChars, 'Semi-Major Axis', distanceInKm.toLocaleString(), 'km', 'The average distance from its parent body.');
        this.addStat(dom.infoOrbitalChars, 'Eccentricity', (body.eccentricity ?? 'N/A').toString());
        this.addStat(dom.infoOrbitalChars, 'Inclination', body.inclination ?? 'N/A', '°');

        // Populate the "Exact Mode" panel with high-precision orbital elements
        const exactModeContainer = document.getElementById('info-exact-mode')!;
        const exactModeToggle = document.getElementById('exact-mode-toggle')!;
        const exactModeContent = document.getElementById('exact-mode-content')!;

        if (body.orbitalElements) {
            exactModeContainer.classList.remove('hidden');
            exactModeContent.innerHTML = '';
            const elements = {
                'Semi-Major Axis': `${(body.orbitalElements.aKm / KM_PER_AU).toFixed(4)} AU`,
                'Eccentricity': body.orbitalElements.e.toFixed(6),
                'Inclination': `${body.orbitalElements.iDeg.toFixed(4)}°`,
                'Lon. of Asc. Node (Ω)': `${body.orbitalElements.lanDeg.toFixed(4)}°`,
                'Arg. of Periapsis (ω)': `${body.orbitalElements.argPeriDeg.toFixed(4)}°`,
                'Mean Anomaly at Epoch': `${body.orbitalElements.meanAnomalyDeg.toFixed(4)}°`,
                'Epoch': body.orbitalElements.epochISO.split('T')[0],
            };
            for (const [key, value] of Object.entries(elements)) {
                const strong = document.createElement('strong');
                strong.textContent = `${key}:`;
                const span = document.createElement('span');
                span.textContent = value;
                exactModeContent.appendChild(strong);
                exactModeContent.appendChild(span);
            }
            exactModeToggle.onclick = () => exactModeContent.classList.toggle('hidden');
        } else {
            exactModeContainer.classList.add('hidden');
        }
    }

    /**
     * A helper function to create and append a stat row to a container in the info panel.
     * @param container The parent element.
     * @param label The label for the stat.
     * @param value The value of the stat.
     * @param unit The unit for the stat.
     * @param tooltip An optional tooltip string.
     * @private
     */
    private addStat(container: HTMLElement, label: string, value: string | number, unit: string = '', tooltip: string | null = null) {
        if (value === undefined || value === null) return;

        const statId = `stat-${label.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
        const row = document.createElement('div');
        row.setAttribute('data-e2e', statId);

        const strong = document.createElement('strong');
        strong.textContent = `${label}:`;

        const span = document.createElement('span');
        span.textContent = `${value} ${unit}`;
        span.dataset.testid = 'stat-value';

        if (tooltip) {
            const tooltipSpan = document.createElement('span');
            tooltipSpan.className = 'tooltip';
            tooltipSpan.textContent = '(?)';
            const tooltipText = document.createElement('span');
            tooltipText.className = 'tooltip-text';
            tooltipText.textContent = tooltip;
            tooltipSpan.appendChild(tooltipText);
            span.appendChild(tooltipSpan);
        }

        row.appendChild(strong);
        row.appendChild(span);
        container.appendChild(row);
    }

    /**
     * Calculates and applies a safe position for the panel, avoiding UI conflicts.
     * It ensures the panel doesn't overlap with the top bar or the celestial selector button area.
     */
    private calculateSafePosition() {
        const panelState = this.panelController.getState();
        const panelRect = {
            width: panelState.w,
            height: panelState.h
        };

        const conflictElements = [
            document.getElementById('top-bar'),
            document.getElementById('selection-panel')
        ].filter(el => el !== null) as HTMLElement[];

        let topBoundary = 10; // Default top margin

        conflictElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            topBoundary = Math.max(topBoundary, rect.bottom + 10);
        });

        // Check if the current position is safe
        if (panelState.y < topBoundary) {
            panelState.y = topBoundary;
            this.panelController.setPosition(panelState.x, panelState.y);
        }

        // Also ensure it's within the viewport horizontally
        const winWidth = window.innerWidth;
        if (panelState.x + panelRect.width > winWidth) {
            panelState.x = winWidth - panelRect.width - 10;
            this.panelController.setPosition(panelState.x, panelState.y);
        }
    }

    /**
     * Hides the info panel.
     */
    public hide() {
        this.panelController.hide();
    }
}
