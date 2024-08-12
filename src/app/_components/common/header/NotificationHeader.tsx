'use client';

import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import NoticeIcon from '@/app/_components/icon/notification/NoticeIcon';
import { getCookies } from '@/app/_store/cookie/cookies';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useEffect, useState } from 'react';

const getFamilyName = async () => {
  const groupId = getCookies('groupId');
  const { data } = await getData({ path: `${apiRoutes.getFamilyName}/${groupId}/name` });
  return data;
};

const decideTitle = async (segment: string | null, setTitle: (title: string) => void) => {
  switch (segment) {
    case 'home': {
      const familyName = await getFamilyName();
      setTitle(familyName);
      break;
    }
    case 'favorites':
      setTitle('마음함');
      break;
    case 'members':
      setTitle('우리 멤버');
      break;
    case 'mypage':
      setTitle('마이페이지');
      break;
    default:
      setTitle('');
      break;
  }
};

export default function NotificationHeader() {
  const segment = useSelectedLayoutSegment();
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    decideTitle(segment, setTitle);
  }, [segment]);

  return (
    <header className="header">
      <div className="font-title text-18">{title}</div>
      <Link
        href="/notification"
        className="absolute right-[1.6rem] w-[2.4rem] h-[2.4rem] bg-white rounded-md hover:bg-bgGrey active:bg-lightGrey"
      >
        <div className="pt-[0.1rem]">
          <NoticeIcon />
        </div>
      </Link>
    </header>
  );
}
