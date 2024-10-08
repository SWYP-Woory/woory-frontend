import LinkIcon from '@/app/_components/icon/link/LinkIcon';

interface Props {
  onClick: () => void;
}

export default function MemberAdd({ onClick }: Props) {
  return (
    <button type="button" aria-label="link" className="w-full" onClick={onClick}>
      <div className="flex justify-between items-center p-16 bg-white border-bgGrey border-t border-b hover:bg-bgGrey active:bg-lightGrey">
        <div className="flex items-center gap-8">
          <LinkIcon />
          <div className="flex flex-col">
            <div className="font-body text-start">새 멤버 초대하기</div>
            <div className="font-caption text-midGrey ">링크를 받은 사람이 우리와 함께할 수 있어요</div>
          </div>
        </div>
      </div>
    </button>
  );
}
