'use client';

import ImageDeleteIcon from '@/app/_components/icon/delete/ImageDeleteIcon';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { useImageDeletedStore } from '@/app/_store/isImageDeletedStore';
import Picture from '@/assets/icons/picture/picture.svg';
import Image from 'next/image';

export default function ImageUpload() {
  const { selectedImage, handleUploadClick, fileInputRef, handleImageChange, handleDeleteClick } = useImageUpload();
  const { setIsDeleted } = useImageDeletedStore();

  const handleImageDelete = () => {
    handleDeleteClick();
    setIsDeleted(true);
  };

  if (selectedImage) {
    return (
      <div className="relative w-full">
        <Image
          src={selectedImage}
          alt="post"
          layout="intrinsic"
          width={343}
          height={500}
          className="object-contain w-full h-auto"
        />
        <div
          role="presentation"
          aria-label="delete"
          className="absolute top-8 right-[0.8rem]"
          onClick={handleImageDelete}
        >
          <ImageDeleteIcon />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label="ImageUploadButton"
      className="flex flex-col gap-8 items-center justify-center size-[10.0rem] rounded-[2.0rem] bg-bgGrey active:bg-lightGrey hover:bg-lightGrey mt-76"
      onClick={handleUploadClick}
    >
      <Picture width="40" height="40" fill="#888888" />
      <div className="font-body text-textDisabled">사진 추가</div>
      <input type="file" className="hidden" ref={fileInputRef} onChange={handleImageChange} accept=".jpg,.jpeg,.png" />
    </button>
  );
}
