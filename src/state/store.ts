import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DistanceUnit } from '../utils/units';
import { TimeScale, timeScaleToDisplay, timeScaleToSlider, sliderToTimeScale, TimeScaleConfig } from '../utils/timeScaleMap';
import { presets, Preset } from './presets';

const DEFAULT_TIME_CFG: TimeScaleConfig = {
  minNonZero: 1e-6,
  midScale: 100,
  maxScale: 1e8,
  pauseThreshold: 1e-7
};

feature/UI-UX-improvements
export type AppState = {
  // State
=======
export type ScalePreset = 'realistic' | 'educational' | 'hybrid';

interface AppState {
  selectedBodyId: string | null;
  setSelectedBodyId: (id: string | null) => void;
main
  isPaused: boolean;
  simTime: number;
  timeScale: number;
  selectedBodyId: string | null;
  isFollowing: boolean;
  trailsEnabled: boolean;
  trailLength: number; // in days
  distanceUnit: DistanceUnit;
feature/UI-UX-improvements
  visualScale: number; // 0 = real, 1 = visual
  perfPreset: 'auto' | 'low' | 'medium' | 'high';
  // Actions
  setPaused: (isPaused: boolean) => void;
  setSimTime: (time: number) => void;
  setTimeScale: (scale: number) => void;
  setSelectedBodyId: (id: string | null) => void;
  toggleFollow: () => void;
=======
  setDistanceUnit: (unit: DistanceUnit) => void;
  scalePreset: ScalePreset;
  setScalePreset: (preset: ScalePreset) => void;

  // Trail settings
  trailsEnabled: boolean;
main
  setTrailsEnabled: (enabled: boolean) => void;
  setTrailLength: (length: number) => void;
  setDistanceUnit: (unit: DistanceUnit) => void;
  setVisualScale: (scale: number) => void;
  setPerfPreset: (preset: 'auto' | 'low' | 'medium' | 'high') => void;
  // Ephemeral state, not persisted
  frame: () => void; // This is a transient action
};

export const useStore = create<AppState>()(
  subscribeWithSelector(
    immer((set, get) => ({
      isPaused: false,
      simTime: Date.now() / 1000,
      timeScale: 1,
      selectedBodyId: 'Sun',
      isFollowing: false,
      trailsEnabled: true,
      trailLength: 365,
      distanceUnit: 'au',
      visualScale: 0.5,
      perfPreset: 'auto',

feature/UI-UX-improvements
      setPaused: (isPaused) => set({ isPaused }),
      setSimTime: (time) => set({ simTime: time }),
      setTimeScale: (scale) => {
        const sliderValue = timeScaleToSlider(scale, DEFAULT_TIME_CFG);
        const newTimeScale = sliderToTimeScale(sliderValue, DEFAULT_TIME_CFG);
        set({ timeScale: newTimeScale });
      },
      setSelectedBodyId: (id) => set({ selectedBodyId: id }),
      toggleFollow: () => set((state) => ({ isFollowing: !state.isFollowing })),
      setTrailsEnabled: (enabled) => set({ trailsEnabled: enabled }),
      setTrailLength: (length) => set({ trailLength: length }),
      setDistanceUnit: (unit) => set({ distanceUnit: unit }),
      setVisualScale: (scale) => set({ visualScale: scale }),
      setPerfPreset: (preset) => set({ perfPreset: preset }),
      frame: () => {
        // This is a bit of a hack. The frame action is handled in main.ts
        // by listening to this state change. We just need to trigger the event.
        const id = get().selectedBodyId;
        set({ selectedBodyId: null }); // Force a state change
        set({ selectedBodyId: id });
      },
    }))
  )
);
=======
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
  scalePreset: 'hybrid',
  setScalePreset: (preset) => set({ scalePreset: preset }),
main

export const store = useStore;
