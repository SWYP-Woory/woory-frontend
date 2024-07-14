'use client';

import EditDeleteButton from '@/app/_components/common//button/EditDeleteButton';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import Modal from '@/app/_components/popup/Modal';
import { COMMENT_CONTENT, POST_CONTENT } from '@/app/constants/modal';
import { useState } from 'react';

interface Props {
  name: string;
  isEdit: boolean;
  targetType: 'post' | 'comment';
}

export default function DailyUserTitle({ name, isEdit, targetType }: Props) {
  const content = targetType === 'post' ? POST_CONTENT : COMMENT_CONTENT;
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleKebabClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleEditClick = () => {};

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="flex flex-grow justify-between items-center relative">
      <div className="font-bodyBold">{name}</div>
      {isEdit && <KebabMenuIcon isActive={isActive} onClick={handleKebabClick} />}
      {isActive && (
        <div className="absolute top-0 right-12 z-10">
          <EditDeleteButton handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
        </div>
      )}
      {isModalOpen && (
        <div className="absolute">
          <Modal title="삭제하기" content={content} buttonText="삭제" />
        </div>
      )}
    </div>
  );
}
