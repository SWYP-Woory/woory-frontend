interface Props {
  onClick: () => void;
}

export default function PictureChangeButton({ onClick }: Props) {
  return (
    <button
      type="button"
      aria-label="ImageUploadButton"
      className="flex w-160 h-40 py-4 px-16 justify-center items-center bg-white rounded-[0.8rem] border-[1px] border-lightGrey hover:bg-bgGrey active:bg-lightGrey"
      onClick={onClick}
    >
      <div className="text-midGrey text-18 font-500">사진 바꾸기</div>
    </button>
  );
}
