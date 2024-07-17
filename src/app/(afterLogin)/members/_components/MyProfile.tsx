import MemberProfile from '@/app/(afterLogin)/members/_components/MemberProfile';
import { MemberType } from '@/type';

interface Props {
  data: MemberType;
}

export default function MyProfile({ data }: Props) {
  const { profileImage, name, isHouseholder } = data;
  return <MemberProfile profileImage={profileImage} name={name} isHouseholder={isHouseholder} />;
}
