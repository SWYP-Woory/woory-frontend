import { DailyPostTitleType } from '@/type';
import create from 'zustand';

interface KebabMenuState {
  activeId: number | null;
  setActiveId: (id: number) => void;
  targetType: DailyPostTitleType | null;
  setTargetType: (targetType: DailyPostTitleType | null) => void;
  resetActiveId: () => void;
}

export const useKebabMenuStore = create<KebabMenuState>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
  targetType: null,
  setTargetType: (targetType: DailyPostTitleType | null) => set({ targetType }),
  resetActiveId: () => set({ activeId: null, targetType: null }),
}));
