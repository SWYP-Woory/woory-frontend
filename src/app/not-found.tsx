import PopUpButton from '@/app/_components/common/button/PopUpButton';
import Logo from '@/assets/icons/logo/logo_square.svg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center min-h-screen shadow-borderShadow">
      <div className="flex items-center pt-[22.1rem] text-[6rem] text-black font-700 text-center">
        <h1>4</h1>
        <Logo />
        <h1>4</h1>
      </div>
      <h1 className="mt-[1rem] text-black text-center text-[2.2rem] font-700">다시 한번 확인해 주세요!</h1>
      <p className="flex justify-center text-center mt-20 px-[2.8rem] text-18 font-500 text-midGrey">
        지금 이동하려는 페이지는
        <br />
        사라졌거나 다른 페이지로 변경되었습니다.
        <br />
        페이지의 주소가 정확한지
        <br />
        다시 한번 확인해 주세요.
      </p>
      <Link className="mt-[5rem]" href="/">
        <PopUpButton text="우리 홈 가기" textColor="white" colorType="primary" size="large" />
      </Link>
    </div>
  );
}
