'use client';

import Comment from '@/app/(afterLogin)/posts/[postId]/_components/comment/Comment';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { CommentListType } from '@/type';
import { useCallback, useEffect, useState } from 'react';

interface Props {
  postId: number;
}

export default function CommentView({ postId }: Props) {
  const [comments, setComments] = useState<CommentListType[]>([]);

  const handleLoad = useCallback(async () => {
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
  }, [postId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  if (comments.length === 0) {
    return (
      <div className="flex flex-col flex-grow justify-center items-center text-center w-full min-h-[20.0rem] font-body text-textDisabled">
        아직 댓글이 없어요. <br />
        가장 먼저 댓글을 남겨보세요.
      </div>
    );
  }
  return comments.map((commentList, index) => {
    const { commentId, profileUrl, comment, name, replies, edit } = commentList;

    return (
      <div
        className={`flex flex-col items-end gap-24 py-16 pl-16 pr-[2.6rem] bg-white ${comments.length - 1 !== index && 'border-bgGrey border-b'}`}
        key={commentId}
      >
        <Comment commentId={commentId} profileUrl={profileUrl} comment={comment} name={name} edit={edit} hasReply />
        {replies.map((reply, i) => (
          <Comment
            key={commentId}
            commentId={commentId}
            profileUrl={reply.profileUrl}
            comment={reply.comment}
            name={reply.name}
            edit={reply.edit}
            isLastReply={index === comments.length - 1 && i === replies.length - 1}
          />
        ))}
      </div>
    );
  });
}
