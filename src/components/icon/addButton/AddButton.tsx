import DefaultAddButton from '@/assets/icons/addButton/default-add.svg';
import PressedAddButton from '@/assets/icons/addButton/pressed-add.svg';
import style from './AddButton.module.css';

interface Props {
  isActive?: boolean;
}

export default function AddButton({ isActive }: Props) {
  return isActive ? (
    <div className="flex cursor-pointer w-[1.8rem] h-[1.8rem]">
      <PressedAddButton width="1.8rem" height="1.8rem" />
    </div>
  ) : (
    <div className="flex cursor-pointer w-[1.8rem] h-[1.8rem]">
      <DefaultAddButton className={style.defaultIcon} width="1.8rem" height="1.8rem" />
    </div>
  );
}
