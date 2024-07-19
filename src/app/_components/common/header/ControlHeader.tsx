'use client';

import { useInputStore } from '@/app/_store/inputStore';
import { useRouter } from 'next/navigation';

export default function ControlHeader() {
  const { inputText } = useInputStore();
  const router = useRouter();
  const isValid = inputText.length > 0;

  const handleCancel = () => {
    router.back();
  };

  return (
    <header className="header justify-between px-[1.6rem]">
      <button type="button" className="font-body" onClick={handleCancel}>
        취소
      </button>
      <button type="button" disabled={!isValid} className={`font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}>
        완료
      </button>
    </header>
  );
}
