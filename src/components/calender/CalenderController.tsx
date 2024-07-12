import LeftArrowIcon from '@/components/icon/arrow/LeftArrowIcon';
import RightArrowIcon from '@/components/icon/arrow/RightArrowIcon';
import { format } from 'date-fns';

interface Props {
  currentDate: Date;
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
}

export default function CalenderController({ currentDate, prevMonthHandler, nextMonthHandler }: Props) {
  return (
    <div className="flex items-center justify-between w-[28.0rem] h-[3.2rem]">
      <button type="button" aria-label="LeftArrowButton" onClick={prevMonthHandler}>
        <LeftArrowIcon />
      </button>
      <div className="font-title">{format(currentDate, 'yyyy.MM')}</div>
      <button type="button" aria-label="RightArrowButton" onClick={nextMonthHandler}>
        <RightArrowIcon />
      </button>
    </div>
  );
}
