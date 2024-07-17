import MyTitle from '@/app/(afterLogin)/myPage/_components/MyTitle';
import AddHome from '@/app/(afterLogin)/myPage/_components/addHome/AddHome';
import FamilySetting from '@/app/(afterLogin)/myPage/_components/family/FamilySetting';
import NotificationSetting from '@/app/(afterLogin)/myPage/_components/notification/NotificationSetting';
import Border from '@/app/_components/common/border/Border';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';

export default function MyPage() {
  return (
    <>
      <NotificationHeader title="마이 페이지" />
      <MyTitle name="아들" />
      <Border />
      <NotificationSetting />
      <FamilySetting />
      <AddHome />
    </>
  );
}
