interface Props {
  title: string;
  content: string;
  onClick: () => void;
}

export default function FamilyItem({ title, content, onClick }: Props) {
  return (
    <button type="button" aria-label="family setting" onClick={onClick} className="w-full mypage-module">
      <div className="flex flex-col justify-center px-16 w-full h-[7.8rem]">
        <div className="font-body text-start">{title}</div>
        <div className="font-caption text-midGrey text-start">{content}</div>
      </div>
    </button>
  );
}
