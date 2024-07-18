import NotificationList from '@/app/(afterLogin)/notification/_components/notification/NotificationList';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

export default function NotificationPage() {
  return (
    <>
      <BasicHeader title="알림" />
      <NotificationList />
    </>
  );
}
