'use client';

import { deleteData, getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import EditDeleteButton from '@/app/_components/common//button/EditDeleteButton';
import Modal from '@/app/_components/common/modal/Modal';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import { useCommentListStore } from '@/app/_store/commentListStore';
import { useCommentStore } from '@/app/_store/commentStore';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';
import { usePostDeletedStore } from '@/app/_store/isPostDeletedStore';
import { CommentListType } from '@/type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  name: string;
  isEdit: boolean;
  targetType: 'post' | 'comment' | 'reply';
  postId?: number;
  regDate?: string;
  commentId?: number;
  commentText?: string;
  isLastReply?: boolean;
}

export default function DailyUserTitle({
  name,
  isEdit,
  targetType,
  postId,
  regDate,
  commentId,
  commentText,
  isLastReply,
}: Props) {
  const content = MODAL_TYPE_MAP[targetType];
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isDeleted, setIsDeleted } = usePostDeletedStore();
  const { setInputComment } = useInputCommentStore();
  const { setCommentId, setCommentMethod } = useCommentStore();
  const { setComments } = useCommentListStore();

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

  const deleteComment = async () => {
    await deleteData({ path: `${apiRoutes.deleteComment}/${commentId}` });
    setIsActive(false);
    setIsActive(false);
    setIsModalOpen(false);
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
  };

  const handleKebabClick = () => {
    setIsActive((prev) => !prev);
  };

  const handleEditClick = () => {
    if (content === 'post') {
      router.push(`/posts?postId=${postId}`);
    }
    setIsActive((prev) => !prev);
    setCommentMethod('PUT');
    setCommentId(commentId || -1);
    setInputComment(commentText || '');
  };

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancelClick = () => {
    setIsModalOpen(false);
    setIsActive((prev) => !prev);
  };

  const handleDeleteConfirm = () => {
    if (targetType === 'post') {
      deletePost();
    }
    if (targetType === 'comment') {
      deleteComment();
    }
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
