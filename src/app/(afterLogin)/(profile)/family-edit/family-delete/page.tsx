'use client';

import Modal from '@/app/_components/common/modal/Modal';
import { FAMILY_DELETE_CONTENT } from '@/app/_constants/modal';
import { useRouter } from 'next/navigation';

export default function FamilyDelete() {
  const router = useRouter();
  const handleCancelClick = () => {
    router.back();
  };

  const handleDeletionConfirm = () => {};
  return (
    <div className="absolute">
      <Modal
        title="가족 삭제하기"
        content={FAMILY_DELETE_CONTENT}
        buttonText="가족 삭제"
        onCancel={handleCancelClick}
        onExecute={handleDeletionConfirm}
      />
    </div>
  );
}
