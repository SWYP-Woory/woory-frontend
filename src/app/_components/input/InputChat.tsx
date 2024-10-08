'use client';

import { getData, postData, putData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { useCommentListStore } from '@/app/_store/commentListStore';
import { useCommentStore } from '@/app/_store/commentStore';
import { useInputCommentStore } from '@/app/_store/inputCommentStore';
import { useReplyCommentStore } from '@/app/_store/replyCommentStore';
import SendIcon from '@/assets/icons/send/send.svg';
import { CommentListType } from '@/type';
import { useEffect, useRef, useState } from 'react';

interface Props {
  postId: number;
  value: string;
  maxLength: number;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputChat({ postId, value, maxLength, placeholder, onChange }: Props) {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const { resetInputComment } = useInputCommentStore();
  const { setComments } = useCommentListStore();
  const { parentCommentId, resetReply } = useReplyCommentStore();
  const inputRef = useRef<HTMLInputElement>(null);
  const { commentId, commentMethodType, resetComment } = useCommentStore();

  const isEntered = value.length !== 0;

  const handleCreateComment = async () => {
    if (!parentCommentId) {
      const body = {
        contentId: postId,
        commentText: value,
      };
      await postData({ path: `${apiRoutes.createComment}`, body });
    } else {
      const body = {
        contentId: postId,
        parentCommentId,
        commentText: value,
      };
      await postData({ path: `${apiRoutes.createCommentReply}`, body });
      resetReply();
    }
    resetReply();
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
    resetInputComment();
  };

  const handlePutComment = async () => {
    const body = {
      newText: value,
    };
    await putData({ path: `${apiRoutes.putComment}/${commentId}`, body });
    const { data }: { data: CommentListType[] } = await getData({ path: `${apiRoutes.getComments}/${postId}` });
    setComments(data);
  };

  const handleClick = () => {
    if (commentMethodType === 'PUT') {
      handlePutComment();
      resetComment();
    } else {
      handleCreateComment();
    }
    resetInputComment();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
      handleClick();
    }
  };

  useEffect(() => {
    if (parentCommentId !== null && inputRef.current) {
      inputRef.current.focus();
    }
  }, [parentCommentId]);

  return (
    <div className="flex justify-between items-center pl-[1.6rem] pr-[0.8rem] w-[34.3rem] h-[4.4rem] border border-solid bg-bgGrey border-lightGrey rounded-[1rem] overflow-hidden">
      <input
        ref={inputRef}
        className="w-[22.4rem] h-[2.6rem] font-body bg-bgGrey placeholder-textDisabled focus:outline-none"
        type="text"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={handleKeyDown}
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
          <button type="button" aria-label="Send Button" onClick={handleClick} className="send-button">
            <SendIcon fill={isEntered ? '#1EA49A' : '#DDDDDD'} />
          </button>
        )}
      </div>
    </div>
  );
}
