import OptionTitle from '@/app/(afterLogin)/myPage/_components/OptionTitle';
import FamilyItem from '@/app/(afterLogin)/myPage/_components/family/FamilyItem';
import FamilyIcon from '@/assets/icons/family/family.svg';

export default function FamilySetting() {
  const handleFamilySelect = () => {};
  const handleFamilyEdit = () => {};
  return (
    <div className="border-bgGrey border-b">
      <OptionTitle icon={<FamilyIcon />} title="가족 관리" />
      <FamilyItem
        title="가족 선택"
        content="다른 가족으로 이동하거나 가족을 새로 만들 수 있어요"
        onClick={handleFamilySelect}
      />
      <FamilyItem
        title="가족 상태 수정"
        content="가족 프로필을 수정하거나 가족을 삭제할 수 있어요"
        onClick={handleFamilyEdit}
      />
    </div>
  );
}
