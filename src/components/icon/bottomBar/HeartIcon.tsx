import ActivationHeart from '@/../../public/bottomBar/activeHeart.svg';
import DeActivationHeart from '@/../../public/bottomBar/heart.svg';

interface Props {
  isActive: boolean;
}

export default function HeartIcon({ isActive }: Props) {
  return isActive ? (
    <ActivationHeart width="2.4rem" height="2.2rem" />
  ) : (
    <DeActivationHeart width="2.4rem" height="2.2rem" />
  );
}
