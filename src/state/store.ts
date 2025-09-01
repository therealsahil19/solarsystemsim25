import { createStore } from 'zustand/vanilla';

import { DistanceUnit } from "../utils/units";

interface AppState {
  selectedBodyId: string | null;
  setSelectedBodyId: (id: string | null) => void;
  isPaused: boolean;
  setPaused: (p: boolean) => void;
  timeScale: number;
  setTimeScale: (s: number) => void;
  simTime: number;
  setSimTime: (t: number) => void;
  perfPreset: 'auto' | 'low' | 'medium' | 'high';
  setPerfPreset: (p: AppState['perfPreset']) => void;
  followingId: string | null;
  setFollowingId: (id: string | null) => void;
  distanceUnit: DistanceUnit;
  setDistanceUnit: (unit: DistanceUnit) => void;
  visualScale: number; // 0 = real, 1 = visual
  setVisualScale: (scale: number) => void;

  // Trail settings
  trailsEnabled: boolean;
  setTrailsEnabled: (enabled: boolean) => void;
  trailLength: number; // in days
  setTrailLength: (length: number) => void;
}

export const store = createStore<AppState>((set) => ({
  selectedBodyId: null,
  setSelectedBodyId: (id) => set({ selectedBodyId: id }),
  isPaused: false,
  setPaused: (p) => set({ isPaused: p }),
  timeScale: 1,
  setTimeScale: (t) => set({ timeScale: t }),
  simTime: 0,
  setSimTime: (t) => set({ simTime: t }),
  perfPreset: 'auto',
  setPerfPreset: (p) => set({ perfPreset: p }),
  followingId: null,
  setFollowingId: (id) => set({ followingId: id }),
  distanceUnit: 'au',
  setDistanceUnit: (unit) => set({ distanceUnit: unit }),
  visualScale: 0.5,
  setVisualScale: (scale) => set({ visualScale: scale }),

  // Trail settings
  trailsEnabled: true,
  setTrailsEnabled: (enabled) => set({ trailsEnabled: enabled }),
  trailLength: 365, // Default to 1 year
  setTrailLength: (length) => set({ trailLength: length }),
}));
