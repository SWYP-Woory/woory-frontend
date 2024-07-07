interface Props {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ToggleSwitch({ isClicked, setIsClicked }: Props) {
  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <button
      aria-label="Toggle Button"
      type="button"
      className={`w-[4.2rem] h-[2.4rem] shadow-custom ${isClicked ? 'bg-primary' : 'bg-lightGrey'} rounded-[2.0rem]`}
      onClick={handleClick}
    >
      <div
        className={`w-[2.0rem] h-[2.0rem] ml-[0.2rem] shadow-custom transform transition-transform duration-300 rounded-full bg-white ${isClicked && 'translate-x-[1.8rem]'}`}
      />
    </button>
  );
}
