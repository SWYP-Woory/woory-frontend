'use client';

import { postData, putData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useImageUploadStore } from '@/app/_store/imageUploadStore';
import { useInputStore } from '@/app/_store/inputStore';
import { useImageDeletedStore } from '@/app/_store/isImageDeleted';
import { CreatePostType, EditPostDataType } from '@/type';
import { useRouter } from 'next/navigation';

interface Props {
  topicId: number;
  contentId: string;
}

export default function ControlHeader({ topicId, contentId }: Props) {
  const { imageReset } = useImageUploadStore();
  const { selectedImage } = useImageUpload();
  const { inputText, inputReset } = useInputStore();
  const { isDeleted, setIsDeleted } = useImageDeletedStore();
  const router = useRouter();
  const isValid = inputText.length > 0 || selectedImage;
  const editData: EditPostDataType = { contentText: inputText };

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
        router.push(`/home/daily`);
      }
    };

    const editPost = async () => {
      const groupId = getCookies('groupId');
      try {
        if (selectedImage && !selectedImage.includes('woory-bucket')) {
          editData.images = selectedImage;
        }
        if (isDeleted) {
          editData.images = 'delete';
        }
        await putData({ path: `${apiRoutes.editPost}/${groupId}/${contentId}`, body: editData });
      } catch (error) {
        console.error(error);
      } finally {
        imageReset();
        inputReset();
        setIsDeleted(false);
        router.push(`/posts/${contentId}`);
      }
    };

    if (contentId) {
      editPost();
    } else {
      createPost();
    }
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
