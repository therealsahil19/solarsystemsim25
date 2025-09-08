import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

export type ScalePreset = 'realistic' | 'educational' | 'hybrid';

export interface SimState {
  // Simulation core
  selectedBodyId: string | null;
  isPaused: boolean;
  simTime: number;
  timeScale: number;

  // View/scaling preset used by simulation pipeline
  scalePreset: ScalePreset;

  // Visuals affecting simulation renderers
  trailsEnabled: boolean;
  trailLength: number; // in days

  // Camera-following
  followingId: string | null;

  // Performance preset
  perfPreset: 'auto' | 'low' | 'medium' | 'high';

  // Actions
  setSelectedBodyId: (id: string | null) => void;
  setPaused: (isPaused: boolean) => void;
  setSimTime: (time: number) => void;
  setTimeScale: (scale: number) => void;
  setScalePreset: (preset: ScalePreset) => void;
  setTrailsEnabled: (enabled: boolean) => void;
  setTrailLength: (length: number) => void;
  setFollowingId: (id: string | null) => void;
  setPerfPreset: (preset: 'auto' | 'low' | 'medium' | 'high') => void;
}

const simStore = createStore<SimState>()(
  subscribeWithSelector(
    immer((set) => ({
      // Initial State (copied from legacy store)
      selectedBodyId: 'sun',
      isPaused: false,
      simTime: 0,
      timeScale: 1,
      scalePreset: 'hybrid',
      trailsEnabled: true,
      trailLength: 365,
      followingId: null,
      perfPreset: 'auto',

      // Actions
      setSelectedBodyId: (id) => set({ selectedBodyId: id }),
      setPaused: (isPaused) => set({ isPaused }),
      setSimTime: (time) => set({ simTime: time }),
      setTimeScale: (scale) => set({ timeScale: scale }),
      setScalePreset: (preset) => set({ scalePreset: preset }),
      setTrailsEnabled: (enabled) => set({ trailsEnabled: enabled }),
      setTrailLength: (length) => set({ trailLength: length }),
      setFollowingId: (id) => set({ followingId: id }),
      setPerfPreset: (preset) => set({ perfPreset: preset }),
    }))
  )
);

export default simStore;

export const getSimState = simStore.getState;
export const setSimState = simStore.setState;
export const subscribeSim = simStore.subscribe;
