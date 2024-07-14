import Surprise from '@/assets/icons/reaction/surprise.svg';

interface Props {
  size: 'small' | 'large';
}

export default function SurpriseIcon({ size }: Props) {
  const iconSize = size === 'small' ? '2.4rem' : '3.0rem';

  return <Surprise width={iconSize} height={iconSize} />;
}
