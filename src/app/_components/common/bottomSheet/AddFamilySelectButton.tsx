import AddFamily from '@/assets/icons/addButton/add-family.svg';
import Link from 'next/link';

export default function AddFamilySelectButton() {
  return (
    <Link href="/family">
      <div className="flex pl-16 items-center justify-center gap-8 flex-shrink-0">
        <AddFamily />
        <h3 className="text-18 text-primary font-500">새로운 가족 만들기</h3>
      </div>
    </Link>
  );
}
