'use client';

import PictureChangeButton from '@/app/_components/common/button/PictureChangeButton';
import FamilyProfile from '@/app/_components/common/profile/FamilyProfile';
import { useImageUpload } from '@/app/_hooks/useImageUpload';

export default function FamilyImageUpload() {
  const { selectedImage, handleUploadClick, fileInputRef, handleImageChange } = useImageUpload();

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
