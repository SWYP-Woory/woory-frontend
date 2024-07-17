'use client';

import MemberAdd from '@/app/(afterLogin)/(main)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/(main)/members/_components/MyProfile';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
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

export default function MemberMain() {
  const { user, members } = DUMMY_DATA;
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
      <div className="flex-grow">
        <MyProfile data={user} />
        <MemberAdd onClick={handleClick} />
        {members.map((member) => (
          <MemberProfile
            profileImage={member.profileImage}
            name={member.name}
            isHouseholder={member.isHouseholder}
            canDelete={user.isHouseholder}
          />
        ))}
      </div>
      {isClicked && <ToastPopUp />}
      <BottomMenuBar />
    </>
  );
}
