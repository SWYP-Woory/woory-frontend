'use client';

import { postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import SendIcon from '@/assets/icons/send/send.svg';
import { useState } from 'react';

interface Props {
  postId: number;
  value: string;
  maxLength: number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setInputData: (input: string) => void;
}

export default function InputChat({ postId, value, maxLength, placeholder, onChange, setInputData }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const isEntered = value.length !== 0;

  const handleCreateComment = async () => {
    const body = {
      contentId: postId,
      commentText: value,
    };

    await postData({ path: `${apiRoutes.createComment}`, body });
  };

  const handleClick = () => {
    handleCreateComment();
    setInputData('');
  };

  return (
    <div className="flex justify-between items-center pl-[1.6rem] pr-[0.8rem] w-[34.3rem] h-[4.4rem] border border-solid bg-bgGrey border-lightGrey rounded-[1rem] overflow-hidden">
      <input
        className="w-[22.4rem] h-[2.6rem] font-body bg-bgGrey placeholder-textDisabled focus:outline-none"
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        maxLength={maxLength}
      />
      <div className="flex gap-8 items-center">
        <span className="font-caption text-midGrey">
          ({value.length}/{maxLength})
        </span>
        {(isFocused || isEntered) && (
          <button type="button" aria-label="Send Button" onClick={handleClick}>
            <SendIcon fill={isEntered ? '#1EA49A' : '#888888'} />
          </button>
        )}
      </div>
    </div>
  );
}
