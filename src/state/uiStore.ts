import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { DistanceUnit } from '../utils/units';

export interface UIState {
  distanceUnit: DistanceUnit;
  setDistanceUnit: (unit: DistanceUnit) => void;
}

const uiStore = createStore<UIState>()(
  subscribeWithSelector(
    immer((set) => ({
      distanceUnit: 'au' as DistanceUnit,
      setDistanceUnit: (unit) => set({ distanceUnit: unit }),
    }))
  )
);

export default uiStore;
export const getUIState = uiStore.getState;
export const setUIState = uiStore.setState;
export const subscribeUI = uiStore.subscribe;
