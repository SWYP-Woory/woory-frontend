import { create } from 'zustand';

interface ReplyCommentState {
  parentCommentId: number | null;
  setParentCommentId: (parentCommentId: number | null) => void;
  resetReply: () => void;
}

export const useReplyCommentStore = create<ReplyCommentState>((set) => ({
  parentCommentId: null,
  setParentCommentId: (parentCommentId: number | null) => set({ parentCommentId }),
  resetReply: () => set({ parentCommentId: null }),
}));
