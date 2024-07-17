import DefaultSmallIcon from '@/assets/icons/profile/default-small.svg';
import DefaultXLargeIcon from '@/assets/icons/profile/default-xlarge.svg';
import DefaultLargeIcon from '@/assets/icons/profile/default.svg';

interface Props {
  size: 'small' | 'large' | 'xLarge';
}

export default function DefaultProfileImage({ size }: Props) {
  if (size === 'small') {
    return <DefaultSmallIcon />;
  }

  if (size === 'large') {
    return <DefaultLargeIcon />;
  }

  return <DefaultXLargeIcon />;
}
