'use client';

import SocialLoginButton from '@/app/(beforeLogin)/_components/SocialLoginButton';
import { useState } from 'react';

export default function SocialLogin() {
  const [isActive] = useState(false);

  return (
    <>
      <SocialLoginButton socialDomain="kakao" isActive={isActive} />
      <SocialLoginButton socialDomain="naver" isActive={isActive} />
    </>
  );
}
