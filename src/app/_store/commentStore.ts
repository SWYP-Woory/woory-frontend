import { CommentListType } from '@/type';
import { create } from 'zustand';

interface CommentListState {
  comments: CommentListType[];
  setComments: (comments: CommentListType[]) => void;
  reset: () => void;
}

export const useCommentListStore = create<CommentListState>((set) => ({
  comments: [],
  setComments: (comments: CommentListType[]) => set({ comments }),
  reset: () => set({ comments: [] }),
}));
