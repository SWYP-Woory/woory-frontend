interface Props {
  isValid: boolean;
}

export default function ControlHeader({ isValid }: Props) {
  return (
    <header className="header justify-between px-[1.6rem]">
      <button type="button" className="font-body">
        취소
      </button>
      <button type="button" className={`font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}>
        완료
      </button>
    </header>
  );
}
