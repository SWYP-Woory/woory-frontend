import FamilyName from '@/app/(beforeLogin)/family/_components/FamilyName';
import PictureChangeButton from '@/app/_components/common/button/PictureChangeButton';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import FamilyProfile from '@/app/_components/common/profile/FamilyProfile';

export default function FamilyPage() {
  return (
    <div>
      <BasicHeader title="새로운 가족 만들기" hasRightButton buttonType="save" />
      <div className="pt-40 px-[10.8rem]">
        <FamilyProfile />
      </div>
      <div className="pt-24 px-[10.8rem]">
        <PictureChangeButton />
      </div>
      <div className="mt-24 mx-24 w-[32.7rem] h-[0.1rem] bg-lightGrey" />
      <div className="mt-[5rem] mx-16">
        <FamilyName />
      </div>
    </div>
  );
}
