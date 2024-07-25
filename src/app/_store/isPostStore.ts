import { create } from 'zustand';

interface IsPostStore {
  isPosted: boolean;
  setIsPosted: (isPosted: boolean) => void;
}

export const useIsPostStore = create<IsPostStore>((set) => ({
  isPosted: false,
  setIsPosted: (isPosted: boolean) => set((state) => ({ ...state, isPosted })),
}));
