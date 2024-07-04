import Smile from '@/../../public/reaction/smile.svg';

interface Props {
  size: 'sm' | 'md';
}

export default function SmileIcon({ size }: Props) {
  const iconSize = size === 'sm' ? '2.4rem' : '3.0rem';

  return <Smile width={iconSize} height={iconSize} />;
}
