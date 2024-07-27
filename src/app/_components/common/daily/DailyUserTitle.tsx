'use client';

import { deleteData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import EditDeleteButton from '@/app/_components/common//button/EditDeleteButton';
import Modal from '@/app/_components/common/modal/Modal';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import { useCommentStore } from '@/app/_store/commentStore';
import { getCookies } from '@/app/_store/cookie/cookies';
import { usePostDeletedStore } from '@/app/_store/isPostDeletedStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  name: string;
  isEdit: boolean;
  targetType: 'post' | 'comment' | 'reply';
  commentText?: string;
  postId?: number;
  regDate?: string;
  isLastReply?: boolean;
}

export default function DailyUserTitle({ name, isEdit, targetType, commentText, postId, regDate, isLastReply }: Props) {
  const content = MODAL_TYPE_MAP[targetType];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isDeleted, setIsDeleted } = usePostDeletedStore();
  const { setCommentText, setCommentMethodType } = useCommentStore();

  const router = useRouter();
  const groupId = getCookies('groupId');

  const deletePost = async () => {
    try {
      await deleteData({ path: `${apiRoutes.deletePost}/${groupId}/${postId}` });
      setIsActive(false);
      setIsModalOpen(false);
      setIsDeleted(!isDeleted);
    } catch (error) {
      console.error(error);
    } finally {
      router.replace(`/home/daily?day=${regDate}`);
    }
  };

  const handleKebabClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleEditClick = () => {
    if (content === 'post') {
      router.push(`/posts?postId=${postId}`);
    }
    setCommentText(commentText || '');
    setCommentMethodType('PUT');
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
    setIsActive((prev) => !prev);
  };

  const handleDeleteConfirm = () => {
    if (targetType === 'post') deletePost();
  };

  return (
    <div className="flex flex-grow justify-between items-center relative">
      <div className="font-bodyBold">{name}</div>
      {isEdit && (
        <div className="pr-[1rem]">
          <KebabMenuIcon isActive={isActive} onClick={handleKebabClick} />
        </div>
      )}
      {isActive && (
        <div className={`absolute ${isLastReply ? 'bottom-0' : 'top-0'} right-24 z-10`}>
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
