import PopUpButton from '@/components/common/button/PopUpButton';

interface Props {
  title: string;
  content: string;
  buttonText: string;
}

export default function Modal({ title, content, buttonText }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-[31.1rem] h-[32.0rem] bg-white rounded-[2.0rem]">
      <div className="font-title">{title}</div>
      <div className="w-[25.4rem] h-[10.4rem]  font-body text-midGrey mt-[3.2rem] mb-[4.8rem] text-center">
        {content}
      </div>
      <div className="flex gap-[1.0rem]">
        <PopUpButton text="취소" textColor="midGrey" colorType="lightGrey" size="small" />
        <PopUpButton text={buttonText} textColor="white" colorType="primary" size="small" />
      </div>
    </div>
  );
}
