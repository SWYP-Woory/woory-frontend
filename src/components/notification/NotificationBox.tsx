import { NotiType } from '@/type';
import { getDiffTime } from '@/utils/getTime';

interface Props {
  notiType: NotiType;
  topic?: string;
  me?: string;
  opponent?: string;
  notiTime: Date;
}

const NotiTitle = {
  topic: '오늘의 토픽',
  reaction: '반응 알림',
  post: '게시글 알림',
};

function Topic({ topic }: Pick<Props, 'topic'>) {
  return <div>{topic}</div>;
}

function Reaction({ me, opponent }: Pick<Props, 'me' | 'opponent'>) {
  return (
    <div>
      {me}
      {opponent}
    </div>
  );
}

function Post({ me, opponent }: Pick<Props, 'me' | 'opponent'>) {
  return (
    <div>
      {me}
      {opponent}
    </div>
  );
}

function Notification({ notiType, topic, me, opponent }: Omit<Props, 'notiTime'>) {
  switch (notiType) {
    case 'topic':
      return <Topic topic={topic} />;
    case 'reaction':
      return <Reaction me={me} opponent={opponent} />;
    case 'post':
      return <Post me={me} opponent={opponent} />;
    default:
      return null;
  }
}

export default function NotificationBox({ notiType, topic, me, opponent, notiTime }: Props) {
  const notiTitle = NotiTitle[notiType];
  const diffTime = getDiffTime(notiTime);

  return (
    <div className="relative w-[37.5rem] h-[10.8rem] border-[1px]">
      <div className="absolute top-[1.6rem] left-[1.6rem] w-[8.8rem] h-[2rem] text-midGrey font-500 text-14">
        {notiTitle}
      </div>
      <div className="absolute top-[1.6rem] right-[1.6rem] font-500 text-midGrey text-14">{diffTime}</div>
      <Notification notiType={notiType} topic={topic} me={me} opponent={opponent} notiTime={notiTime} />
    </div>
  );
}
