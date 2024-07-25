import Right from '@/assets/icons/arrow/rightArrow.svg';

interface Props {
  arrowStyle?: string;
}

export default function RightArrowIcon({ arrowStyle = '' }: Props) {
  return <Right className={`${arrowStyle}`} />;
}
