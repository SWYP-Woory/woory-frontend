import ProfileNameInput from '@/app/(afterLogin)/(profile)/profile/_components/ProfileNameInput';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import ProfileImageUpload from '@/app/_components/common/profile/ProfileImageUpload';

const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';

export default function ProfileEditPage() {
  return (
    <div>
      <BasicHeader title="프로필 수정" hasRightButton />
      <ProfileImageUpload profileImage={PROFILE_IMAGE} isProfile />
      <div className="mt-24 mx-24 w-[32.7rem] h-[0.1rem] bg-lightGrey" />
      <div className="mt-16 mx-16">
        <h3 className="text-18 font-700 mb-8">이름</h3>
        <ProfileNameInput />
      </div>
    </div>
  );
}
