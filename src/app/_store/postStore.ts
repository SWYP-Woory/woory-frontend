import { create } from 'zustand';

interface PostState {
  postId: number;
  setPostId: (postId: number) => void;
}

export const usePostStore = create<PostState>((set) => ({
  postId: -1,
  setPostId: (postId: number) => set((state) => ({ ...state, postId })),
}));
