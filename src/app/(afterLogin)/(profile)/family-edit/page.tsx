import FamilyProfileEditMain from '@/app/(afterLogin)/(profile)/family-edit/_components/FamilyProfileEditMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import Link from 'next/link';

export default function FamilyEditPage() {
  return (
    <div className="flex flex-col relative min-h-screen">
      <BasicHeader title="가족 상태 수정" hasRightButton />
      <FamilyProfileEditMain />
      <Link href="/family-edit/family-delete" className="text-primary font-body absolute bottom-16 left-16">
        가족 삭제
      </Link>
    </div>
  );
}
