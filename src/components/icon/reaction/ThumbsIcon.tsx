import Thumbs from '@/assets/icons/reaction/thumbs.svg';

interface Props {
  size: 'small' | 'large';
}

export default function ThumbsIcon({ size }: Props) {
  const iconSize = size === 'small' ? '2.4rem' : '3.0rem';

  return <Thumbs width={iconSize} height={iconSize} />;
}
