'use client';

import HeartIcon from '@/app/_components/icon/bottomBar/HeartIcon';
import HomeIcon from '@/app/_components/icon/bottomBar/HomeIcon';
import MemberIcon from '@/app/_components/icon/bottomBar/MemberIcon';
import MyPageIcon from '@/app/_components/icon/bottomBar/MyPageIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomMenuBar() {
  const pathName = usePathname();
  const isActive = (page: 'home' | 'favorites' | 'members' | 'mypage'): boolean => pathName.includes(page);

  return (
    <nav className="sticky bottom-0">
      <div className="flex justify-center bg-white w-[37.5rem] h-[4.8rem] border-bgGrey border-t">
        <Link href="/home/daily">
          <div className="bottom-menu">
            <HomeIcon isActive={isActive('home')} />
          </div>
        </Link>
        <Link href="/favorites">
          <div className="bottom-menu">
            <HeartIcon isActive={isActive('favorites')} />
          </div>
        </Link>
        <Link href="/members">
          <div className="bottom-menu">
            <MemberIcon isActive={isActive('members')} />
          </div>
        </Link>
        <Link href="/mypage">
          <div className="bottom-menu">
            <MyPageIcon isActive={isActive('mypage')} />
          </div>
        </Link>
      </div>
    </nav>
  );
}
