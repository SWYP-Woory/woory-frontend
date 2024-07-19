import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

const PROFILE_IMAGE = '';
const VALUE = '우리 가족';

export default function ProfileEditPage() {
  return (
    <div className="relative min-h-screen">
      <BasicHeader title="가족 상태 수정" hasRightButton />
      <ProfileMain profileImage={PROFILE_IMAGE} value={VALUE} inputType="familyEdit" />
      <button type="button" className="text-primary font-body absolute bottom-16 left-16">
        가족 삭제
      </button>
    </div>
  );
}
