import { CommentListType } from '@/type';
import { create } from 'zustand';

interface CommentState {
  comments: CommentListType[];
  setComments: (comments: CommentListType[]) => void;
  reset: () => void;
}

export const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  setComments: (comments: CommentListType[]) => set({ comments }),
  reset: () => set({ comments: [] }),
}));
