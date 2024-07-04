import Thumbs from '@/../../public/reaction/thumbs.svg';

interface Props {
  size: 'sm' | 'md';
}

export default function ThumbsIcon({ size }: Props) {
  const iconSize = size === 'sm' ? '2.4rem' : '3.0rem';

  return <Thumbs width={iconSize} height={iconSize} />;
}
