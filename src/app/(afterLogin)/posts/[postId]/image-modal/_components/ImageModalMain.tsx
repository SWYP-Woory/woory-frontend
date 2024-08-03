'use client';

import ImageCloseIcon from '@/assets/icons/close/imageClose.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ImageModalMain() {
  const params = useSearchParams();
  const postUrl = params.get('postUrl');

  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <div className="flex relative min-h-screen justify-center items-center bg-black">
      <div role="presentation" className="absolute top-[1.4rem] left-16" onClick={handleClose}>
        <ImageCloseIcon />
      </div>
      <div className="relative w-full">
        <Image
          src={postUrl!}
          alt="post"
          layout="intrinsic"
          width={343}
          height={500}
          priority
          className="object-contain w-full h-auto"
        />
      </div>
    </div>
  );
}
