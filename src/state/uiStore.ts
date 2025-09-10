import { createStore } from 'zustand/vanilla';
import { subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import type { DistanceUnit } from '../utils/units';

export interface UIState {
  distanceUnit: DistanceUnit;
  isLeftSidebarCollapsed: boolean;
  isRightSidebarCollapsed: boolean;
  setDistanceUnit: (unit: DistanceUnit) => void;
  toggleLeftSidebar: () => void;
  toggleRightSidebar: () => void;
}

const uiStore = createStore<UIState>()(
  subscribeWithSelector(
    immer((set) => ({
      distanceUnit: 'au' as DistanceUnit,
      isLeftSidebarCollapsed: false,
      isRightSidebarCollapsed: false,
      setDistanceUnit: (unit) => set({ distanceUnit: unit }),
      toggleLeftSidebar: () =>
        set((state) => {
          state.isLeftSidebarCollapsed = !state.isLeftSidebarCollapsed;
        }),
      toggleRightSidebar: () =>
        set((state) => {
          state.isRightSidebarCollapsed = !state.isRightSidebarCollapsed;
        }),
    }))
  )
);

export default uiStore;
export const getUIState = uiStore.getState;
export const setUIState = uiStore.setState;
export const subscribeUI = uiStore.subscribe;
