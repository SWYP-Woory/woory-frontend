import { create } from 'zustand';

interface ImageUploadState {
  selectedImage: string | null;
  setSelectedImage: (image: string | null) => void;
  imageReset: () => void;
}

export const useImageUploadStore = create<ImageUploadState>((set) => ({
  selectedImage: null,
  setSelectedImage: (image) => set({ selectedImage: image }),
  imageReset: () => set({ selectedImage: null }),
}));
