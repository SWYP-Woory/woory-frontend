import Comment from '@/app/(afterLogin)/posts/[postId]/_components/comment/Comment';
import { CommentListType } from '@/type';

interface Props {
  data: CommentListType[];
}

export default function CommentView({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="flex flex-col flex-grow justify-center items-center text-center w-full min-h-[20.0rem] font-body text-textDisabled">
        아직 댓글이 없어요. <br />
        가장 먼저 댓글을 남겨보세요.
      </div>
    );
  }
  return data.map((commentList, index) => {
    const { profile, comment, replies } = commentList;
    return (
      <div
        className={`flex flex-col items-end gap-24 py-16 pl-16 pr-[2.6rem] bg-white ${data.length - 1 !== index && 'border-bgGrey border-b'}`}
      >
        <Comment profile={profile} comment={comment} hasReply />
        {replies.map((reply) => (
          <Comment profile={reply.profile} comment={reply.comment} />
        ))}
      </div>
    );
  });
}
