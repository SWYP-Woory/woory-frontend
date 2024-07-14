import Picture from '@/assets/icons/picture/picture.svg';

export default function ImageUpload() {
  return (
    <button
      type="button"
      aria-label="ImageUploadButton"
      className="flex flex-col gap-8 items-center justify-center size-[10.0rem] rounded-[2.0rem] bg-bgGrey"
    >
      <Picture width="40" height="40" fill="#888888" />
      <div className="font-body text-textDisabled">사진 추가</div>
    </button>
  );
}
