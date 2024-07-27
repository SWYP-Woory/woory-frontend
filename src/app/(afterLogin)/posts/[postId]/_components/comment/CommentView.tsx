'use client';

import Comment from '@/app/(afterLogin)/posts/[postId]/_components/comment/Comment';
import { CommentListType } from '@/type';

interface Props {
  postId: number;
  comments: CommentListType[];
  onReplyClick: (commentId: number) => void;
  replyingCommentId: number | null;
}

export default function CommentView({ postId, comments, onReplyClick, replyingCommentId }: Props) {
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
        <Comment
          postId={postId}
          commentId={commentId}
          profileUrl={profileUrl}
          comment={comment}
          name={name}
          edit={edit}
          hasReply
          onReplyClick={onReplyClick}
          isReplying={replyingCommentId === commentId}
        />
        {replies.map((reply) => (
          <Comment
            key={commentId}
            postId={postId}
            commentId={reply.commentId}
            profileUrl={reply.profileUrl}
            comment={reply.comment}
            name={reply.name}
            edit={reply.edit}
            isLastReply={index === comments.length - 1 && reply.commentId === commentList.commentId}
            onReplyClick={onReplyClick}
            isReplying={replyingCommentId === reply.commentId}
          />
        ))}
      </div>
    );
  });
}
