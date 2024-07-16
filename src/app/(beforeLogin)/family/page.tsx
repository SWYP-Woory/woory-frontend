import FamilyImageUpload from '@/app/(beforeLogin)/family/_components/FamilyImageUpload';
import FamilyNameInput from '@/app/(beforeLogin)/family/_components/FamilyNameInput';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

export default function FamilyPage() {
  return (
    <div>
      <BasicHeader title="새로운 가족 만들기" hasRightButton buttonType="save" />
      <FamilyImageUpload />
      <div className="mt-24 mx-24 w-[32.7rem] h-[0.1rem] bg-lightGrey" />
      <div className="mt-[5rem] mx-16">
        <FamilyNameInput />
      </div>
    </div>
  );
}
