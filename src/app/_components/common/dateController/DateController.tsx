import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import RightArrowIcon from '@/app/_components/icon/arrow/RightArrowIcon';

interface Props {
  date: string;
  prevHandler: () => void;
  nextHandler: () => void;
}

export default function DateController({ date, prevHandler, nextHandler }: Props) {
  return (
    <div className="flex items-center justify-between w-[28.0rem] h-[3.2rem]">
      <button type="button" aria-label="LeftArrowButton" onClick={prevHandler}>
        <LeftArrowIcon />
      </button>
      <div className="font-title">{date}</div>
      <button type="button" aria-label="RightArrowButton" onClick={nextHandler}>
        <RightArrowIcon />
      </button>
    </div>
  );
}
