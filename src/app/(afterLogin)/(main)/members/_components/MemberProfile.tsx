'use client';

import { postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import Modal from '@/app/_components/common/modal/Modal';
import Profile from '@/app/_components/common/profile/Profile';
import MemberDeleteIcon from '@/app/_components/icon/delete/MemberDeleteIcon';
import { MEMBER_DELETE_CONTENT } from '@/app/_constants/modal';
import { getCookies } from '@/app/_store/cookie/cookies';
import { MemberType } from '@/type';
import { useState } from 'react';

interface Props extends MemberType {
  canDelete?: boolean;
  fetchMembers?: () => void;
}

export default function MemberProfile({ userId, profileUrl, userName, isHouseholder, canDelete, fetchMembers }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleDeleteIcon = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
  };

  const handleMemberDelete = async () => {
    const groupId = getCookies('groupId');
    try {
      await postData({ path: `${apiRoutes.deleteMember}/${groupId}/user/${userId}` });
      if (fetchMembers) {
        fetchMembers();
      }
    } catch (error) {
      console.error(error);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-between items-center p-16 bg-white">
      <div className="flex items-center gap-8">
        <Profile profileImage={profileUrl} size="large" isHouseholder={isHouseholder} />
        <div className="font-body ">{userName}</div>
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
