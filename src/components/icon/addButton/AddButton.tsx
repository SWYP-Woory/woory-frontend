import DefaultAddButton from '@/assets/icons/addButton/default-add.svg';
import PressedAddButton from '@/assets/icons/addButton/pressed-add.svg';

interface Props {
  isActive?: boolean;
}

export default function AddButton({ isActive }: Props) {
  return (
    <div className="flex cursor-pointer w-[1.8rem] h-[1.8rem]">
      {isActive ? (
        <PressedAddButton width="1.8rem" height="1.8rem" />
      ) : (
        <DefaultAddButton width="1.8rem" height="1.8rem" />
      )}
    </div>
  );
}
