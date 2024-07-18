import { NotificationDataType } from '@/type';

interface Props extends NotificationDataType {}

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

export default function Notification({ notiType, topic, opponent, reactionNotiType }: Omit<Props, 'notiTime'>) {
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
