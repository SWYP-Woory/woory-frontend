'use client';

import { deleteData, getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import EditDeleteButton from '@/app/_components/common/button/EditDeleteButton';
import Modal from '@/app/_components/common/modal/Modal';
import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';
import { MODAL_TYPE_MAP } from '@/app/_constants/modal';
import { useCommentListStore } from '@/app/_store/commentListStore';
import { useCommentStore } from '@/app/_store/commentStore';
import { getCookies } from '@/app/_store/cookie/cookies';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';
import { usePostDeletedStore } from '@/app/_store/isPostDeletedStore';
import { useKebabMenuStore } from '@/app/_store/kebabStore';
import { CommentListType, DailyPostTitleType } from '@/type';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface Props {
  name: string;
  isEdit: boolean;
  targetType: DailyPostTitleType;
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
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isDeleted, setIsDeleted } = usePostDeletedStore();
  const { setInputComment } = useInputCommentStore();
  const { setCommentId, setCommentMethod } = useCommentStore();
  const { setComments } = useCommentListStore();
  const { postActiveId, setPostActiveId, commentActiveId, setCommentActiveId, resetActiveId } = useKebabMenuStore();

  const router = useRouter();
  const groupId = getCookies('groupId');

  const deletePost = async () => {
    try {
      await deleteData({ path: `${apiRoutes.deletePost}/${groupId}/${postId}` });
      resetActiveId();
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
    resetActiveId();
    setIsModalOpen(false);
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
  };

  const handleKebabClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (targetType === 'post') {
      if (postActiveId === postId) {
        setTimeout(() => resetActiveId(), 300);
      } else {
        setPostActiveId(postId!);
        setCommentActiveId(null);
      }
    }
    if (targetType === 'comment' || targetType === 'reply') {
      if (commentActiveId === commentId) {
        setTimeout(() => resetActiveId(), 300);
      } else {
        setCommentActiveId(commentId!);
        setPostActiveId(null);
      }
    }
  };

  const isOpenEditDeleteButton = () => {
    if (targetType === 'post') {
      return postActiveId === postId;
    }
    return commentActiveId === commentId;
  };

  const handleEditClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (targetType === 'post') {
      router.push(`/posts?postId=${postId}`);
    }
    resetActiveId();
    setCommentMethod('PUT');
    setCommentId(commentId || -1);
    setInputComment(commentText || '');
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsModalOpen(false);
    resetActiveId();
  };

  const handleDeleteConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (targetType === 'post') {
      deletePost();
    }
    if (targetType === 'comment' || targetType === 'reply') {
      deleteComment();
    }
  };

  return (
    <div className="flex flex-grow justify-between items-center relative">
      <div className="font-bodyBold">{name}</div>
      {isEdit && <KebabMenuIcon isActive={isOpenEditDeleteButton()} onClick={handleKebabClick} />}
      {isOpenEditDeleteButton() && (
        <div
          className={`absolute ${isLastReply ? 'bottom-0' : 'top-0'} right-24 z-20 ${isOpenEditDeleteButton() ? 'edit-delete-button-fade-in' : 'edit-delete-button-fade-out'}`}
        >
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
