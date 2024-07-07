import classNames from 'classnames';

interface Props {
  text: string;
  textColor: 'midGrey' | 'white';
  colorType: 'primary' | 'lightGrey';
  size: 'small' | 'large';
}

export default function PopUpButton({ text, textColor, colorType, size }: Props) {
  const classes = classNames(
    'flex justify-center items-center text-18 h-[4.8rem] font-500 rounded-2xl',
    {
      'text-midGrey': textColor === 'midGrey',
      'text-white': textColor === 'white',
    },
    {
      'bg-primary': colorType === 'primary',
      'bg-lightGrey': colorType === 'lightGrey',
    },
    {
      'w-[13.6rem]': size === 'small',
      'w-[16.4rem]': size === 'large',
    },
  );

  return (
    <button type="button" className={classes}>
      {text}
    </button>
  );
}
