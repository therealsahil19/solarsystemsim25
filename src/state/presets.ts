/** Defines the state of a UI panel for a preset. */
export type PanelState = {
    /** The side of the screen the panel is on. */
    side: 'left' | 'right';
    /** Whether the panel is pinned open. */
    isPinned: boolean;
    /** The width of the panel in pixels. */
    width: number;
};

/** Defines the state of the camera for a preset. */
export type CameraState = {
    /** The camera's position as an [x, y, z] tuple. */
    position: [number, number, number];
    /** The camera's target (look-at point) as an [x, y, z] tuple. */
    target: [number, number, number];
    /** The camera's vertical field of view. */
    fov: number;
};

/** Defines the state of the simulation time for a preset. */
export type TimeState = {
    /** The current simulation time in days. */
    simTime: number;
    /** The multiplier for the simulation speed. */
    timeScale: number;
    /** Whether the simulation is paused. */
    isPaused: boolean;
};

/** Defines the rendering settings for a preset. */
export type RenderState = {
    /** Whether shadows are enabled. */
    shadowsEnabled: boolean;
    /** The selected performance preset. */
    performancePreset: 'auto' | 'low' | 'medium' | 'high';
};

/** Defines the UI state for a preset. */
export type UiState = {
    /** The ID of the currently selected celestial body, or null if none is selected. */
    selectedBodyId: string | null;
};

/**
 * Represents a complete preset that captures a snapshot of the application's state.
 */
export interface Preset {
  /** A unique identifier for the preset. */
  id: string;
  /** The user-visible name of the preset. */
  name: string;
  /** If true, this is a built-in preset that cannot be deleted. */
  isBuiltIn?: boolean;
  /** The ISO date string of when the preset was created. */
  createdAt?: string;
  /** The state of the UI panels. */
  panel: PanelState;
  /** The state of the camera. */
  camera: CameraState;
  /** The state of the simulation time. */
  time: TimeState;
  /** The rendering settings. */
  render: RenderState;
  /** The general UI state. */
  ui: UiState;
  /** A base64-encoded data URL for a thumbnail image of the preset. */
  thumbnailDataUrl?: string;
}

/**
 * The key used to store user-created presets in `localStorage`.
 * @private
 */
const PRESETS_KEY = 'solarsim.presets.v1';

/**
 * Retrieves the list of user-created presets from `localStorage`.
 * @returns An array of `Preset` objects. Returns an empty array if none are found or if there's a parsing error.
 */
export function getStoredPresets(): Preset[] {
    const stored = localStorage.getItem(PRESETS_KEY);
    if (stored) {
        try {
            return JSON.parse(stored);
        } catch (e) {
            console.error("Failed to load presets from localStorage:", e);
            return [];
        }
    }
    return [];
}

/**
 * Saves a list of presets to `localStorage`.
 * This function filters out built-in presets to ensure only user-created ones are saved.
 * @param presets The array of presets to save.
 */
export function savePresets(presets: Preset[]): void {
    try {
        const userPresets = presets.filter(p => !p.isBuiltIn);
        localStorage.setItem(PRESETS_KEY, JSON.stringify(userPresets));
    } catch (e) {
        console.error("Failed to save presets to localStorage:", e);
    }
}

/**
 * An array of default, built-in presets that are always available to the user.
 */
export const builtInPresets: Preset[] = [
    {
        id: 'builtin-explorer',
        name: 'Explorer',
        isBuiltIn: true,
        panel: { side: 'left', isPinned: true, width: 360 },
        camera: { position: [0, 200, 800], target: [0, 0, 0], fov: 60 },
        time: { simTime: 0, timeScale: 1, isPaused: true },
        render: { shadowsEnabled: true, performancePreset: 'auto' },
        ui: { selectedBodyId: 'sun' },
    },
    {
        id: 'builtin-presentation',
        name: 'Presentation',
        isBuiltIn: true,
        panel: { side: 'right', isPinned: false, width: 300 },
        camera: { position: [0, 50, 1000], target: [0, 0, 0], fov: 45 },
        time: { simTime: 0, timeScale: 0.2, isPaused: false },
        render: { shadowsEnabled: true, performancePreset: 'high' },
        ui: { selectedBodyId: 'earth' },
    }
];

/**
 * Retrieves a combined list of all built-in and user-stored presets.
 * @returns A single array containing all available presets.
 */
export function getAllPresets(): Preset[] {
    return [...builtInPresets, ...getStoredPresets()];
}

/**
 * Deletes a user-created preset from `localStorage`.
 * @param presetId The ID of the preset to delete.
 */
export function deletePreset(presetId: string): void {
    const presets = getStoredPresets();
    const filtered = presets.filter(p => p.id !== presetId);
    savePresets(filtered);
}

/**
 * Adds a new preset or updates an existing one in `localStorage`.
 * If a preset with the same ID already exists, it will be overwritten.
 * @param preset The preset object to add or update.
 */
export function addPreset(preset: Preset): void {
    const presets = getStoredPresets();
    // Overwrite if exists, otherwise add
    const index = presets.findIndex(p => p.id === preset.id);
    if (index > -1) {
        presets[index] = preset;
    } else {
        presets.push(preset);
    }
    savePresets(presets);
}
