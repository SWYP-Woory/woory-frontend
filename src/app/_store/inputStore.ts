import { create } from 'zustand';

interface InputState {
  inputText: string;
  setInputText: (text: string) => void;
  inputFamilyText: string;
  setInputFamilyText: (text: string) => void;
  inputProfileText: string;
  setInputProfileText: (text: string) => void;
  reset: () => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputText: '',
  setInputText: (text) => set({ inputText: text }),
  inputFamilyText: '',
  setInputFamilyText: (text) => set({ inputFamilyText: text }),
  inputProfileText: '',
  setInputProfileText: (text) => set({ inputProfileText: text }),
  reset: () => set({ inputText: '' }),
}));
