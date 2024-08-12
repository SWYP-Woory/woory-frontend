import Right from '@/assets/icons/arrow/rightArrow.svg';

interface Props {
  arrowStyle?: string;
}

export default function RightArrowIcon({ arrowStyle = '' }: Props) {
  return (
    <div className="flex justify-center items-center w-[2.4rem] h-[2.4rem] group">
      <Right className={`${arrowStyle} fill-black group-hover:fill-midGrey group-active:fill-darkGrey`} />
    </div>
  );
}
