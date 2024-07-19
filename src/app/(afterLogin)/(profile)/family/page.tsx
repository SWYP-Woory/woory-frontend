import FamilyNameInput from '@/app/(afterLogin)/(profile)/family/_components/FamilyNameInput';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import ProfileImageUpload from '@/app/_components/common/profile/ProfileImageUpload';

export default function FamilyPage() {
  return (
    <div>
      <BasicHeader title="새로운 가족 만들기" hasRightButton />
      <ProfileImageUpload />
      <div className="mt-24 mx-24 w-[32.7rem] h-[0.1rem] bg-lightGrey" />
      <div className="mt-16 mx-16">
        <h3 className="text-18 font-700 mb-8">이름</h3>
        <FamilyNameInput />
      </div>
    </div>
  );
}
