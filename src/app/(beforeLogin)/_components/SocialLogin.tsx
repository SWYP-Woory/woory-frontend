'use client';

import { useTermsStore } from '@/app/_store/termsStore';
import dynamic from 'next/dynamic';

const SocialLoginButton = dynamic(() => import('@/app/(beforeLogin)/_components/SocialLoginButton'), {
  ssr: false,
});

export default function SocialLogin() {
  const isAgreed = useTermsStore((state) => state.isAgreed);

  return (
    <>
      <SocialLoginButton socialDomain="kakao" isActive={isAgreed} />
      <SocialLoginButton socialDomain="naver" isActive={isAgreed} />
    </>
  );
}
