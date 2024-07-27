import { create } from 'zustand';

interface CommentState {
  commentText: string;
  setCommentText: (commentText: string) => void;
  reset: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  commentText: '',
  setCommentText: (commentText: string) => set({ commentText }),
  reset: () => set({ commentText: '' }),
}));
