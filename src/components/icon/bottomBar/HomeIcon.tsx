import ActivationHome from '@/../../public/bottomBar/activeHome.svg';
import DeActivationHome from '@/../../public/bottomBar/home.svg';

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
