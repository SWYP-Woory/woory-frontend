'use client';

import { CLIENT_KAKAO, CLIENT_NAVER } from '@/app/_constants/domain';
import { deleteCookies, setCookies } from '@/app/_store/cookie/cookies';
import kakaoImage from '@/assets/images/kakao-image.png';
import naverImage from '@/assets/images/naver-image.png';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

interface Props {
  socialDomain: 'kakao' | 'naver';
  isActive?: boolean;
}

const SOCIAL = {
  kakao: {
    image: kakaoImage,
    alt: '카카오톡 이미지',
    text: '카카오톡으로 시작',
    link: CLIENT_KAKAO,
  },
  naver: {
    image: naverImage,
    alt: '네이버 이미지',
    text: '네이버로 시작',
    link: CLIENT_NAVER,
  },
};

export default function SocialLoginButton({ socialDomain, isActive }: Props) {
  const searchParams = useSearchParams();
  const inviteGroupId = searchParams.get('inviteGroupId');

  useEffect(() => {
    if (inviteGroupId) {
      deleteCookies('inviteGroupId');
      setCookies('inviteGroupId', inviteGroupId, { path: '/' });
    }
  }, []);

  return (
    <Link href={SOCIAL[socialDomain].link}>
      <button
        type="button"
        disabled={!isActive}
        className={`${isActive ? 'border bg-white hover:bg-bgGrey active:bg-lightGrey' : 'border-lightGrey bg-lightGrey cursor-not-allowed'} flex w-[34.3rem] h-[4.8rem] py-[1.1rem] px-[8.7rem] justify-center items-center rounded-2xl p-4 gap-4`}
      >
        <Image
          src={SOCIAL[socialDomain].image}
          alt={SOCIAL[socialDomain].alt}
          style={{ width: '2.4rem', height: '2.4rem' }}
        />
        <span className={`${isActive ? 'text-black' : 'text-textDisabled'} font-500 text-18`}>
          {SOCIAL[socialDomain].text}
        </span>
      </button>
    </Link>
  );
}
