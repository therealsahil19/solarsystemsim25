import { store } from '../state/store';

export function initVisualsPanel() {
    const trailsEnabledToggle = document.getElementById('trails-enabled-toggle') as HTMLInputElement;
    const trailLengthSlider = document.getElementById('trail-length-slider') as HTMLInputElement;

    // Set initial values from store
    trailsEnabledToggle.checked = store.getState().trailsEnabled;
    trailLengthSlider.value = String(store.getState().trailLength);

    // Add event listeners
    trailsEnabledToggle.addEventListener('change', () => {
        store.getState().setTrailsEnabled(trailsEnabledToggle.checked);
    });

    trailLengthSlider.addEventListener('input', () => {
        store.getState().setTrailLength(parseFloat(trailLengthSlider.value));
    });

    // Subscribe to store changes to keep UI in sync
    store.subscribe((state) => {
        if (trailsEnabledToggle.checked !== state.trailsEnabled) {
            trailsEnabledToggle.checked = state.trailsEnabled;
        }
        if (parseFloat(trailLengthSlider.value) !== state.trailLength) {
            trailLengthSlider.value = String(state.trailLength);
        }
    });
}
