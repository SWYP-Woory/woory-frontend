import Notification from '@/app/(afterLogin)/notification/_components/notification/Notification';
import { NotificationDataType } from '@/type';
import { getDiffTime } from '@/utils/getTime';

interface Props extends NotificationDataType {}

const NotiTitle = {
  topic: '오늘의 토픽',
  reaction: '반응 알림',
  post: '게시글 알림',
};

export default function NotificationBox({ isRead, notiType, topic, opponent, reactionNotiType, notiTime }: Props) {
  const notiTitle = NotiTitle[notiType];
  const diffTime = getDiffTime(notiTime);

  return (
    <div className={`${isRead ? 'bg-white' : 'bg-notiBackground'} p-16 w-[37.5rem] h-[10.8rem]`}>
      <div className="flex justify-between text-midGrey font-500 text-14">
        <div>{notiTitle}</div>
        <div>{diffTime}</div>
      </div>
      <div className="pt-4 text-18 text-black font-500">
        <Notification notiType={notiType} topic={topic} opponent={opponent} reactionNotiType={reactionNotiType} />
      </div>
    </div>
  );
}
