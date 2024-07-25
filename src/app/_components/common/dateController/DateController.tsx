import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';
import RightArrowIcon from '@/app/_components/icon/arrow/RightArrowIcon';
import { TabType } from '@/type';

interface Props {
  controllerType: TabType;
  date: string;
  prevHandler: () => void;
  nextHandler: () => void;
  hasPrevDay?: boolean;
  hasNextDay?: boolean;
}

export default function DateController({
  controllerType,
  date,
  prevHandler,
  nextHandler,
  hasPrevDay,
  hasNextDay,
}: Props) {
  const arrowStyle = (condition: boolean) => {
    if (controllerType === 'daily') {
      if (!condition) {
        return 'hidden';
      }
    }
    return '';
  };

  console.log('hasPrevDay', hasPrevDay);
  console.log('hasNextDay', hasNextDay);

  return (
    <div className="flex items-center justify-between w-[28.0rem] h-[3.2rem]">
      <button type="button" aria-label="LeftArrowButton" onClick={prevHandler}>
        <LeftArrowIcon arrowStyle={arrowStyle(hasPrevDay || true)} />
      </button>
      <div className="font-title">{date}</div>
      <button type="button" aria-label="RightArrowButton" onClick={nextHandler}>
        <RightArrowIcon arrowStyle={arrowStyle(hasNextDay || true)} />
      </button>
    </div>
  );
}
