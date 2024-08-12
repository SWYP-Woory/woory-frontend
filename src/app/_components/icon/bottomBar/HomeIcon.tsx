import ActivationHome from '@/assets/icons/bottomBar/activeHome.svg';
import DeActivationHome from '@/assets/icons/bottomBar/home.svg';

interface Props {
  isActive: boolean;
}

export default function HomeIcon({ isActive }: Props) {
  return isActive ? (
    <ActivationHome width="2.4rem" height="2.4rem" />
  ) : (
    <DeActivationHome width="2.4rem" height="2.4rem" />
  );
}
