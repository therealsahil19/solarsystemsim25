import simStore, { SimState } from '../state/simStore';
import uiStore, { UIState } from '../state/uiStore';
import { shallow } from 'zustand/shallow';
import { DistanceUnit } from '../utils/units';
import { sliderToTimeScale, timeScaleToSlider, TimeScaleConfig } from '../utils/timeScaleMap';

/**
 * The default configuration for mapping the time slider's linear value to the exponential time scale.
 * @private
 */
const DEFAULT_TIME_CFG: TimeScaleConfig = {
  minNonZero: 0.5,
  midScale: 20,
  maxScale: 1000,
  pauseThreshold: 0.25
};

/**
 * Formats a time scale value into a human-readable string (e.g., "1.0x", "2.5 y/s").
 * @param scale The time scale value.
 * @returns A formatted string.
 * @private
 */
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

/**
 * Formats the simulation time (in days) into a readable UTC date string.
 * @param simTime The simulation time in days.
 * @returns A formatted date string.
 * @private
 */
function formatTimestamp(simTime: number): string {
    const date = new Date(new Date(2025, 0, 1).getTime() + simTime * 86400 * 1000);
    return date.toUTCString().substring(5, 25); // Simple formatting
}

/**
 * Initializes all controls within the main settings panel by calling the
 * specific initializer for each section.
 */
export function initMainPanel() {
    initTimeControls();
    initVisualsPanel();
    initGlobalControls();
}

/**
 * Initializes all UI elements related to time control, such as the play/pause
 * button, time scale slider, and step buttons. It connects them to the global store.
 * @private
 */
function initTimeControls() {
    const playPauseBtn = document.getElementById('play-pause-btn') as HTMLButtonElement;
    const slider = document.getElementById('time-scale-slider') as HTMLInputElement;
    const label = document.getElementById('time-scale-label') as HTMLSpanElement;
    const timestampDisplay = document.getElementById('timestamp-display') as HTMLDivElement;
    const presetButtons = document.querySelectorAll('.time-preset');
    const stepForwardBtn = document.getElementById('time-step-forward') as HTMLButtonElement;
    const stepBackwardBtn = document.getElementById('time-step-backward') as HTMLButtonElement;
    const tooltip = document.getElementById('time-scale-tooltip') as HTMLDivElement;

    /** Updates the position and content of the time scale slider's tooltip. */
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

    /** Updates the entire time control UI based on the current state from the store. */
    function updateUiFromState() {
        const { isPaused, timeScale, simTime } = simStore.getState();
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
        simStore.getState().setPaused(!simStore.getState().isPaused);
    });

    slider.addEventListener('input', () => {
        const scale = sliderToTimeScale(parseFloat(slider.value), DEFAULT_TIME_CFG);
        simStore.getState().setTimeScale(scale);
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
            simStore.getState().setTimeScale(speed);
        });
    });

    stepForwardBtn.addEventListener('click', () => {
        const { simTime } = simStore.getState();
        simStore.getState().setSimTime(simTime + 1); // Step 1 day
        if (!simStore.getState().isPaused) simStore.getState().setPaused(true);
    });

    stepBackwardBtn.addEventListener('click', () => {
        const { simTime } = simStore.getState();
        simStore.getState().setSimTime(simTime - 1); // Step 1 day back
        if (!simStore.getState().isPaused) simStore.getState().setPaused(true);
    });

    // Selective subscriptions to avoid unnecessary re-renders
    // 1) Subscribe to isPaused and timeScale with shallow equality
    simStore.subscribe(
        (s: SimState) => ({ isPaused: s.isPaused, timeScale: s.timeScale }),
        ({ isPaused, timeScale }) => {
            playPauseBtn.textContent = isPaused ? '▶' : '❚❚';
            const sliderVal = timeScaleToSlider(timeScale, DEFAULT_TIME_CFG);
            if (parseFloat(slider.value) !== sliderVal) {
                slider.value = sliderVal.toString();
            }
            label.textContent = formatTimeScaleFriendly(timeScale);
            updateSliderTooltip();
        },
        { equalityFn: shallow }
    );

    // 2) Subscribe to simTime separately and debounce DOM update
    let simTimeUpdateTimeout: number | null = null;
    simStore.subscribe(
        (s: SimState) => s.simTime,
        (simTime) => {
            if (simTimeUpdateTimeout) window.clearTimeout(simTimeUpdateTimeout);
            simTimeUpdateTimeout = window.setTimeout(() => {
                timestampDisplay.textContent = formatTimestamp(simTime);
            }, 100); // update at most every 100ms
        }
    );
}

/**
 * Initializes the "Visuals" panel controls, such as the trail toggle and length slider.
 * @private
 */
function initVisualsPanel() {
    const trailsEnabledToggle = document.getElementById('trails-enabled-toggle') as HTMLInputElement;
    const trailLengthSlider = document.getElementById('trail-length-slider') as HTMLInputElement;

    // Set initial values from store
    trailsEnabledToggle.checked = simStore.getState().trailsEnabled;
    trailLengthSlider.value = String(simStore.getState().trailLength);

    // Add event listeners
    trailsEnabledToggle.addEventListener('change', () => {
        simStore.getState().setTrailsEnabled(trailsEnabledToggle.checked);
    });

    trailLengthSlider.addEventListener('input', () => {
        simStore.getState().setTrailLength(parseFloat(trailLengthSlider.value));
    });

    // Subscribe only to the specific fields we need
    simStore.subscribe(
        (s: SimState) => ({ trailsEnabled: s.trailsEnabled, trailLength: s.trailLength }),
        ({ trailsEnabled, trailLength }) => {
            if (trailsEnabledToggle.checked !== trailsEnabled) {
                trailsEnabledToggle.checked = trailsEnabled;
            }
            if (parseFloat(trailLengthSlider.value) !== trailLength) {
                trailLengthSlider.value = String(trailLength);
            }
        },
        { equalityFn: shallow }
    );
}

/**
 * Initializes global controls, such as the distance unit selector.
 * @private
 */
function initGlobalControls() {
    const distanceUnitSelect = document.getElementById('distance-unit-select') as HTMLSelectElement;

    // Set initial values from store
    distanceUnitSelect.value = uiStore.getState().distanceUnit;

    // Add event listeners
    distanceUnitSelect.addEventListener('change', () => {
        uiStore.getState().setDistanceUnit(distanceUnitSelect.value as DistanceUnit);
    });

    // Subscribe only to distanceUnit changes
    uiStore.subscribe(
        (s: UIState) => s.distanceUnit,
        (distanceUnit) => {
            if (distanceUnitSelect.value !== distanceUnit) {
                distanceUnitSelect.value = distanceUnit;
            }
        }
    );
}
