import MemberProfile from '@/app/(afterLogin)/(main)/members/_components/MemberProfile';
import { MemberType } from '@/type';

interface Props {
  data: MemberType;
}

export default function MyProfile({ data }: Props) {
  const { userId, profileUrl, userName, isHouseholder } = data;
  return <MemberProfile userId={userId} profileUrl={profileUrl} userName={userName} isHouseholder={isHouseholder} />;
}
