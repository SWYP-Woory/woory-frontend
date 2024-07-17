interface Props {
  isActive: boolean;
  onClick: () => void;
}

export default function ToggleSwitch({ isActive, onClick }: Props) {
  return (
    <button
      aria-label="Toggle Button"
      type="button"
      className={`w-[4.2rem] h-[2.4rem] shadow-custom ${isActive ? 'bg-primary' : 'bg-lightGrey'} rounded-[2.0rem]`}
      onClick={onClick}
    >
      <div
        className={`w-[2.0rem] h-[2.0rem] ml-[0.2rem] shadow-custom transform transition-transform duration-300 rounded-full bg-white ${isActive && 'translate-x-[1.8rem]'}`}
      />
    </button>
  );
}
