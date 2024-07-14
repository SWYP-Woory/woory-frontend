'use client';

import HeartIcon from '@/app/_components/icon/bottomBar/HeartIcon';
import HomeIcon from '@/app/_components/icon/bottomBar/HomeIcon';
import MemberIcon from '@/app/_components/icon/bottomBar/MemberIcon';
import MyPageIcon from '@/app/_components/icon/bottomBar/MyPageIcon';
import { Page } from '@/type';
import Link from 'next/link';
import { useState } from 'react';

export default function BottomMenuBar() {
  const [clickedIcon, setClickedIcon] = useState('home');
  const handleClick = (value: Page) => {
    setClickedIcon(value);
  };

  return (
    <nav>
      <div className="flex justify-evenly items-start pt-[1.3rem] bg-white w-[37.5rem] h-[4.8rem] border-bgGrey border-t">
        <Link
          href="/"
          onClick={() => {
            handleClick('home');
          }}
        >
          <HomeIcon isActive={clickedIcon === 'home'} />
        </Link>
        <Link
          href="/heart"
          onClick={() => {
            handleClick('heart');
          }}
        >
          <HeartIcon isActive={clickedIcon === 'heart'} />
        </Link>
        <Link
          href="/member"
          onClick={() => {
            handleClick('member');
          }}
        >
          <MemberIcon isActive={clickedIcon === 'member'} />
        </Link>
        <Link
          href="/myPage"
          onClick={() => {
            handleClick('myPage');
          }}
        >
          <MyPageIcon isActive={clickedIcon === 'myPage'} />
        </Link>
      </div>
    </nav>
  );
}
