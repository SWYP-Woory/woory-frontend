import MyTitle from '@/app/(afterLogin)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/mypage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/mypage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/mypage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';

const DUMMY_DATA = {
  name: '아들',
  profileImage: '',
  isHouseholder: true,
  notifications: {
    topic: true,
    post: false,
    reaction: true,
  },
};

export default function MyPage() {
  return (
    <>
      <NotificationHeader title="마이 페이지" />
      <MyTitle name={DUMMY_DATA.name} profileImage={DUMMY_DATA.profileImage} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting isHouseholder={DUMMY_DATA.isHouseholder} />
      <AddHome />
      <AccountSetting />
      <ServiceInfo />
      <BottomMenuBar />
    </>
  );
}
