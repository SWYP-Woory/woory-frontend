'use client';

import NotificationBox from '@/app/(afterLogin)/notification/_components/notification/NotificationBox';
import { getData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { NotificationDataType } from '@/type';
import { useEffect, useState } from 'react';

export default function NotificationList() {
  const [notifications, setNotifications] = useState<NotificationDataType[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const groupId = getCookies('groupId');
      const { data } = await getData({ path: `${apiRoutes.getNotification}/${groupId}` });
      setNotifications(data);
    };
    fetchNotifications();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {notifications.map((data) => (
        <NotificationBox
          key={data.notificationId}
          notificationType={data.notificationType}
          topicTitle={data.topicTitle}
          topicDate={data.topicDate}
          contentUser={data.contentUser}
          contentId={data.contentId}
          reactionUser={data.reactionUser}
          issueDate={data.issueDate}
        />
      ))}
    </div>
  );
}
