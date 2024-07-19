import { create } from 'zustand';

export interface InputState {
  inputText: string;
  setInputText: (text: string) => void;
  inputFamilyText: string;
  setInputFamilyText: (text: string) => void;
  inputProfileText: string;
  setInputProfileText: (text: string) => void;
  inputFamilyEditText: string;
  setInputFamilyEditText: (text: string) => void;
  reset: () => void;
}

export const useInputStore = create<InputState>((set) => ({
  inputText: '',
  setInputText: (text) => set({ inputText: text }),
  inputFamilyText: '',
  setInputFamilyText: (text) => set({ inputFamilyText: text }),
  inputProfileText: '',
  setInputProfileText: (text) => set({ inputProfileText: text }),
  inputFamilyEditText: '',
  setInputFamilyEditText: (text) => set({ inputFamilyEditText: text }),
  reset: () => set({ inputText: '' }),
}));
