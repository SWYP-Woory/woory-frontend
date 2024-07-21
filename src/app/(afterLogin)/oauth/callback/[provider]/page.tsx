'use client';

import { getData } from '@/app/_api/api';
import { setToken } from '@/app/_store/cookie/session';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  params: {
    provider: string;
  };
}

export default function OAuth({ params }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const handleOAuth = async () => {
    try {
      const { accessToken } = await getData({ path: `/auth/${params.provider}?code=${code}` });
      await setToken(accessToken);
    } catch (e) {
      console.error(e);
    } finally {
      router.push('/');
    }
  };

  useEffect(() => {
    handleOAuth();
  }, []);

  return (
    <div>
      {params.provider}
      {searchParams.get('code')}
    </div>
  );
}
