import DefaultSmallIcon from '@/assets/icons/profile/default-small.svg';
import DefaultLargeIcon from '@/assets/icons/profile/default.svg';

interface Props {
  size: 'small' | 'large' | 'xLarge';
}

export default function DefaultProfileImage({ size }: Props) {
  if (size === 'small') {
    return <DefaultSmallIcon />;
  }
  return <DefaultLargeIcon />;
}
