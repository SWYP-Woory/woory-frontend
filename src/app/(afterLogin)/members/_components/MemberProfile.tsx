'use client';

import MemberDeleteIcon from '@/app/_components/icon/delete/MemberDeleteIcon';
import Profile from '@/app/_components/icon/profile/Profile';
import Modal from '@/app/_components/popup/Modal';
import { MEMBER_DELETE_CONTENT } from '@/app/_constants/modal';
import { MemberType } from '@/type';
import { useState } from 'react';

interface Props extends MemberType {
  canDelete?: boolean;
}

export default function MemberProfile({ profileImage, name, isHouseholder, canDelete }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDeleteIcon = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleMemberDelete = () => {};

  return (
    <div className="flex justify-between items-center p-16 bg-white">
      <div className="flex items-center gap-8">
        <Profile profileImage={profileImage} size="large" isHouseholder={isHouseholder} />
        <div className="font-body ">{name}</div>
      </div>
      {canDelete && (
        <button type="button" aria-label="delete" onClick={handleDeleteIcon}>
          <MemberDeleteIcon isClicked={isModalOpen} />
        </button>
      )}
      {isModalOpen && (
        <Modal
          title="멤버 내보내기"
          content={MEMBER_DELETE_CONTENT}
          buttonText="내보내기"
          onCancel={handleCancelClick}
          onExecute={handleMemberDelete}
        />
      )}
    </div>
  );
}
