interface Props {
  onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function EditDeleteButton({ onEdit, onDelete }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[11.5rem] h-[11.7rem] bg-white shadow-custom rounded-[2.0rem]">
      <button
        type="button"
        className="flex-grow font-body w-full border-b border-bgGrey hover:bg-bgGrey active:bg-lightGrey rounded-t-[2.0rem]"
        onClick={onEdit}
      >
        수정하기
      </button>
      <button
        type="button"
        className="flex-grow font-body w-full hover:bg-bgGrey active:bg-lightGrey rounded-b-[2.0rem]"
        onClick={onDelete}
      >
        삭제하기
      </button>
    </div>
  );
}
