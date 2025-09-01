export type PanelState = {
    side: 'left' | 'right';
    isPinned: boolean;
    width: number;
};

export type CameraState = {
    position: [number, number, number];
    target: [number, number, number];
    fov: number;
};

export type TimeState = {
    simTime: number;
    timeScale: number;
    isPaused: boolean;
};

export type RenderState = {
    shadowsEnabled: boolean;
    performancePreset: 'auto' | 'low' | 'medium' | 'high';
};

export type UiState = {
    selectedBodyId: string | null;
};

export interface Preset {
  id: string;
  name: string;
  isBuiltIn?: boolean;
  createdAt?: string;
  panel: PanelState;
  camera: CameraState;
  time: TimeState;
  render: RenderState;
  ui: UiState;
  thumbnailDataUrl?: string;
}

const PRESETS_KEY = 'solarsim.presets.v1';

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

export function savePresets(presets: Preset[]): void {
    try {
        const userPresets = presets.filter(p => !p.isBuiltIn);
        localStorage.setItem(PRESETS_KEY, JSON.stringify(userPresets));
    } catch (e) {
        console.error("Failed to save presets to localStorage:", e);
    }
}

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

export function getAllPresets(): Preset[] {
    return [...builtInPresets, ...getStoredPresets()];
}

export function deletePreset(presetId: string): void {
    const presets = getStoredPresets();
    const filtered = presets.filter(p => p.id !== presetId);
    savePresets(filtered);
}

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
