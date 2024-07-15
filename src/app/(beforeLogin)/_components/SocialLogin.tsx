'use client';

import SocialLoginButton from '@/app/(beforeLogin)/_components/SocialLoginButton';
import { useTermsStore } from '@/app/_store/termsStore';

export default function SocialLogin() {
  const isAgreed = useTermsStore((state) => state.isAgreed);

  return (
    <>
      <SocialLoginButton socialDomain="kakao" isActive={isAgreed} />
      <SocialLoginButton socialDomain="naver" isActive={isAgreed} />
    </>
  );
}
