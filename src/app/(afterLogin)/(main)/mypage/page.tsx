import MyTitle from '@/app/(afterLogin)/(main)/mypage/_components/MyTitle';
import AccountSetting from '@/app/(afterLogin)/(main)/mypage/_components/account/AccountSetting';
import AddHome from '@/app/(afterLogin)/(main)/mypage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/(main)/mypage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationSetting';
import ServiceInfo from '@/app/(afterLogin)/(main)/mypage/_components/service/ServiceInfo';
import Border from '@/app/_components/common/border/Border';

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
    <div className="min-h-screen">
      <MyTitle name={DUMMY_DATA.name} profileImage={DUMMY_DATA.profileImage} />
      <Border />
      <NotificationSetting notifications={DUMMY_DATA.notifications} />
      <FamilySetting isHouseholder={DUMMY_DATA.isHouseholder} />
      <AddHome />
      <AccountSetting />
      <ServiceInfo />
    </div>
  );
}
