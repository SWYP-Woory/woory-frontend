'use client';

import InputText from '@/app/_components/input/InputText';
import { useInputStore } from '@/app/_store/inputStore';

const MAX_LENGTH = 5;

export default function FamilyNameInput() {
  const { inputText, setInputText } = useInputStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputText(input);
    }
  };

  return <InputText value={inputText} hasLimit maxLength={MAX_LENGTH} placeholder="" onChange={handleTextChange} />;
}
