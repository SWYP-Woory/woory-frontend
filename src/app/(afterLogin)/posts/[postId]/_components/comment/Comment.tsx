'use client';

import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/common/profile/Profile';
import { useReplyCommentStore } from '@/app/_store/replyCommentStore';
import { CommentType } from '@/type';

interface Props extends CommentType {
  postId: number;
  hasReply?: boolean;
  isLastReply?: boolean;
}

export default function Comment({ postId, commentId, profileUrl, comment, name, edit, hasReply, isLastReply }: Props) {
  const { parentCommentId, setParentCommentId, resetReply } = useReplyCommentStore();

  const handleClick = () => {
    if (parentCommentId === commentId) {
      resetReply();
    } else {
      setParentCommentId(commentId);
    }
  };

  return (
    <div className={`${hasReply ? 'w-full' : 'w-[28.5rem]'}`}>
      <div className="flex gap-8">
        <Profile size="small" profileImage={profileUrl} />
        <div className="flex flex-col gap-8 flex-grow">
          <div>
            <DailyUserTitle
              postId={postId}
              name={name}
              isEdit={edit}
              targetType={`${hasReply ? 'comment' : 'reply'}`}
              commentId={commentId}
              commentText={comment}
              isLastReply={isLastReply}
            />
            <div className="font-body">{comment}</div>
          </div>
          {hasReply && (
            <button
              type="button"
              className={`font-caption w-fit ${parentCommentId === commentId ? 'text-primary' : 'text-midGrey'} underline`}
              onClick={handleClick}
            >
              답글달기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
