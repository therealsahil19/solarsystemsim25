import { camera, controls, renderer } from '../scene';
import store from '../state/store';
import { Preset, PanelState, getAllPresets, addPreset, deletePreset } from '../state/presets';
import { v4 as uuidv4 } from 'uuid';
import { PanelManager } from './panel-manager';

/**
 * The localStorage key for panel state.
 * @private
 * @todo This is duplicated from info-panel and should be centralized.
 */
const PANEL_STATE_KEY = 'solarsim.panel.v1';

/**
 * Captures the current state of the simulation and returns it as a `Preset` object.
 * @param name The name for the new preset.
 * @returns A `Preset` object representing the current application state.
 * @private
 */
function captureCurrentState(name: string): Preset {
    const panelState: PanelState = JSON.parse(localStorage.getItem(PANEL_STATE_KEY) || '{}');
    const { simTime, timeScale, isPaused, selectedBodyId, perfPreset } = store.getState();
    const shadowsEnabled = (document.getElementById('shadow-toggle') as HTMLInputElement).checked;

    return {
        id: uuidv4(),
        name: name,
        createdAt: new Date().toISOString(),
        panel: {
            side: panelState.side || 'left',
            isPinned: panelState.isPinned || true,
            width: panelState.width || 320,
        },
        camera: {
            position: camera.position.toArray(),
            target: controls.target.toArray(),
            fov: camera.fov,
        },
        time: { simTime, timeScale, isPaused },
        render: { shadowsEnabled, performancePreset: perfPreset },
        ui: { selectedBodyId },
        thumbnailDataUrl: renderer.domElement.toDataURL('image/png'),
    };
}

/**
 * Applies a given preset to the application, restoring the saved state.
 * @param preset The `Preset` object to apply.
 * @private
 */
function applyPreset(preset: Preset) {
    // Apply panel state by reloading. This is a simple but effective method.
    localStorage.setItem(PANEL_STATE_KEY, JSON.stringify(preset.panel));
    window.location.reload();

    // Apply camera state
    camera.position.fromArray(preset.camera.position);
    controls.target.fromArray(preset.camera.target);
    camera.fov = preset.camera.fov;
    camera.updateProjectionMatrix();
    controls.update();

    // Apply time state
    store.getState().setSimTime(preset.time.simTime);
    store.getState().setTimeScale(preset.time.timeScale);
    store.getState().setPaused(preset.time.isPaused);

    // Apply render state
    (document.getElementById('shadow-toggle') as HTMLInputElement).checked = preset.render.shadowsEnabled;
    store.getState().setPerfPreset(preset.render.performancePreset);

    // Apply UI state
    if(preset.ui.selectedBodyId) {
        store.getState().setSelectedBodyId(preset.ui.selectedBodyId);
    }
}

/**
 * Renders the list of available presets (both built-in and user-created) into the panel.
 * @private
 */
function renderPresetsList() {
    const listEl = document.getElementById('presets-list')!;
    listEl.innerHTML = '';
    const presets = getAllPresets();

    presets.forEach(preset => {
        const item = document.createElement('div');
        item.className = 'preset-item';
        item.innerHTML = `
            <span class="preset-name">${preset.name} ${preset.isBuiltIn ? '(Built-in)' : ''}</span>
            <div class="preset-actions">
                <button class="control-btn apply-preset-btn" data-id="${preset.id}">Apply</button>
                ${!preset.isBuiltIn ? `<button class="control-btn delete-preset-btn" data-id="${preset.id}">Delete</button>` : ''}
            </div>
        `;
        listEl.appendChild(item);
    });
}

/**
 * Initializes the presets panel, creating its controller and setting up all event listeners
 * for saving, applying, and deleting presets.
 */
export function initPresetsPanel() {
    const modalEl = document.getElementById('presets-modal');
    if (!modalEl) return;

    const panelController = PanelManager.createPanel(
        'presets',
        'Presets',
        modalEl,
        {
            width: 500,
            height: 450,
            modal: true,
        }
    );

    const openBtn = document.getElementById('manage-presets-btn');
    const saveBtn = document.getElementById('save-current-preset-btn');
    const nameInput = document.getElementById('new-preset-name') as HTMLInputElement;
    const listEl = document.getElementById('presets-list');

    if (!openBtn || !saveBtn || !nameInput || !listEl) {
        console.error("One or more required elements for presets panel not found");
        return;
    };

    // Re-render the list every time the panel is shown to ensure it's up-to-date.
    panelController.on('show', renderPresetsList);

    openBtn.addEventListener('click', () => panelController.show());

    saveBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (!name) {
            alert('Please enter a name for the preset.');
            return;
        }
        const newPreset = captureCurrentState(name);
        addPreset(newPreset);
        nameInput.value = '';
        renderPresetsList();
    });

    listEl.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const presetId = target.dataset.id;
        if (!presetId) return;

        if (target.classList.contains('apply-preset-btn')) {
            const allPresets = getAllPresets();
            const presetToApply = allPresets.find(p => p.id === presetId);
            if (presetToApply) {
                applyPreset(presetToApply);
                panelController.hide();
            }
        }

        if (target.classList.contains('delete-preset-btn')) {
            if (confirm('Are you sure you want to delete this preset?')) {
                deletePreset(presetId);
                renderPresetsList();
            }
        }
    });
}
