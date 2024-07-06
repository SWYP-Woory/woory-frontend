import ActivationMember from '@/assets/icons/bottomBar/activeMember.svg';
import DeActivationMember from '@/assets/icons/bottomBar/member.svg';

interface Props {
  isActive: boolean;
}

export default function MemberIcon({ isActive }: Props) {
  return isActive ? (
    <ActivationMember width="2.4rem" height="2.4rem" />
  ) : (
    <DeActivationMember width="2.4rem" height="2.4rem" />
  );
}
