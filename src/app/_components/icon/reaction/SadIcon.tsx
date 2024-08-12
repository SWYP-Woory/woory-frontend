import Sad from '@/assets/icons/reaction/sad.svg';

interface Props {
  size: 'small' | 'large';
}

export default function SadIcon({ size }: Props) {
  const iconSize = size === 'small' ? '2.4rem' : '3.0rem';

  return <Sad width={iconSize} height={iconSize} />;
}
