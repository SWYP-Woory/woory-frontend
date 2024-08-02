import classNames from 'classnames';

interface Props {
  text: string;
  textColor: 'midGrey' | 'white';
  colorType: 'primary' | 'bgGrey';
  size: 'small' | 'large';
  onClick?: () => void;
}

export default function PopUpButton({ text, textColor, colorType, size, onClick }: Props) {
  const classes = classNames(
    'flex justify-center items-center text-18 h-[4.8rem] font-500 rounded-2xl',
    {
      'text-midGrey': textColor === 'midGrey',
      'text-white': textColor === 'white',
    },
    {
      'bg-primary active:bg-primaryDark': colorType === 'primary',
      'bg-bgGrey active:bg-lightGrey': colorType === 'bgGrey',
    },
    {
      'w-[13.6rem]': size === 'small',
      'w-[16.4rem]': size === 'large',
    },
  );

  return (
    <button type="button" className={classes} onClick={onClick}>
      {text}
    </button>
  );
}
