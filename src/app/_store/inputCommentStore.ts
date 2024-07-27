import { create } from 'zustand';

interface InputCommentState {
  inputComment: string;
  setInputComment: (inputComment: string) => void;
}

export const useInputCommentStore = create<InputCommentState>((set) => ({
  inputComment: '',
  setInputComment: (inputComment: string) => set({ inputComment }),
}));
