import { create } from 'zustand';

interface KebabMenuState {
  postActiveId: number | null;
  setPostActiveId: (postActiveId: number | null) => void;
  commentActiveId: number | null;
  setCommentActiveId: (commentActiveId: number | null) => void;
  resetActiveId: () => void;
}

export const useKebabMenuStore = create<KebabMenuState>((set) => ({
  postActiveId: null,
  setPostActiveId: (postActiveId: number | null) => set({ postActiveId }),
  commentActiveId: null,
  setCommentActiveId: (commentActiveId: number | null) => set({ commentActiveId }),
  resetActiveId: () => set({ postActiveId: null, commentActiveId: null }),
}));
