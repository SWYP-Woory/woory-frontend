import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

const PROFILE_IMAGE = '';
const VALUE = '아빠';

export default function ProfileEditPage() {
  return (
    <div>
      <BasicHeader title="프로필 수정" hasRightButton />
      <ProfileMain profileImage={PROFILE_IMAGE} value={VALUE} inputType="profile" />
    </div>
  );
}
