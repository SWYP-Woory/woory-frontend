import { create } from 'zustand';

interface LikeState {
  isLike: boolean;
  setIsLike: (isLike: boolean) => void;
}

export const useFavoriteStore = create<LikeState>((set) => ({
  isLike: false,
  setIsLike: (isLike: boolean) => set((state) => ({ ...state, isLike })),
}));
