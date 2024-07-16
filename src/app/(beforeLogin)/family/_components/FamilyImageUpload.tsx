'use client';

import PictureChangeButton from '@/app/_components/common/button/PictureChangeButton';
import FamilyProfile from '@/app/_components/common/profile/FamilyProfile';
import { ChangeEvent, useRef, useState } from 'react';

export default function FamilyImageUpload() {
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

  return (
    <>
      <div className="pt-40 px-[10.8rem]">
        <FamilyProfile familyProfileImage={selectedImage} />
      </div>
      <div className="pt-24 px-[10.8rem]">
        <PictureChangeButton onClick={handleUploadClick} />
        <input type="file" className="hidden" ref={fileInputRef} onChange={handleImageChange} />
      </div>
    </>
  );
}
