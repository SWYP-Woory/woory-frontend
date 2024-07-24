'use client';

import { postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useImageUploadStore } from '@/app/_store/imageUploadStore';
import { useInputStore } from '@/app/_store/inputStore';
import { CreatePostType } from '@/type';
import { useRouter } from 'next/navigation';

interface Props {
  day: string;
  topicId: number;
}

export default function ControlHeader({ day, topicId }: Props) {
  const { imageReset } = useImageUploadStore();
  const { selectedImage } = useImageUpload();
  const { inputText, inputReset } = useInputStore();
  const router = useRouter();
  const isValid = inputText.length > 0 || selectedImage;

  const handleCancel = () => {
    imageReset();
    inputReset();
    router.back();
  };

  const handleComplete = () => {
    const createPost = async () => {
      const groupId = getCookies('groupId');
      try {
        const data: CreatePostType = { groupId, topicId, contentText: inputText };
        if (selectedImage) {
          data.images = selectedImage;
        }
        await postData({ path: `${apiRoutes.createPost}`, body: data });
      } catch (error) {
        console.error(error);
      } finally {
        imageReset();
        inputReset();
        router.push(`/home/${groupId}/daily/${day}`);
      }
    };
    createPost();
  };

  return (
    <header className="header justify-between px-[1.6rem]">
      <button type="button" className="font-body" onClick={handleCancel}>
        취소
      </button>
      <button
        type="button"
        disabled={!isValid}
        className={`font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}
        onClick={handleComplete}
      >
        완료
      </button>
    </header>
  );
}
