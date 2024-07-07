import DefaultSmallIcon from '@/assets/icons/profile/default-small.svg';
import DefaultLargeIcon from '@/assets/icons/profile/default.svg';

interface Props {
  size: 'small' | 'large';
}

export default function DefaultProfileImage({ size }: Props) {
  return size === 'small' ? <DefaultSmallIcon /> : <DefaultLargeIcon />;
}
