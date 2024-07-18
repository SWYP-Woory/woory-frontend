import { TabType } from '@/type';
import { create } from 'zustand';

interface HomeTabState {
  tabType: TabType;
  setTabType: (tabType: TabType) => void;
  reset: () => void;
}

export const useHomeTabStore = create<HomeTabState>((set) => ({
  tabType: 'daily',
  setTabType: (tabType: TabType) => set((state) => ({ ...state, tabType })),
  reset: () => set({ tabType: 'daily' }),
}));
