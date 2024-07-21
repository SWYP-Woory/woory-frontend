'use client';

import MemberAdd from '@/app/(afterLogin)/(main)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/(main)/members/_components/MyProfile';
import ToastPopUp from '@/app/_components/common/popup/ToastPopUp';
import toast from 'react-hot-toast';

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
  // const { isToastFloating, setIsToastFloating } = useToast();

  const handleMemberAdd = () => {
    console.log('member add');
    toast.custom(<ToastPopUp type="link" />);
  };

  return (
    <>
      <div className="flex-grow">
        <MyProfile data={user} />
        <MemberAdd onClick={handleMemberAdd} />
        {members.map((member) => (
          <MemberProfile
            profileImage={member.profileImage}
            name={member.name}
            isHouseholder={member.isHouseholder}
            canDelete={user.isHouseholder}
          />
        ))}
      </div>
      {/* {isToastFloating && <ToastPopUp type="link" />} */}
    </>
  );
}
