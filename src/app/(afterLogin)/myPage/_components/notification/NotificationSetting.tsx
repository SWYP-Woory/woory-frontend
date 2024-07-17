'use client';

import OptionTitle from '@/app/(afterLogin)/myPage/_components/OptionTitle';
import NotificationItem from '@/app/(afterLogin)/myPage/_components/notification/NotificationItem';
import Notice from '@/assets/icons/notification/notice.svg';

export default function NotificationSetting() {
  const handleTopic = () => {};
  const handlePost = () => {};
  const handleReaction = () => {};

  return (
    <div>
      <OptionTitle icon={<Notice width="2.4rem" height="2.4rem" />} title="알림설정" />
      <NotificationItem
        title="토픽 알림"
        content="매일 오전 10시에 오늘의 토픽을 알려드려요"
        isActive
        onClick={handleTopic}
      />
      <NotificationItem title="게시글 알림" content="멤버가 글을 올리면 알려드려요" isActive onClick={handlePost} />
      <NotificationItem
        title="반응 알림"
        content="내 글에 댓글이나 반응이 달리면 알려드려요"
        isActive
        onClick={handleReaction}
      />
    </div>
  );
}
