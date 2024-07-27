import { create } from 'zustand';

interface ImageDeletedState {
  isDeleted: boolean;
  setIsDeleted: (isDeleted: boolean) => void;
}

export const useImageDeletedStore = create<ImageDeletedState>((set) => ({
  isDeleted: false,
  setIsDeleted: (isDeleted: boolean) => set((state) => ({ ...state, isDeleted })),
}));
