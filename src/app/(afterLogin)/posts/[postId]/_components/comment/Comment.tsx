'use client';

import DailyUserTitle from '@/app/_components/common/daily/DailyUserTitle';
import Profile from '@/app/_components/common/profile/Profile';
import { useReplyCommentStore } from '@/app/_store/replyCommentStore';
import { CommentType } from '@/type';

interface Props extends CommentType {
  hasReply?: boolean;
  isLastReply?: boolean;
}

export default function Comment({ commentId, profileUrl, comment, name, edit, hasReply, isLastReply }: Props) {
  const { parentCommentId, setParentCommentId, resetReply } = useReplyCommentStore();

  const handleClick = () => {
    if (parentCommentId === -1) {
      setParentCommentId(commentId);
    } else {
      resetReply();
    }
  };

  return (
    <div className={`${hasReply ? 'w-full' : 'w-[28.5rem]'}`}>
      <div className="flex gap-8">
        <Profile size="small" profileImage={profileUrl} />
        <div className="flex flex-col gap-8 flex-grow">
          <div>
            <DailyUserTitle
              name={name}
              isEdit={edit}
              targetType={`${hasReply ? 'comment' : 'reply'}`}
              isLastReply={isLastReply}
            />
            <div className="font-body">{comment}</div>
          </div>
          {hasReply && (
            <button type="button" className="font-caption w-fit text-midGrey underline" onClick={handleClick}>
              답글달기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
