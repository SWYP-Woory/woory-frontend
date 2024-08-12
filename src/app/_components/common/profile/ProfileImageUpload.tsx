'use client';

import PictureChangeButton from '@/app/_components/common/button/PictureChangeButton';
import BigProfile from '@/app/_components/common/profile/BigProfile';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { InputTextType } from '@/type';
import { useEffect } from 'react';

interface Props {
  profileImage?: string;
  inputType: InputTextType;
}

export default function ProfileImageUpload({ profileImage, inputType }: Props) {
  const { selectedImage, setSelectedImage, handleUploadClick, fileInputRef, handleImageChange } = useImageUpload();

  useEffect(() => {
    if (profileImage) setSelectedImage(profileImage);
  }, [profileImage, setSelectedImage]);

  return (
    <>
      <div className="pt-40 px-[10.8rem]">
        <BigProfile bigProfileImage={selectedImage!} inputType={inputType} />
      </div>
      <div className="pt-24 px-[10.8rem]">
        <PictureChangeButton onClick={handleUploadClick} />
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept=".jpg,.jpeg,.png"
        />
      </div>
    </>
  );
}
