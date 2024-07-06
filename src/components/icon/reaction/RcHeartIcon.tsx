import Heart from '@/assets/icons/reaction/heart.svg';

interface Props {
  size: 'sm' | 'md';
}

export default function RcHeartIcon({ size }: Props) {
  const iconSize = size === 'sm' ? '2.4rem' : '3.0rem';

  return <Heart width={iconSize} height={iconSize} />;
}
