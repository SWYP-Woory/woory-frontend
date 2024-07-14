import Comment from '@/app/posts/_components/comment/Comment';
import { CommentListType } from '@/type';

interface Props {
  data: CommentListType[];
}

export default function CommentView({ data }: Props) {
  return data.map((commentList) => {
    const { profile, comment, replies } = commentList;
    return (
      <div className="flex flex-col items-end gap-24 border-bgGrey border-b py-16 pl-16 pr-[2.6rem]">
        <Comment profile={profile} comment={comment} hasReply />
        {replies.map((reply) => (
          <Comment profile={reply.profile} comment={reply.comment} />
        ))}
      </div>
    );
  });
}
