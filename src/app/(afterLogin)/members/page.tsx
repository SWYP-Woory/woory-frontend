import MemberAdd from '@/app/(afterLogin)/members/_components/MemberAdd';
import MemberProfile from '@/app/(afterLogin)/members/_components/MemberProfile';
import MyProfile from '@/app/(afterLogin)/members/_components/MyProfile';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';

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
  ],
};

export default function MemberPage() {
  return (
    <>
      <NotificationHeader title="우리 멤버" />
      <div className="flex-grow">
        <MyProfile data={DUMMY_DATA.user} />
        <MemberAdd />
        {DUMMY_DATA.members.map((member) => (
          <MemberProfile
            profileImage={member.profileImage}
            name={member.name}
            isHouseholder={member.isHouseholder}
            canDelete={DUMMY_DATA.user.isHouseholder}
          />
        ))}
      </div>
      <BottomMenuBar />
    </>
  );
}
