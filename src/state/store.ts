import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { DistanceUnit } from '../utils/units';

/**
 * Defines the available presets for scaling the distances and sizes of celestial bodies.
 * - `realistic`: Distances and sizes are scaled linearly.
 * - `educational`: Sizes are exaggerated and distances are compressed for better visibility.
 * - `hybrid`: A mix of realistic and educational, using logarithmic scaling for distances.
 */
export type ScalePreset = 'realistic' | 'educational' | 'hybrid';

/**
 * The main application state interface, managed by Zustand.
 * It includes all the global state and the actions to modify it.
 */
export interface AppState {
  /** The unique ID of the currently selected celestial body. `null` if none is selected. */
  selectedBodyId: string | null;
  /** `true` if the simulation is paused, `false` otherwise. */
  isPaused: boolean;
  /** The current simulation time, measured in days from the epoch. */
  simTime: number;
  /** The multiplier for the simulation speed. 1.0 is real-time. */
  timeScale: number;

  // View options
  /** The active scaling preset for distances and sizes. */
  scalePreset: ScalePreset;
  /** The unit used for displaying distances in the UI. */
  distanceUnit: DistanceUnit;

  // Trail options
  /** `true` if orbital trails are visible, `false` otherwise. */
  trailsEnabled: boolean;
  /** The length of the orbital trails, measured in simulation days. */
  trailLength: number; // in days

  // Camera options
  /** The ID of the celestial body the camera is currently following. `null` if not following. */
  followingId: string | null;

  // Performance
  /** The selected performance preset, which affects quality settings like shadows and resolution. */
  perfPreset: 'auto' | 'low' | 'medium' | 'high';

  // Actions
  /** Sets the currently selected celestial body. */
  setSelectedBodyId: (id: string | null) => void;
  /** Pauses or resumes the simulation. */
  setPaused: (isPaused: boolean) => void;
  /** Sets the simulation time to a specific value. */
  setSimTime: (time: number) => void;
  /** Sets the simulation speed multiplier. */
  setTimeScale: (scale: number) => void;
  /** Sets the active scaling preset. */
  setScalePreset: (preset: ScalePreset) => void;
  /** Sets the unit for displaying distances. */
  setDistanceUnit: (unit: DistanceUnit) => void;
  /** Toggles the visibility of orbital trails. */
  setTrailsEnabled: (enabled: boolean) => void;
  /** Sets the length of the orbital trails. */
  setTrailLength: (length: number) => void;
  /** Sets the celestial body for the camera to follow. */
  setFollowingId: (id: string | null) => void;
  /** Sets the performance preset. */
  setPerfPreset: (preset: 'auto' | 'low' | 'medium' | 'high') => void;
}

/**
 * The global Zustand store instance for the application.
 * It uses `immer` for immutable state updates and `subscribeWithSelector`
 * to enable more granular subscriptions to state changes.
 */
const store = createStore<AppState>()(
  subscribeWithSelector(
    immer((set) => ({
      // Initial State
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

      // Actions
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

/** A direct reference to the `getState` method of the Zustand store. */
export const getState = store.getState;
/** A direct reference to the `setState` method of the Zustand store. */
export const setState = store.setState;
/** A direct reference to the `subscribe` method of the Zustand store. */
export const subscribe = store.subscribe;

/**
 * A utility function to subscribe to changes of a specific, selected part of the state.
 * This helps to avoid unnecessary re-renders in components that only care about a
 * small piece of the overall state.
 * @param selector A function that selects a value from the `AppState`.
 * @param cb The callback function to execute when the selected value changes.
 * @returns An unsubscribe function.
 */
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
