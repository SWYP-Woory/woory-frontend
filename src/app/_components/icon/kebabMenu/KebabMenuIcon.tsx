'use client';

import KebabMenu from '@/assets/icons/kebabMenu/kebabMenu.svg';

interface Props {
  isActive: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function KebabMenuIcon({ isActive, onClick }: Props) {
  return (
    <button
      type="button"
      aria-label="kebabMenu"
      onClick={onClick}
      className="flex justify-center w-[2.4rem] h-[2.4rem] group"
    >
      <KebabMenu
        width="0.4rem"
        height="2.0rem"
        className={`${isActive ? 'fill-primary' : 'fill-midGrey group-hover:fill-darkGrey'}`}
      />
    </button>
  );
}
