import NameInput from '@/app/(afterLogin)/(profile)/_components/NameInput';
import ProfileImageUpload from '@/app/_components/common/profile/ProfileImageUpload';
import { InputTextType } from '@/type';

interface Props {
  inputType: InputTextType;
  value?: string;
  profileImage?: string;
}

export default function ProfileMain({ inputType, profileImage, value }: Props) {
  return (
    <>
      <ProfileImageUpload profileImage={profileImage} inputType={inputType} />
      <div className="mt-24 mx-24 w-[32.7rem] h-[0.1rem] bg-lightGrey" />
      <div className="mt-24 mx-16">
        <h3 className="text-18 font-700 mb-8">이름</h3>
        <NameInput value={value} type={inputType} />
      </div>
    </>
  );
}
