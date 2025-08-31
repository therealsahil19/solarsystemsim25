import { create } from 'zustand';

interface AppState {
  selectedBodyId: string | null;
  setSelectedBodyId: (id: string | null) => void;
  isPaused: boolean;
  setPaused: (p: boolean) => void;
  timeScale: number;
  setTimeScale: (s: number) => void;
  perfPreset: 'auto' | 'low' | 'medium' | 'high';
  setPerfPreset: (p: AppState['perfPreset']) => void;
  followingId: string | null;
  setFollowingId: (id: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  selectedBodyId: null,
  setSelectedBodyId: (id) => set({ selectedBodyId: id }),
  isPaused: false,
  setPaused: (p) => set({ isPaused: p }),
  timeScale: 1,
  setTimeScale: (t) => set({ timeScale: t }),
  perfPreset: 'auto',
  setPerfPreset: (p) => set({ perfPreset: p }),
  followingId: null,
  setFollowingId: (id) => set({ followingId: id }),
}));
