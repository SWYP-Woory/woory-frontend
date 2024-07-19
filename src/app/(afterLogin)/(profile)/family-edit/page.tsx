import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import Link from 'next/link';

const PROFILE_IMAGE = '';
const VALUE = '우리 가족';

export default function FamilyEditPage() {
  return (
    <div className="relative min-h-screen">
      <BasicHeader title="가족 상태 수정" hasRightButton />
      <ProfileMain profileImage={PROFILE_IMAGE} value={VALUE} inputType="familyEdit" />
      <Link href="/family-edit/family-delete" className="text-primary font-body absolute bottom-16 left-16">
        가족 삭제
      </Link>
    </div>
  );
}
