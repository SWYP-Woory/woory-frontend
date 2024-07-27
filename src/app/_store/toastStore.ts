import { create } from 'zustand';

interface ToastState {
  isOpenToast: boolean;
  setIsOpenToast: (isOpenToast: boolean) => void;
  toastText: string;
  setToastText: (text: string) => void;
  resetToast: () => void;
}

export const useToastStore = create<ToastState>((set) => ({
  isOpenToast: false,
  setIsOpenToast: (isOpenToast: boolean) => set({ isOpenToast }),
  toastText: '',
  setToastText: (toastText: string) => set({ toastText }),
  resetToast: () => set({ isOpenToast: false, toastText: '' }),
}));
