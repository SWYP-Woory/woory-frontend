'use client';

import { deleteData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Modal from '@/app/_components/common/modal/Modal';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import { deleteCookies } from '@/app/_store/cookie/cookies';
import { logout } from '@/app/_store/cookie/session';
import { useRouter, useSearchParams } from 'next/navigation';

export default function AccountDeletionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const targetType = searchParams.get('targetType') || 'member';

  const content = MODAL_TYPE_MAP[targetType];

  const handleCancelClick = () => {
    router.back();
  };

  const handleDeletionConfirm = async () => {
    try {
      await deleteData({ path: apiRoutes.UserDeletion });
      deleteCookies('groupId');
      await logout();
      router.replace('/');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="absolute">
      <Modal
        title="삭제하기"
        content={content}
        buttonText="탈퇴"
        onCancel={handleCancelClick}
        onExecute={handleDeletionConfirm}
      />
    </div>
  );
}
