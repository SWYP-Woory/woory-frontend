interface Props {
  handleEditClick: () => void;
  handleDeleteClick: () => void;
}

export default function EditDeleteButton({ handleEditClick, handleDeleteClick }: Props) {
  return (
    <div className="flex flex-col justify-center items-center w-[11.5rem] h-[11.7rem] bg-white shadow-custom rounded-[2.0rem]">
      <button type="button" className="font-body w-full border-b border-bgGrey pb-16" onClick={handleEditClick}>
        수정하기
      </button>
      <button type="button" className="font-body w-full mt-16 text-red-500" onClick={handleDeleteClick}>
        삭제하기
      </button>
    </div>
  );
}
