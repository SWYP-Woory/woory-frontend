import { deleteData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Modal from '@/app/_components/common/modal/Modal';
import { FAMILY_DELETE_CONTENT } from '@/app/_constants/modal';
import { deleteCookies, getCookies } from '@/app/_store/cookie/cookies';
import { useImageUploadStore } from '@/app/_store/imageUploadStore';
import { useRouter } from 'next/navigation';

export default function FamilyDelete() {
  const { imageReset } = useImageUploadStore();
  const router = useRouter();

  const handleDeletionConfirm = async () => {
    try {
      const groupId = getCookies('groupId');
      await deleteData({ path: `${apiRoutes.deleteFamily}/${groupId}` });
    } catch (e) {
      console.error(e);
    }
    deleteCookies('groupId');
    imageReset();
    router.replace('/family-select');
  };

  return (
    <div className="absolute">
      <Modal
        title="가족 삭제하기"
        content={FAMILY_DELETE_CONTENT}
        buttonText="가족 삭제"
        onExecute={handleDeletionConfirm}
      />
    </div>
  );
}
