import { create } from 'zustand';

interface InputState {
  inputText: string;
  setInputText: (text: string) => void;
  reset: () => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputText: '',
  setInputText: (text) => set({ inputText: text }),
  reset: () => set({ inputText: '' }),
}));
