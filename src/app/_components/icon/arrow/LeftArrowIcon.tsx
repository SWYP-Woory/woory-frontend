import Left from '@/assets/icons/arrow/leftArrow.svg';

interface Props {
  arrowStyle: string;
}

export default function LeftArrowIcon({ arrowStyle }: Props) {
  return <Left className={`${arrowStyle}`} />;
}
