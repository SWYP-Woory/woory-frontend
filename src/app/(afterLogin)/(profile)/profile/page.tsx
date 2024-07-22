import ProfileMain from '@/app/(afterLogin)/(profile)/_components/ProfileMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const VALUE = '아빠';

export default function ProfileEditPage() {
  return (
    <div>
      <BasicHeader title="프로필 수정" hasRightButton />
      <ProfileMain profileImage={PROFILE_IMAGE} value={VALUE} inputType="profile" />
    </div>
  );
}
