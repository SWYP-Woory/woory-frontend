'use client';

import InputText from '@/app/_components/input/InputText';
import { useInputStore } from '@/app/_store/inputStore';
import { InputTextType } from '@/type';
import { getInputHandlers } from '@/utils/getInputHandler';
import { useEffect } from 'react';

const MAX_LENGTH = 5;

interface Props {
  value?: string;
  type: InputTextType;
}

export default function NameInput({ value, type }: Props) {
  const state = useInputStore();
  const { currentText, setText } = getInputHandlers(type, state);

  useEffect(() => {
    if (value) setText(value);
  }, [value, setText]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setText(input);
    }
  };

  return <InputText value={currentText} hasLimit maxLength={MAX_LENGTH} placeholder="" onChange={handleTextChange} />;
}
