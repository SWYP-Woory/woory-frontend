'use client';

import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Modal from '@/app/_components/common/modal/Modal';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
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
      await getData({ path: apiRoutes.UserDeletion });
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
