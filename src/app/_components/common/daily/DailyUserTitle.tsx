'use client';

import EditDeleteButton from '@/app/_components/common//button/EditDeleteButton';
import Modal from '@/app/_components/common/modal/Modal';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import { useState } from 'react';

interface Props {
  name: string;
  isEdit: boolean;
  targetType: 'post' | 'comment' | 'reply';
}

export default function DailyUserTitle({ name, isEdit, targetType }: Props) {
  const content = MODAL_TYPE_MAP[targetType];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleKebabClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleEditClick = () => {};

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
    setIsActive((prev) => !prev);
  };

  const handleDeleteConfirm = () => {};

  return (
    <div className="flex flex-grow justify-between items-center relative">
      <div className="font-bodyBold">{name}</div>
      {isEdit && (
        <div className="pr-[1rem]">
          <KebabMenuIcon isActive={isActive} onClick={handleKebabClick} />
        </div>
      )}
      {isActive && (
        <div className="absolute top-0 right-12 z-10">
          <EditDeleteButton onEdit={handleEditClick} onDelete={handleDeleteClick} />
        </div>
      )}
      {isModalOpen && (
        <div className="absolute">
          <Modal
            title="삭제하기"
            content={content}
            buttonText="삭제"
            onCancel={handleCancelClick}
            onExecute={handleDeleteConfirm}
            isSmall={targetType === 'reply'}
          />
        </div>
      )}
    </div>
  );
}
