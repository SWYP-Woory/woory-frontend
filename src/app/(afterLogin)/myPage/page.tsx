import MyTitle from '@/app/(afterLogin)/myPage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/myPage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/myPage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/myPage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/myPage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/myPage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';

const DUMMY_DATA = {
  name: '아들',
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
      <MyTitle name={DUMMY_DATA.name} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting />
      <AddHome />
      <AccountSetting />
      <ServiceInfo />
      <BottomMenuBar />
    </>
  );
}
