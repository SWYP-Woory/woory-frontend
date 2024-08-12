import Left from '@/assets/icons/arrow/leftArrow.svg';

interface Props {
  arrowStyle?: string;
}

export default function LeftArrowIcon({ arrowStyle = '' }: Props) {
  return (
    <div className="flex justify-center items-center w-[2.4rem] h-[2.4rem] group">
      <Left className={`${arrowStyle} fill-black group-hover:fill-midGrey group-active:fill-darkGrey`} />
    </div>
  );
}
