'use client';

import Loading from '@/app/_components/common/loading/Loading';
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
      const { accessToken } = await fetch(`${process.env.NEXT_PUBLIC_URL}/auth/${params.provider}?code=${code}`).then(
        (response) => response.json(),
      );
      await setToken(accessToken);
    } catch (e) {
      console.error(e);
    } finally {
      router.replace('/family-select');
    }
  };

  useEffect(() => {
    handleOAuth();
  }, []);

  return <Loading />;
}
