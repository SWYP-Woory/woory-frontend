import { create } from 'zustand';

interface IsPostStore {
  isPosted: boolean;
  postDate: Date;
  setIsPosted: (isPosted: boolean) => void;
  setPostDate: (postDate: Date) => void;
}

export const useIsPostStore = create<IsPostStore>((set) => ({
  isPosted: false,
  setIsPosted: (isPosted: boolean) => set((state) => ({ ...state, isPosted })),
  postDate: new Date(),
  setPostDate: (postDate: Date) => set((state) => ({ ...state, postDate })),
}));
