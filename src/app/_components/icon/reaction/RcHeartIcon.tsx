import Heart from '@/assets/icons/reaction/heart.svg';

interface Props {
  size: 'small' | 'large';
}

export default function RcHeartIcon({ size }: Props) {
  const iconSize = size === 'small' ? '2.4rem' : '3.0rem';

  return <Heart width={iconSize} height={iconSize} />;
}
