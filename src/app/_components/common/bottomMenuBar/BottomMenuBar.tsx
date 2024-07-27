'use client';

import HeartIcon from '@/app/_components/icon/bottomBar/HeartIcon';
import HomeIcon from '@/app/_components/icon/bottomBar/HomeIcon';
import MemberIcon from '@/app/_components/icon/bottomBar/MemberIcon';
import MyPageIcon from '@/app/_components/icon/bottomBar/MyPageIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomMenuBar() {
  const pathName = usePathname();

  return (
    <nav className="sticky bottom-0">
      <div className="flex justify-center bg-white w-[37.5rem] h-[4.8rem] border-bgGrey border-t">
        <Link href="/home/daily">
          <div className="bottom-menu">
            <HomeIcon isActive={pathName.includes('home')} />
          </div>
        </Link>
        <Link href="/favorites">
          <div className="bottom-menu">
            <HeartIcon isActive={pathName.includes('favorites')} />
          </div>
        </Link>
        <Link href="/members">
          <div className="bottom-menu">
            <MemberIcon isActive={pathName.includes('members')} />
          </div>
        </Link>
        <Link href="/mypage">
          <div className="bottom-menu">
            <MyPageIcon isActive={pathName.includes('mypage')} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
