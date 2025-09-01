import { store } from '../state/store';
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
    // Assuming simTime is seconds from a starting epoch.
    // For this implementation, let's use a simple "Day X, Hour:Min:Sec" format.
    // A full date implementation would require a start epoch Date object.
    const date = new Date(new Date(2025, 0, 1).getTime() + simTime * 1000);
    return date.toUTCString().substring(5, 25); // Simple formatting
}

export function initTimeControls() {
    const playPauseBtn = document.getElementById('play-pause-btn') as HTMLButtonElement;
    const slider = document.getElementById('time-scale-slider') as HTMLInputElement;
    const label = document.getElementById('time-scale-label') as HTMLSpanElement;
    const timestampDisplay = document.getElementById('timestamp-display') as HTMLDivElement;
    const presetButtons = document.querySelectorAll('.time-preset');
    const stepForwardBtn = document.getElementById('time-step-forward') as HTMLButtonElement;
    const stepBackwardBtn = document.getElementById('time-step-backward') as HTMLButtonElement;

    function updateUiFromState() {
        const { isPaused, timeScale, simTime } = store.getState();
        playPauseBtn.textContent = isPaused ? '▶' : '❚❚';
        slider.value = timeScaleToSlider(timeScale, DEFAULT_TIME_CFG).toString();
        label.textContent = formatTimeScaleFriendly(timeScale);
        timestampDisplay.textContent = formatTimestamp(simTime);
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
