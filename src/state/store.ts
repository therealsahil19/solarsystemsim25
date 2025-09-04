import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DistanceUnit } from '../utils/units';

export type ScalePreset = 'realistic' | 'educational' | 'hybrid';

export interface AppState {
  selectedBodyId: string | null;
  isPaused: boolean;
  simTime: number; // in days
  timeScale: number;

  // View options
  scalePreset: ScalePreset;
  distanceUnit: DistanceUnit;

  // Trail options
  trailsEnabled: boolean;
  trailLength: number; // in days

  // Camera options
  followingId: string | null;

  // Performance
  perfPreset: 'auto' | 'low' | 'medium' | 'high';

  // Actions
  setSelectedBodyId: (id: string | null) => void;
  setPaused: (isPaused: boolean) => void;
  setSimTime: (time: number) => void;
  setTimeScale: (scale: number) => void;
  setScalePreset: (preset: ScalePreset) => void;
  setDistanceUnit: (unit: DistanceUnit) => void;
  setTrailsEnabled: (enabled: boolean) => void;
  setTrailLength: (length: number) => void;
  setFollowingId: (id: string | null) => void;
  setPerfPreset: (preset: 'auto' | 'low' | 'medium' | 'high') => void;
}

const store = createStore<AppState>()(
  subscribeWithSelector(
    immer((set) => ({
      selectedBodyId: 'sun',
      isPaused: false,
      simTime: 0,
      timeScale: 1,
      scalePreset: 'hybrid',
      distanceUnit: 'au',
      trailsEnabled: true,
      trailLength: 365,
      followingId: null,
      perfPreset: 'auto',

      setSelectedBodyId: (id) => set({ selectedBodyId: id }),
      setPaused: (isPaused) => set({ isPaused }),
      setSimTime: (time) => set({ simTime: time }),
      setTimeScale: (scale) => set({ timeScale: scale }),
      setScalePreset: (preset) => set({ scalePreset: preset }),
      setDistanceUnit: (unit) => set({ distanceUnit: unit }),
      setTrailsEnabled: (enabled) => set({ trailsEnabled: enabled }),
      setTrailLength: (length) => set({ trailLength: length }),
      setFollowingId: (id) => set({ followingId: id }),
      setPerfPreset: (preset) => set({ perfPreset: preset }),
    }))
  )
);

export default store;

export const getState = store.getState;
export const setState = store.setState;
export const subscribe = store.subscribe;

export function subscribeToSelector<T>(
  selector: (s: AppState) => T,
  cb: (next: T, prev: T | undefined) => void
) {
  let prev = selector(store.getState());
  return store.subscribe((state) => {
    const next = selector(state);
    if (next !== prev) {
      cb(next, prev);
      prev = next;
    }
  });
}
