'use client';

import Checkbox from '@/app/_components/checkbox/Checkbox';

export default function Terms() {
  return (
    <div className="flex items-start gap-8 w-[34rem]">
      <div className="pt-[0.5rem]">
        <Checkbox />
      </div>
      <span className="w-[29.9rem] h-[5.2rem] text-18 font-500 text-midGrey">
        우리 <span className="underline underline-offset-2">이용약관,</span>{' '}
        <span className="underline underline-offset-2">개인정보 처리방침</span>에 동의합니다.
      </span>
    </div>
  );
}
