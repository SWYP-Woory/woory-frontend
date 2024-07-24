import UserProfileEditMain from '@/app/(afterLogin)/(profile)/profile/components/UserProfileEditMain';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

export default function ProfileEditPage() {
  return (
    <div>
      <BasicHeader title="프로필 수정" hasRightButton />
      <UserProfileEditMain />
    </div>
  );
}
