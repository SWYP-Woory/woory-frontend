'use client';

import InputText from '@/app/_components/input/InputText';
import { useInputStore } from '@/app/_store/inputStore';

const PLACEHOLDER = '일상을 공유해보세요';
const MAX_LENGTH = 10;

export default function InputDailyContent() {
  const { inputText, setInputText } = useInputStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputText(input);
    }
  };

  return (
    <InputText
      value={inputText}
      placeholder={PLACEHOLDER}
      maxLength={MAX_LENGTH}
      onChange={(e) => handleTextChange(e)}
      hasLimit
    />
  );
}
