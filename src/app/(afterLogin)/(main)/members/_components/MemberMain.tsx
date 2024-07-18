'use client';

import MemberAdd from '@/app/(afterLogin)/(main)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/(main)/members/_components/MyProfile';
import ToastPopUp from '@/app/_components/popup/ToastPopUp';
import { useClickToast } from '@/app/_hooks/useClickToast';

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
  const { isClicked, handleClick } = useClickToast(1500);

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
    </>
  );
}
