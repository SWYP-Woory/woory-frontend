import ActivationHeart from '@/assets/icons/bottomBar/activeHeart.svg';
import DeActivationHeart from '@/assets/icons/bottomBar/heart.svg';

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
