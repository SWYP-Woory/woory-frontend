import LinkIcon from '@/app/_components/icon/link/LinkIcon';

export default function MemberAdd() {
  return (
    <button type="button" aria-label="link" className="w-full">
      <div className="flex justify-between items-center p-16 bg-white border-bgGrey border-t border-b">
        <div className="flex items-center gap-8">
          <LinkIcon />
          <div className="flex flex-col">
            <div className="font-body font-600 text-start">새멤버 초대하기</div>
            <div className="font-caption ">링크를 받은 사람이 우리와 함께할 수 있어요</div>
          </div>
        </div>
      </div>
    </button>
  );
}
