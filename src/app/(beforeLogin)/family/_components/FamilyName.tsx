'use client';

import InputText from '@/app/_components/input/InputText';
import { useState } from 'react';

const MAX_LENGTH = 5;

export default function FamilyName() {
  const [inputTextValue, setInputTextValue] = useState<string>('');

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputTextValue(input);
    }
  };

  return (
    <InputText value={inputTextValue} hasLimit maxLength={MAX_LENGTH} placeholder="" onChange={handleTextChange} />
  );
}
