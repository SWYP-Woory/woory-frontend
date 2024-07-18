'use client';

import NotificationBox from '@/app/(afterLogin)/notification/_components/notification/NotificationBox';
import { NotificationDataType } from '@/type';
import { useState } from 'react';

const DUMMY_DATA: NotificationDataType = {
  id: 1,
  isRead: true,
  notiType: 'topic',
  topic: '어제 저녁',
  notiTime: new Date('2024-06-17T03:24:00'),
};

export default function NotificationList() {
  const [notifications] = useState<NotificationDataType[]>([
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
    DUMMY_DATA,
  ]);

  return (
    <div className="min-h-screen flex flex-col">
      {notifications.map((data) => (
        <NotificationBox
          key={data.id}
          isRead={data.isRead}
          notiType={data.notiType}
          topic={data.topic}
          opponent={data.opponent}
          reactionNotiType={data.reactionNotiType}
          notiTime={data.notiTime}
        />
      ))}
    </div>
  );
}
