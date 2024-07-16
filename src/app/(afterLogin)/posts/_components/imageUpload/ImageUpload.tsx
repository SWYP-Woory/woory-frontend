'use client';

import ImageDeleteIcon from '@/app/_components/icon/delete/ImageDeleteIcon';
import Picture from '@/assets/icons/picture/picture.svg';
import Image from 'next/image';
import { ChangeEvent, useRef, useState } from 'react';

export default function ImageUpload() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleDeleteClick = () => {
    setSelectedImage(null);
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
