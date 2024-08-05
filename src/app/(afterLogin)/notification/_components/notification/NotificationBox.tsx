import Notification from '@/app/(afterLogin)/notification/_components/notification/Notification';
import { NotificationType } from '@/type';
import { getDiffTime } from '@/utils/getTime';
import Link from 'next/link';

interface Props extends NotificationType {}

const NotiTitle = {
  TOPIC: '오늘의 토픽',
  CONTENT: '게시글 알림',
  REACTION_COMMENT: '반응 알림',
  REACTION_EMOJI: '반응 알림',
  REACTION_REPLY: '반응 알림',
};

export default function NotificationBox({
  notificationType,
  topicTitle,
  topicDate,
  contentUser,
  contentId,
  reactionUser,
  issueDate,
}: Props) {
  const notiTitle = NotiTitle[notificationType];
  const diffTime = getDiffTime(issueDate);
  const href = (topicDate && `/home/daily?day=${topicDate}`) || (contentId && `posts/${contentId}`);

  return (
    <Link href={href || '/'}>
      <div className="bg-white p-16 w-[37.5rem] h-[10.8rem] hover:bg-bgGrey active:bg-lightGrey">
        <div className="flex justify-between font-500 text-14">
          <div className="text-primary">{notiTitle}</div>
          <div className="text-midGrey">{diffTime}</div>
        </div>
        <div className="pt-4 text-18 text-black font-500">
          <Notification
            notificationType={notificationType}
            topicTitle={topicTitle}
            opponent={contentUser || reactionUser}
          />
        </div>
      </div>
    </Link>
  );
}
