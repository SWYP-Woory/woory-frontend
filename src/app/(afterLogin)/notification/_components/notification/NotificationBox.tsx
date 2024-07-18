import { NotiType, ReactionNotiType } from '@/type';
import { getDiffTime } from '@/utils/getTime';

interface Props {
  isRead?: boolean;
  notiType: NotiType;
  topic?: string;
  opponent?: string;
  reactionNotiType?: ReactionNotiType;
  notiTime: Date;
}

const NotiTitle = {
  topic: '오늘의 토픽',
  reaction: '반응 알림',
  post: '게시글 알림',
};

function Topic({ topic }: Pick<Props, 'topic'>) {
  return <h3>오늘의 토픽은 '{topic}' 입니다!</h3>;
}

function Post({ opponent }: Pick<Props, 'opponent'>) {
  return <div>{opponent}님이 새로운 글을 올렸어요!</div>;
}

function Reaction({ opponent, reactionNotiType }: Pick<Props, 'opponent' | 'reactionNotiType'>) {
  switch (reactionNotiType) {
    case 'comment':
      return <h3>{opponent}님이 내 게시글에 댓글을 달았어요!</h3>;
    case 'reComment':
      return <h3>{opponent}님이 내 댓글에 답댓글을 달았어요!</h3>;
    case 'reaction':
      return <h3>{opponent}님이 내 게시글에 이모지를 보냈어요!</h3>;
    default:
      return null;
  }
}

function Notification({ notiType, topic, opponent, reactionNotiType }: Omit<Props, 'notiTime'>) {
  switch (notiType) {
    case 'topic':
      return <Topic topic={topic} />;
    case 'post':
      return <Post opponent={opponent} />;
    case 'reaction':
      return <Reaction opponent={opponent} reactionNotiType={reactionNotiType} />;
    default:
      return null;
  }
}

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
