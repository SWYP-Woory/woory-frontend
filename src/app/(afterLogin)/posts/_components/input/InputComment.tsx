'use client';

import InputChat from '@/app/_components/input/InputChat';
import { useState } from 'react';

const MAX_LENGTH = 10;
const PLACEHOLDER = '아들님의 이야기를 적어주세요';

export default function InputComment() {
  const [inputData, setInputData] = useState<string>('');

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputData(input);
    }
  };
  return (
    <div className="flex sticky bottom-0 items-center justify-center w-full h-[6.0rem] border-bgGrey border-t bg-white">
      <InputChat
        value={inputData}
        maxLength={MAX_LENGTH}
        placeholder={PLACEHOLDER}
        onChange={(e) => handleChatChange(e)}
      />
    </div>
  );
}
