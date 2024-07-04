import Sad from '@/../../public/reaction/sad.svg';

interface Props {
  size: 'sm' | 'md';
}

export default function SadIcon({ size }: Props) {
  const iconSize = size === 'sm' ? '2.4rem' : '3.0rem';

  return <Sad width={iconSize} height={iconSize} />;
}
