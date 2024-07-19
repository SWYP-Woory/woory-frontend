'use client';

import InputText from '@/app/_components/input/InputText';
import { useInputStore } from '@/app/_store/inputStore';

const MAX_LENGTH = 5;

export default function FamilyNameInput() {
  const { inputFamilyText, setInputFamilyText } = useInputStore();

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= MAX_LENGTH) {
      setInputFamilyText(input);
    }
  };

  return (
    <InputText value={inputFamilyText} hasLimit maxLength={MAX_LENGTH} placeholder="" onChange={handleTextChange} />
  );
}
