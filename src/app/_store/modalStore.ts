import { create } from 'zustand';

interface ModalState {
  isClosed: boolean;
  setIsClosed: (isClosed: boolean) => void;
  reset: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isClosed: false,
  setIsClosed: (isClosed: boolean) => set((state) => ({ ...state, isClosed })),
  reset: () => set({ isClosed: false }),
}));
