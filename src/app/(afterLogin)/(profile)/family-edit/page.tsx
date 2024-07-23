import ProfileEditMain from '@/app/(afterLogin)/(profile)/_components/ProfileEditMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import Link from 'next/link';

export default function FamilyEditPage() {
  return (
    <div className="relative min-h-screen">
      <BasicHeader title="가족 상태 수정" hasRightButton />
      <ProfileEditMain />
      <Link href="/family-edit/family-delete" className="text-primary font-body absolute bottom-16 left-16">
        가족 삭제
      </Link>
    </div>
  );
}
