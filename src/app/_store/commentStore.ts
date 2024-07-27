import { create } from 'zustand';

interface CommentState {
  commentText: string;
  setCommentText: (commentText: string) => void;
  commentMethodType: 'PUT' | 'DELETE' | null;
  setCommentMethodType: (commentMethodType: 'PUT' | 'DELETE' | null) => void;
  reset: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  commentText: '',
  setCommentText: (commentText: string) => set({ commentText }),
  commentMethodType: null,
  setCommentMethodType: (commentMethodType) => set({ commentMethodType }),
  reset: () => set({ commentText: '', commentMethodType: null }),
}));
