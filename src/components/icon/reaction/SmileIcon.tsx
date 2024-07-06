import Smile from '@/assets/icons/reaction/smile.svg';

interface Props {
  size: 'small' | 'large';
}

export default function SmileIcon({ size }: Props) {
  const iconSize = size === 'small' ? '2.4rem' : '3.0rem';

  return <Smile width={iconSize} height={iconSize} />;
}
