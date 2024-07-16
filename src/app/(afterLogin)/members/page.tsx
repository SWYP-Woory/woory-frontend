'use client';

import MemberAdd from '@/app/(afterLogin)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/members/_components/MyProfile';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';
import ToastPopUp from '@/app/_components/popup/ToastPopUp';
import { useEffect, useState } from 'react';

const DUMMY_DATA = {
  user: {
    profileImage: '',
    name: '아빠',
    isHouseholder: true,
  },
  members: [
    {
      profileImage: '',
      name: '엄마',
      isHouseholder: false,
    },
    {
      profileImage: '',
      name: '아들',
      isHouseholder: false,
    },
    {
      profileImage: '',
      name: '딸',
      isHouseholder: false,
    },
    {
      profileImage: '',
      name: '엄마',
      isHouseholder: false,
    },
    {
      profileImage: '',
      name: '아들',
      isHouseholder: false,
    },
    {
      profileImage: '',
      name: '딸',
      isHouseholder: false,
    },
  ],
};

export default function MemberPage() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        setIsClicked(false);
      }, 1500);
    }
  }, [isClicked]);

  return (
    <>
      <NotificationHeader title="우리 멤버" />
      <div className="flex-grow">
        <MyProfile data={DUMMY_DATA.user} />
        <MemberAdd onClick={handleClick} />
        {DUMMY_DATA.members.map((member) => (
          <MemberProfile
            profileImage={member.profileImage}
            name={member.name}
            isHouseholder={member.isHouseholder}
            canDelete={DUMMY_DATA.user.isHouseholder}
          />
        ))}
      </div>
      {isClicked && (
        <div className="fixed left-1/2 transform -translate-x-1/2 bottom-[12.8rem]">
          <ToastPopUp />
        </div>
      )}
      <BottomMenuBar />
    </>
  );
}
