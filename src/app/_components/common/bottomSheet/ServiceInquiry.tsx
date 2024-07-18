import BottomSheetButton from '@/app/_components/common/button/BottomSheetButton';

export default function ServiceInquiry() {
  return (
    <>
      <div className="absolute top-[4rem] left-[11.2rem] h-[3.2rem]">
        <h2 className="text-[2.2rem] font-700 text-center">서비스 관련 문의</h2>
      </div>
      <div className="absolute top-[8.8rem] left-[1.6rem] w-[33.5rem] text-midGrey text-18 text-500">
        <div className="flex flex-col justify-between  h-[13.3rem]">
          <div>
            &apos;우리&apos; 를 이용해주셔서 감사합니다.
            <br />
            모든 문의는 아래의 메일 주소로 보내주시면
            <br />
            답변 드리겠습니다.
            <br />
          </div>
          <div>wooryofficial@gmail.com</div>
        </div>
      </div>
      <div className="absolute bottom-[3.2rem] left-[1.6rem]">
        <BottomSheetButton text="확인" />
      </div>
    </>
  );
}
