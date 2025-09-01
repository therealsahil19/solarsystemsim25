import { store } from '../state/store';
import { DistanceUnit } from '../utils/units';

export function initMainPanel() {
    // Tab switching logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.getAttribute('data-tab');

            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            tabContents.forEach(content => {
                if (content.id === tab) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });

    // Logic from global-controls.ts
    const distanceUnitSelect = document.getElementById('distance-unit-select') as HTMLSelectElement;
    const visualScaleSlider = document.getElementById('visual-scale-slider') as HTMLInputElement;

    distanceUnitSelect.value = store.getState().distanceUnit;
    visualScaleSlider.value = String(store.getState().visualScale);

    distanceUnitSelect.addEventListener('change', () => {
        store.getState().setDistanceUnit(distanceUnitSelect.value as DistanceUnit);
    });

    visualScaleSlider.addEventListener('input', () => {
        store.getState().setVisualScale(parseFloat(visualScaleSlider.value));
    });

    // Logic from visuals-panel.ts
    const trailsEnabledToggle = document.getElementById('trails-enabled-toggle') as HTMLInputElement;
    const trailLengthSlider = document.getElementById('trail-length-slider') as HTMLInputElement;

    trailsEnabledToggle.checked = store.getState().trailsEnabled;
    trailLengthSlider.value = String(store.getState().trailLength);

    trailsEnabledToggle.addEventListener('change', () => {
        store.getState().setTrailsEnabled(trailsEnabledToggle.checked);
    });

    trailLengthSlider.addEventListener('input', () => {
        store.getState().setTrailLength(parseFloat(trailLengthSlider.value));
    });

    // Modal logic
    const selectBodyBtn = document.getElementById('select-body-btn');
    const celestialSelectorModal = document.getElementById('celestial-selector-modal');
    const closeCelestialSelectorModalBtn = document.getElementById('close-celestial-selector-modal-btn');

    selectBodyBtn?.addEventListener('click', () => {
        celestialSelectorModal?.classList.remove('hidden');
    });

    closeCelestialSelectorModalBtn?.addEventListener('click', () => {
        celestialSelectorModal?.classList.add('hidden');
    });


    // Subscribe to store changes to keep UI in sync
    store.subscribe((state) => {
        if (distanceUnitSelect.value !== state.distanceUnit) {
            distanceUnitSelect.value = state.distanceUnit;
        }
        if (parseFloat(visualScaleSlider.value) !== state.visualScale) {
            visualScaleSlider.value = String(state.visualScale);
        }
        if (trailsEnabledToggle.checked !== state.trailsEnabled) {
            trailsEnabledToggle.checked = state.trailsEnabled;
        }
        if (parseFloat(trailLengthSlider.value) !== state.trailLength) {
            trailLengthSlider.value = String(state.trailLength);
        }
    });
}
