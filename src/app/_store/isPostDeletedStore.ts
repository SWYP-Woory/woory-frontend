import { create } from 'zustand';

interface PostDeletedState {
  isDeleted: boolean;
  setIsDeleted: (isDeleted: boolean) => void;
}

export const usePostDeletedStore = create<PostDeletedState>((set) => ({
  isDeleted: false,
  setIsDeleted: (isDeleted: boolean) => set((state) => ({ ...state, isDeleted })),
}));
