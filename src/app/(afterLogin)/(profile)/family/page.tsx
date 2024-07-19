import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

export default function FamilyPage() {
  return (
    <div>
      <BasicHeader title="새로운 가족 만들기" hasRightButton />
      <ProfileMain inputType="family" />
    </div>
  );
}
