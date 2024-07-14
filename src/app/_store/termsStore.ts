import { create } from 'zustand';

interface TermsState {
  isAgreed: boolean;
  setIsAgreed(isAgreed: boolean): void;
  reset(): void;
}

export const useTermsStore = create<TermsState>((set) => ({
  isAgreed: false,
  setIsAgreed(isAgreed) {
    set({ isAgreed });
  },

  reset() {
    set({ isAgreed: false });
  },
}));
