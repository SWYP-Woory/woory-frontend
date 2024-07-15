import LeftArrowIcon from '@/app/_components/icon/arrow/LeftArrowIcon';

interface Props {
  title: string;
  hasRightButton?: boolean;
  buttonType?: 'complete' | 'save';
  isValid: boolean;
}

export default function BasicHeader({ title, hasRightButton, buttonType, isValid }: Props) {
  const buttonLabels = {
    complete: '완료',
    save: '저장',
  };

  return (
    <header className="header">
      <div className="absolute left-[1.6rem]">
        <LeftArrowIcon />
      </div>
      <div className="font-title text-18">{title}</div>
      {hasRightButton && (
        <div className={`absolute right-[1.6rem] font-body ${isValid ? 'text-black' : 'text-textDisabled'}`}>
          {buttonType && buttonLabels[buttonType]}
        </div>
      )}
    </header>
  );
}
