'use client';

import InputChat from '@/app/_components/input/InputChat';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';

interface Props {
  postId: number;
}

const MAX_LENGTH = 10;
const PLACEHOLDER = '당신의 이야기를 적어주세요';

export default function InputComment({ postId }: Props) {
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
        placeholder={PLACEHOLDER}
        onChange={(e) => handleChatChange(e)}
      />
    </div>
  );
}
