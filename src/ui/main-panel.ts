import { store } from '../state/store';
import { DistanceUnit } from '../utils/units';
import { sliderToTimeScale, timeScaleToSlider, TimeScaleConfig } from '../utils/timeScaleMap';

const DEFAULT_TIME_CFG: TimeScaleConfig = {
  minNonZero: 1e-6,
  midScale: 100,
  maxScale: 1e8,
  pauseThreshold: 1e-7
};

function formatTimeScaleFriendly(scale: number): string {
  if (scale === 0) return 'Paused';
  if (scale === 1) return '1x';
  const secondsPerDay = 86400;
  const secondsPerYear = 365.25 * secondsPerDay;
  if (scale > secondsPerYear * 0.95) return `${(scale / secondsPerYear).toFixed(1)} y/s`;
  if (scale > secondsPerDay * 0.95) return `${(scale / secondsPerDay).toFixed(1)} d/s`;
  if (scale < 0.1) return `${scale.toExponential(1)}x`;
  return `${scale.toFixed(1)}x`;
}

function formatTimestamp(simTime: number): string {
    const date = new Date(new Date(2025, 0, 1).getTime() + simTime * 1000);
    return date.toUTCString().substring(5, 25); // Simple formatting
}

export function initMainPanel() {
    // The tab logic has been removed.
    // The init functions for the controls are still called from main.ts,
    // but the container setup is no longer needed here.
    initTimeControls();
    initVisualsPanel();
    initGlobalControls();
}

function initTimeControls() {
    const playPauseBtn = document.getElementById('play-pause-btn') as HTMLButtonElement;
    const slider = document.getElementById('time-scale-slider') as HTMLInputElement;
    const label = document.getElementById('time-scale-label') as HTMLSpanElement;
    const timestampDisplay = document.getElementById('timestamp-display') as HTMLDivElement;
    const presetButtons = document.querySelectorAll('.time-preset');
    const stepForwardBtn = document.getElementById('time-step-forward') as HTMLButtonElement;
    const stepBackwardBtn = document.getElementById('time-step-backward') as HTMLButtonElement;
    const tooltip = document.getElementById('time-scale-tooltip') as HTMLDivElement;

    function updateSliderTooltip() {
        const value = parseFloat(slider.value);
        const min = parseFloat(slider.min);
        const max = parseFloat(slider.max);
        const percent = (value - min) / (max - min);
        const thumbWidth = 16; // Approximate width of the slider thumb
        const trackWidth = slider.offsetWidth;
        const thumbPosition = percent * (trackWidth - thumbWidth) + (thumbWidth / 2);

        tooltip.style.left = `${thumbPosition}px`;
        const displayValue = formatTimeScaleFriendly(sliderToTimeScale(value, DEFAULT_TIME_CFG));
        tooltip.textContent = displayValue;
    }

    function updateUiFromState() {
        const { isPaused, timeScale, simTime } = store.getState();
        playPauseBtn.textContent = isPaused ? '▶' : '❚❚';
        slider.value = timeScaleToSlider(timeScale, DEFAULT_TIME_CFG).toString();
        label.textContent = formatTimeScaleFriendly(timeScale);
        timestampDisplay.textContent = formatTimestamp(simTime);
        updateSliderTooltip();
    }

    // Initial UI sync
    updateUiFromState();

    // Event Listeners
    playPauseBtn.addEventListener('click', () => {
        store.getState().setPaused(!store.getState().isPaused);
    });

    slider.addEventListener('input', () => {
        const scale = sliderToTimeScale(parseFloat(slider.value), DEFAULT_TIME_CFG);
        store.getState().setTimeScale(scale);
        updateSliderTooltip();
    });

    slider.addEventListener('mouseenter', () => {
        tooltip.classList.add('visible');
        updateSliderTooltip();
    });

    slider.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });

    presetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const speed = parseFloat((btn as HTMLElement).dataset.speed!);
            store.getState().setTimeScale(speed);
        });
    });

    stepForwardBtn.addEventListener('click', () => {
        const { simTime } = store.getState();
        store.getState().setSimTime(simTime + 86400); // Step 1 day
        if (!store.getState().isPaused) store.getState().setPaused(true);
    });

    stepBackwardBtn.addEventListener('click', () => {
        const { simTime } = store.getState();
        store.getState().setSimTime(simTime - 86400); // Step 1 day back
        if (!store.getState().isPaused) store.getState().setPaused(true);
    });

    // Subscribe to store changes
    store.subscribe(updateUiFromState);
}

function initVisualsPanel() {
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

function initGlobalControls() {
    const distanceUnitSelect = document.getElementById('distance-unit-select') as HTMLSelectElement;

    // Set initial values from store
    distanceUnitSelect.value = store.getState().distanceUnit;

    // Add event listeners
    distanceUnitSelect.addEventListener('change', () => {
        store.getState().setDistanceUnit(distanceUnitSelect.value as DistanceUnit);
    });

    // Subscribe to store changes to keep UI in sync (e.g., when a preset is loaded)
    store.subscribe((state) => {
        if (distanceUnitSelect.value !== state.distanceUnit) {
            distanceUnitSelect.value = state.distanceUnit;
        }
    });
}
