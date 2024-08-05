import NotificationList from '@/app/(afterLogin)/notification/_components/notification/NotificationList';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '알림함',
  description: '알림함',
};

export default function NotificationPage() {
  return (
    <>
      <BasicHeader title="알림" />
      <NotificationList />
    </>
  );
}
