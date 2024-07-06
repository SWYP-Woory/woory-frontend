import kakaoImage from '@/assets/images/kakao-image.png';
import Image from 'next/image';

export default function KakaoButton() {
  return (
    <button
      type="button"
      className="flex w-[34.3rem] h-[4.8rem] py-[1.1rem] px-[8.7rem] justify-between items-center rounded-2xl border bg-white p-4 gap-4"
    >
      <Image src={kakaoImage} alt="카카오톡 이미지" style={{ width: '2.4rem', height: '2.2rem' }} />
      <span className="text-black font-500 text-18">카카오톡으로 시작</span>
    </button>
  );
}
