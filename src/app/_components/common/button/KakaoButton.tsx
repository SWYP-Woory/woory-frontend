import kakaoImage from '@/assets/images/kakao-image.png';
import Image from 'next/image';

interface Props {
  isActive?: boolean;
}

export default function KakaoButton({ isActive }: Props) {
  return (
    <button
      type="button"
      className={`${isActive ? 'border bg-white' : 'border-lightGrey bg-lightGrey'} flex w-[34.3rem] h-[4.8rem] py-[1.1rem] px-[8.7rem] justify-between items-center rounded-2xl p-4 gap-4`}
    >
      <Image src={kakaoImage} alt="카카오톡 이미지" style={{ width: '2.4rem', height: '2.2rem' }} />
      <span className={`${isActive ? 'text-black' : 'text-textDisabled'} font-500 text-18`}>카카오톡으로 시작</span>
    </button>
  );
}
