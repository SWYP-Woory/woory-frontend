'use client';

import OptionTitle from '@/app/(afterLogin)/(main)/mypage/_components/OptionTitle';
import NotificationItem from '@/app/(afterLogin)/(main)/mypage/_components/notification/NotificationItem';
import Notice from '@/assets/icons/notification/notice.svg';
import { NotificationSettingType } from '@/type';

interface Props {
  notifications: NotificationSettingType;
}

export default function NotificationSetting({ notifications }: Props) {
  const { topic, post, reaction } = notifications;
  const handleTopic = () => {};
  const handlePost = () => {};
  const handleReaction = () => {};

  return (
    <div className="border-bgGrey border-b">
      <OptionTitle icon={<Notice width="2.4rem" height="2.4rem" />} title="알림설정" />
      <NotificationItem
        title="토픽 알림"
        content="매일 오전 10시에 오늘의 토픽을 알려드려요"
        isActive={topic}
        onClick={handleTopic}
      />
      <NotificationItem
        title="게시글 알림"
        content="멤버가 글을 올리면 알려드려요"
        isActive={post}
        onClick={handlePost}
      />
      <NotificationItem
        title="반응 알림"
        content="내 글에 댓글이나 반응이 달리면 알려드려요"
        isActive={reaction}
        onClick={handleReaction}
      />
    </div>
  );
}
