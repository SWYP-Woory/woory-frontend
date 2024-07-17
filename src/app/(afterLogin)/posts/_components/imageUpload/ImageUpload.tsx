'use client';

import ImageDeleteIcon from '@/app/_components/icon/delete/ImageDeleteIcon';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import Picture from '@/assets/icons/picture/picture.svg';
import Image from 'next/image';

export default function ImageUpload() {
  const { selectedImage, handleUploadClick, fileInputRef, handleImageChange, handleDeleteClick } = useImageUpload();

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
        <button type="button" aria-label="delete" className="absolute top-8 right-[0.8rem]" onClick={handleDeleteClick}>
          <ImageDeleteIcon />
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      aria-label="ImageUploadButton"
      className="flex flex-col gap-8 items-center justify-center size-[10.0rem] rounded-[2.0rem] bg-bgGrey mt-56"
      onClick={handleUploadClick}
    >
      <Picture width="40" height="40" fill="#888888" />
      <div className="font-body text-textDisabled">사진 추가</div>
      <input type="file" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
    </button>
  );
}
