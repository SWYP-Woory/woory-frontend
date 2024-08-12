'use client';

import InputChat from '@/app/_components/input/InputChat';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';
import { useReplyCommentStore } from '@/app/_store/replyCommentStore';

interface Props {
  postId: number;
}

const MAX_LENGTH = 10;
const COMMENT_PLACEHOLDER = '댓글을 달아주세요';
const REPLY_PLACEHOLDER = '답댓글을 달아주세요';

export default function InputComment({ postId }: Props) {
  const { inputComment: inputData, setInputComment: setInputData } = useInputCommentStore();
  const { parentCommentId } = useReplyCommentStore();

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputData(input);
    }
  };

  return (
    <div className="flex sticky z-10 bottom-0 items-center justify-center w-full h-[6.0rem] border-bgGrey border-t bg-white">
      <InputChat
        postId={postId}
        value={inputData}
        maxLength={MAX_LENGTH}
        placeholder={parentCommentId ? REPLY_PLACEHOLDER : COMMENT_PLACEHOLDER}
        onChange={handleChatChange}
      />
    </div>
  );
}
