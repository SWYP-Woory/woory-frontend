import { useImageUploadStore } from '@/app/_store/imageUploadStore';
import { openToast } from '@/utils/Toast';
import { ChangeEvent, useRef } from 'react';

const MAX_SIZE = 5 * 1024 * 1024;

export const useImageUpload = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { selectedImage, setSelectedImage } = useImageUploadStore();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      if (file.size > MAX_SIZE) {
        openToast('imageSize');
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedImage(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    setSelectedImage(null);
  };

  return { fileInputRef, selectedImage, setSelectedImage, handleImageChange, handleUploadClick, handleDeleteClick };
};
