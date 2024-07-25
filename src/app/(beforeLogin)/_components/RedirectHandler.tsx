'use client';

import { getCookies } from '@/app/_store/cookie/cookies';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectHandler() {
  const router = useRouter();
  const accessToken = getCookies('AccessToken');
  const groupId = getCookies('groupId')?.value;

  useEffect(() => {
    if (accessToken) {
      if (groupId) {
        router.replace('/home/daily');
      } else {
        router.replace('/family-select');
      }
    }
  }, [accessToken, groupId, router]);

  return null;
}
