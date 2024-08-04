'use client';

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

  const handleDeletionConfirm = () => {};

  return (
    <div className="absolute">
      <Modal
        isOpen
        title="삭제하기"
        content={content}
        buttonText="탈퇴"
        onCancel={handleCancelClick}
        onExecute={handleDeletionConfirm}
      />
    </div>
  );
}
