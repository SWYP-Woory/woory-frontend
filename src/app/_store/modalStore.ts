import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  setIsModalOpen: (isModalOpen: boolean) => set((state) => ({ ...state, isModalOpen })),
}));
