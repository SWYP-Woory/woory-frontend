import RcHeartIcon from '../icon/reaction/RcHeartIcon';

interface Props {
  count: number;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HeartChip({ count, isClicked, setIsClicked }: Props) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button
      type="button"
      className="flex justify-evenly items-center bg-bgGrey w-[5.9rem] h-[3.2rem] rounded-[2.0rem]"
      onClick={handleClick}
    >
      <RcHeartIcon size="small" />
      <div className={`${isClicked ? 'text-primary' : 'text-black'} font-body`}>{count}</div>
    </button>
  );
}
