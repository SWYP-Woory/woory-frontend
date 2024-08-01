'use client';

import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
// import NoticeIcon from '@/app/_components/icon/notification/NoticeIcon';
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
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push('/notification');
  // };

  useEffect(() => {
    decideTitle(segment, setTitle);
  }, [segment]);

  return (
    <header className="header">
      <div className="font-title text-18">{title}</div>
      {/* <button type="button" aria-label="notification" className="absolute right-[1.6rem]" onClick={handleClick}>
        <NoticeIcon isActive />
      </button> */}
    </header>
  );
}
