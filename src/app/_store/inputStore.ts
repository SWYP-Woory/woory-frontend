import { create } from 'zustand';

interface InputState {
  inputText: string;
  setInputText: (text: string) => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputText: '',
  setInputText: (text) => set({ inputText: text }),
}));
