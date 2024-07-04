'use client';

import { useState } from 'react';

interface Props {
  value: string;
  hasLimit?: boolean;
  maxLength: number;
  placeholder: string;
}

/**
 * InputText component
 * @param value: input의 기본값
 * @param hasLimit: 글자 수 제한 표시 여부
 * @param maxLength: 최대 글자 수
 * @param placeholder
 */

export default function InputText({ value = '', hasLimit = false, maxLength, placeholder }: Props) {
  const [inputValue, setInputValue] = useState<string>(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (input.length <= maxLength) {
      setInputValue(input);
    }
  };

  return (
    <div className="flex justify-end items-center w-[343px] h-[48px] relative">
      <input
        className="border border-solid border-midGrey rounded-[10px] py-[11px] pl-[16px] pr-[58px] 
        w-full h-full font-body placeholder-textDisabled focus:outline-none"
        type="text"
        placeholder={placeholder}
        value={inputValue}
        maxLength={maxLength}
        onChange={handleChange}
      />
      {hasLimit && (
        <span className="absolute right-[8px] font-caption text-midGrey">
          ({inputValue.length}/{maxLength})
        </span>
      )}
    </div>
  );
}
