'use client';

import ImageCloseIcon from '@/assets/icons/close/imageClose.svg';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ImageModal() {
  const params = useSearchParams();
  const postUrl = params.get('postUrl');

  const router = useRouter();
  const handleClose = () => {
    router.back();
  };
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div className="flex relative min-h-screen justify-center items-center bg-black">
        <button type="button" aria-label="image close" className="absolute top-[1.4rem] left-16" onClick={handleClose}>
          <ImageCloseIcon />
        </button>
        <div className="relative w-full">
          <Image
            src={postUrl!}
            alt="post"
            layout="intrinsic"
            width={343}
            height={500}
            className="object-contain w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
