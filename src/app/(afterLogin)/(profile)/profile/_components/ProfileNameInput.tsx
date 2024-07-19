'use client';

import InputText from '@/app/_components/input/InputText';
import { useInputStore } from '@/app/_store/inputStore';
import { useEffect } from 'react';

const MAX_LENGTH = 5;
const NAME = '아빠';

export default function ProfileNameInput() {
  const { inputProfileText, setInputProfileText } = useInputStore();

  useEffect(() => {
    setInputProfileText(NAME);
  }, []);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputProfileText(input);
    }
  };

  return (
    <InputText value={inputProfileText} hasLimit maxLength={MAX_LENGTH} placeholder="" onChange={handleTextChange} />
  );
}
