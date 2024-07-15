'use client';

import DailyPostView from '@/app/(afterLogin)/posts/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/_components/comment/CommentView';
import Border from '@/app/_components/common/border/Border';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import InputChat from '@/app/_components/input/InputChat';
import { useState } from 'react';

export default function PostPage() {
  const [inputData, setInputData] = useState<string>('');

  const handleChatChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputData(input);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <div>
        <BasicHeader title="게시글" />
        <DailyPostView topic={TOPIC} data={DUMMY_DATA} />
        <Border />
      </div>
      <CommentView data={DUMMY_COMMENT} />
      <div className="flex items-center justify-center w-full h-[6.0rem] border-bgGrey border-t bg-white">
        <InputChat
          value={inputData}
          maxLength={MAX_LENGTH}
          placeholder={PLACEHOLDER}
          onChange={(e) => handleChatChange(e)}
        />
      </div>
    </div>
  );
}
