import { NotificationType } from '@/type';

interface Props extends NotificationType {
  opponent?: string;
}

function Topic({ topicTitle }: Pick<Props, 'topicTitle'>) {
  return <h3>오늘의 토픽은 '{topicTitle}' 입니다. 당신의 이야기를 공유해보세요!</h3>;
}

function Post({ opponent }: Pick<Props, 'opponent'>) {
  return <div>{opponent}님이 새로운 글을 올렸어요. 가족과 이야기를 나눠보세요!</div>;
}

function Reaction({ opponent, notificationType }: Pick<Props, 'opponent' | 'notificationType'>) {
  switch (notificationType) {
    case 'REACTION_COMMENT':
      return <h3>{opponent}님이 내 게시글에 댓글을 달았어요. 지금 우리에서 확인해보세요!</h3>;
    case 'REACTION_REPLY':
      return <h3>{opponent}님이 내 댓글에 답댓글을 달았어요. 지금 우리에서 확인해보세요!</h3>;
    case 'REACTION_EMOJI':
      return <h3>{opponent}님이 내 게시글에 이모지를 보냈어요. 지금 우리에서 확인해보세요!</h3>;
    default:
      return null;
  }
}

export default function Notification({
  notificationType,
  topicTitle,
  opponent,
}: Pick<Props, 'notificationType' | 'topicTitle' | 'opponent'>) {
  switch (notificationType) {
    case 'TOPIC':
      return <Topic topicTitle={topicTitle} />;
    case 'CONTENT':
      return <Post opponent={opponent} />;
    case 'REACTION_COMMENT':
    case 'REACTION_REPLY':
    case 'REACTION_EMOJI':
      return <Reaction opponent={opponent} notificationType={notificationType} />;
    default:
      return null;
  }
}
