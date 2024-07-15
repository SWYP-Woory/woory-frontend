interface Props {
  text: string;
  onClick?: () => void;
}

export default function BottomSheetButton({ text, onClick }: Props) {
  return (
    <button
      type="button"
      className="flex w-[34.3rem] h-[4.8rem] py-[1.1rem] px-[15.3rem] justify-center items-center rounded-2xl bg-primary text-18 font-500 text-white"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
