'use client';

import CommentView from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentView';
import InputComment from '@/app/(afterLogin)/posts/[postId]/_components/input/InputComment';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { useCommentStore } from '@/app/_store/CommentStore';
import { CommentListType } from '@/type';
import { useCallback, useEffect } from 'react';

interface Props {
  postId: number;
}

export default function CommentMain({ postId }: Props) {
  const { comments, setComments } = useCommentStore();

  const handleLoad = useCallback(async () => {
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
  }, [postId]);

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <div className="flex flex-col flex-grow">
        <CommentView comments={comments} />
      </div>
      <InputComment postId={postId} />
    </>
  );
}
