import { create } from 'zustand';

interface ToastState {
  isToastFloating: boolean;
  setIsToastFloating: (isToastFloating: boolean) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isToastFloating: false,
  setIsToastFloating: (isToastFloating: boolean) => set((state) => ({ ...state, isToastFloating })),
}));
