'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  accessToken: string;
  groupId: string;
  inviteGroupId?: string;
}

export default function RedirectHandler({ accessToken, groupId, inviteGroupId }: Props) {
  const router = useRouter();

  useEffect(() => {
    if (accessToken) {
      if (groupId || inviteGroupId) {
        router.replace('/home/daily');
      } else {
        router.replace('/family-select');
      }
    }
  }, [accessToken, groupId, router]);

  return null;
}
