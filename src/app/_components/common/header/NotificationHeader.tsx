'use client';

// import NoticeIcon from '@/app/_components/icon/notification/NoticeIcon';
import { useSelectedLayoutSegment } from 'next/navigation';

const decideTitle = (segment: string | null) => {
  switch (segment) {
    case 'home':
      return '우리';
    case 'favorites':
      return '마음함';
    case 'members':
      return '우리 멤버';
    case 'mypage':
      return '마이페이지';
    default:
      return '';
  }
};

export default function NotificationHeader() {
  const segment = useSelectedLayoutSegment();
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push('/notification');
  // };

  return (
    <header className="header">
      <div className="font-title text-18">{decideTitle(segment)}</div>
      {/* <button type="button" aria-label="notification" className="absolute right-[1.6rem]" onClick={handleClick}>
        <NoticeIcon isActive />
      </button> */}
    </header>
  );
}
