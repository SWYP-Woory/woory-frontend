import PopUpButton from '@/app/_components/common/button/PopUpButton';

interface Props {
  title: string;
  content: string;
  buttonText: string;
  onCancel: () => void;
  onExecute: () => void;
  isSmall?: boolean;
}

export default function Modal({ title, content, buttonText, onCancel, onExecute, isSmall }: Props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-modalBackground z-20">
      <div
        className={`flex flex-col items-center justify-evenly w-[31.1rem] ${isSmall ? 'h-[21.0rem]' : 'h-[32.0rem]'} bg-white rounded-[2.0rem]`}
      >
        <div className="font-title">{title}</div>
        <div className="flex items-center justify-center w-[25.4rem]  font-body text-midGrey  text-center whitespace-pre-wrap">
          {content}
        </div>
        <div className="flex gap-[1.0rem]">
          <PopUpButton text="취소" textColor="midGrey" colorType="lightGrey" size="small" onClick={onCancel} />
          <PopUpButton text={buttonText} textColor="white" colorType="primary" size="small" onClick={onExecute} />
        </div>
      </div>
    </div>
  );
}
