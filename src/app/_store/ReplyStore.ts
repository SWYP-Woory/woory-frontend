import { create } from 'zustand';

interface ReplyState {
  parentCommentId: number;
  setParentCommentId: (parentCommentId: number) => void;
  resetReply: () => void;
}

export const useIsReplyStore = create<ReplyState>((set) => ({
  parentCommentId: -1,
  setParentCommentId: (parentCommentId: number) => set({ parentCommentId }),
  resetReply: () => set({ parentCommentId: -1 }),
}));
