'use client';

import { useState } from 'react';

interface Props {
  value: string;
  hasLimit?: boolean;
  maxLength: number;
  placeholder: string;
}

export default function InputText({ value, hasLimit = false, maxLength, placeholder }: Props) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setInputValue(input);
    }
  };

  return (
    <div className="flex justify-end items-center w-[34.3rem] h-[4.8rem] relative">
      <input
        className="border border-solid border-midGrey rounded-[1rem] py-[1.1rem] pl-[1.6rem] pr-[5.8rem] 
        w-full h-full font-body placeholder-textDisabled focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        maxLength={maxLength}
        onChange={handleChange}
      />
      {hasLimit && (
        <span className="absolute right-[0.8rem] font-caption text-midGrey">
          ({inputValue.length}/{maxLength})
        </span>
      )}
    </div>
  );
}
