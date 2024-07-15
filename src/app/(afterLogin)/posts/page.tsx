'use client';

import DailyTopic from '@/app/_components/common/daily/DailyTopic';
import ControlHeader from '@/app/_components/common/header/ControlHeader';
import ImageUpload from '@/app/_components/imageUpload/ImageUpload';
import InputText from '@/app/_components/input/InputText';
import { useState } from 'react';

const TOPIC = '오늘 먹은 점심 자랑하기';
const PLACEHOLDER = '일상을 공유해보세요';
const MAX_LENGTH = 10;

export default function WritePostPage() {
  const [inputText, setInputText] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputText(input);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <ControlHeader isValid={inputText.length > 0} />
      <div className="flex flex-col items-center gap-24 py-24 px-16">
        <DailyTopic topic={TOPIC} />
        <InputText
          value={inputText}
          placeholder={PLACEHOLDER}
          maxLength={MAX_LENGTH}
          onChange={(e) => handleTextChange(e)}
          hasLimit
        />
        <ImageUpload />
      </div>
    </div>
  );
}
