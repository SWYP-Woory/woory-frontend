// stores/useKebabMenuStore.ts
import create from 'zustand';

interface KebabMenuState {
  activeId: number | null;
  setActiveId: (id: number) => void;
  resetActiveId: () => void;
}

export const useKebabMenuStore = create<KebabMenuState>((set) => ({
  activeId: null,
  setActiveId: (id) => set({ activeId: id }),
  resetActiveId: () => set({ activeId: null }),
}));
