import { create } from 'zustand';

interface CommentState {
  commentId: number;
  setCommentId: (commentId: number) => void;
  commentMethodType: 'PUT' | null;
  setCommentMethod: (commentMethodType: 'PUT' | null) => void;
  reset: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  commentId: -1,
  setCommentId: (commentId: number) => set({ commentId }),
  commentMethodType: null,
  setCommentMethod: (commentMethodType: 'PUT' | null) => set({ commentMethodType }),
  reset: () => set({ commentId: -1, commentMethodType: null }),
}));
