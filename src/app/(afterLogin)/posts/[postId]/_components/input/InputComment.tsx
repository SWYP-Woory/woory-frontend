'use client';

import InputChat from '@/app/_components/input/InputChat';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';

interface Props {
  postId: number;
  replyingCommentId: number | null;
  onReplyClick: (commentId: number | null) => void;
}

const MAX_LENGTH = 10;
const COMMENT_PLACEHOLDER = '댓글을 달아주세요';
const REPLY_PLACEHOLDER = '답댓글을 달아주세요';

export default function InputComment({ postId, replyingCommentId, onReplyClick }: Props) {
  const { inputComment: inputData, setInputComment: setInputData } = useInputCommentStore();

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputData(input);
    }
  };

  return (
    <div className="flex sticky bottom-0 items-center justify-center w-full h-[6.0rem] border-bgGrey border-t bg-white">
      <InputChat
        postId={postId}
        value={inputData}
        maxLength={MAX_LENGTH}
        placeholder={replyingCommentId ? REPLY_PLACEHOLDER : COMMENT_PLACEHOLDER}
        onChange={handleChatChange}
        replyingCommentId={replyingCommentId}
        onReplyClick={onReplyClick}
      />
    </div>
  );
}
