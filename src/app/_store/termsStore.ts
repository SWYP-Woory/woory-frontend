import { create } from 'zustand';

interface TermsState {
  isAgreed: boolean;
  setIsAgreed: (isAgreed: boolean) => void;
}

export const useTermsStore = create<TermsState>((set) => ({
  isAgreed: false,
  setIsAgreed: (isAgreed: boolean) => set((state) => ({ ...state, isAgreed })),
}));
