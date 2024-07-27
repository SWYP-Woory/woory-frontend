import { create } from 'zustand';

interface ReplyCommentState {
  parentCommentId: number;
  setParentCommentId: (parentCommentId: number) => void;
  resetReply: () => void;
}

export const useReplyCommentStore = create<ReplyCommentState>((set) => ({
  parentCommentId: -1,
  setParentCommentId: (parentCommentId: number) => set({ parentCommentId }),
  resetReply: () => set({ parentCommentId: -1 }),
}));
