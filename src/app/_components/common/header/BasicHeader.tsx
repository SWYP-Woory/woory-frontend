'use client';

import { postData, putData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import { useImageUpload } from '@/app/_hooks/useImageUpload';
import { deleteCookies, getCookies, setCookies } from '@/app/_store/cookie/cookies';
import { useImageUploadStore } from '@/app/_store/imageUploadStore';
import { useInputStore } from '@/app/_store/inputStore';
import { ProfileSaveType } from '@/type';
import { getCalendarTime } from '@/utils/getTime';
import { usePathname, useRouter } from 'next/navigation';

interface Props {
  title: string;
  hasRightButton?: boolean;
}

const decideInputText = (
  pathName: string,
  inputFamilyText: string,
  inputProfileText: string,
  inputFamilyEditText: string,
) => {
  if (pathName === '/profile') {
    return inputProfileText;
  }
  if (pathName === '/family') {
    return inputFamilyText;
  }
  if (pathName === '/family-edit') {
    return inputFamilyEditText;
  }
  return '';
};

const decideApiRoute = (pathName: string, groupId?: number) => {
  if (pathName === '/profile') {
    return { method: 'PUT', path: apiRoutes.profileUpdate };
  }
  if (pathName === '/family') {
    return { method: 'POST', path: apiRoutes.createFamily };
  }
  if (pathName === '/family-edit') {
    return { method: 'PUT', path: `${apiRoutes.UpdateFamily}/${groupId}` };
  }
  return { method: '', path: '' };
};

export default function BasicHeader({ title, hasRightButton }: Props) {
  const pathName = usePathname();
  const router = useRouter();
  const { selectedImage } = useImageUpload();
  const { imageReset } = useImageUploadStore();
  const { inputReset, inputFamilyText, inputProfileText, inputFamilyEditText } = useInputStore();
  const inputText = decideInputText(pathName, inputFamilyText, inputProfileText, inputFamilyEditText);
  const isValid = inputText.length > 0;

  const handleBackClick = () => {
    inputReset();
    imageReset();
    router.back();
  };

  const handleSaveData = async () => {
    try {
      const currentGroupId = getCookies('groupId');
      const { method, path } = decideApiRoute(pathName, currentGroupId);
      if (!method || !path) return;

      const data: ProfileSaveType = {
        name: inputText,
      };

      if (selectedImage && !selectedImage.includes('woory-bucket')) {
        data.images = selectedImage;
      }

      let response;
      if (method === 'POST') {
        response = await postData({ path, body: data });
        const date = getCalendarTime(new Date());
        const groupId = response?.groupId;
        if (currentGroupId) {
          deleteCookies('groupId');
        }
        setCookies('groupId', groupId, { path: '/' });
        router.push(`/home/${groupId}/daily/${date}`);
        imageReset();
        inputReset();
      } else if (method === 'PUT') {
        await putData({ path, body: data });
        router.push('/mypage');
        imageReset();
        inputReset();
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <header className="header">
      <button className="absolute left-[1.6rem]" type="button" aria-label="back" onClick={handleBackClick}>
        <LeftArrowIcon />
      </button>
      <div className="font-title text-18">{title}</div>
      {hasRightButton && (
        <button
          type="button"
          disabled={!isValid}
          className={`absolute right-[1.6rem] font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}
          onClick={handleSaveData}
        >
          저장
        </button>
      )}
    </header>
  );
}
