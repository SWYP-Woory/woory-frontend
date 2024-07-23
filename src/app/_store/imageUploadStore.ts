import { create } from 'zustand';

interface ImageUploadState {
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  reset: () => void;
}

export const useImageUploadStore = create<ImageUploadState>((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
  reset: () => set({ selectedImage: null }),
}));
