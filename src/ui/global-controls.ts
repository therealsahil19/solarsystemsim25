import { store } from '../state/store';
import { DistanceUnit } from '../utils/units';

export function initGlobalControls() {
    const distanceUnitSelect = document.getElementById('distance-unit-select') as HTMLSelectElement;
    const visualScaleSlider = document.getElementById('visual-scale-slider') as HTMLInputElement;

    // Set initial values from store
    distanceUnitSelect.value = store.getState().distanceUnit;
    visualScaleSlider.value = String(store.getState().visualScale);

    // Add event listeners
    distanceUnitSelect.addEventListener('change', () => {
        store.getState().setDistanceUnit(distanceUnitSelect.value as DistanceUnit);
    });

    visualScaleSlider.addEventListener('input', () => {
        store.getState().setVisualScale(parseFloat(visualScaleSlider.value));
    });

    // Subscribe to store changes to keep UI in sync (e.g., when a preset is loaded)
    store.subscribe((state) => {
        if (distanceUnitSelect.value !== state.distanceUnit) {
            distanceUnitSelect.value = state.distanceUnit;
        }
        if (parseFloat(visualScaleSlider.value) !== state.visualScale) {
            visualScaleSlider.value = String(state.visualScale);
        }
    });
}
