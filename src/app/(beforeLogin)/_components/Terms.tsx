'use client';

import Checkbox from '@/app/_components/checkbox/Checkbox';
import { useTermsStore } from '@/app/_store/termsStore';
import Link from 'next/link';
import { useState } from 'react';

export default function Terms() {
  const [isChecked, setIsChecked] = useState(false);
  const { isAgreed, setIsAgreed } = useTermsStore();

  const handleClick = () => {
    setIsChecked((prev) => !prev);
    setIsAgreed(!isAgreed);
  };

  return (
    <div className="flex items-start gap-8 w-[34rem]">
      <div className="pt-[0.5rem]">
        <Checkbox isChecked={isChecked} onClick={handleClick} />
      </div>
      <span className="w-[29.9rem] h-[5.2rem] text-18 font-500 text-midGrey">
        우리{' '}
        <Link href="/terms-of-use" className="underline underline-offset-2">
          이용약관,
        </Link>{' '}
        <Link href="/privacy-policy" className="underline underline-offset-2">
          개인정보 처리방침
        </Link>
        에 동의합니다.
      </span>
    </div>
  );
}
