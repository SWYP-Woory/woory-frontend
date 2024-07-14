import SocialLogin from '@/app/(beforeLogin)/_components/SocialLogin';
import Terms from '@/app/(beforeLogin)/_components/Terms';
import Logo from '@/assets/icons/logo/logo_woory.svg';

export default function Home() {
  return (
    <div className="relative min-h-screen border-2 *:absolute">
      <div className="top-[18.1rem] left-[11.6rem] w-[14.4rem] h-[5.8rem]">
        <Logo />
      </div>
      <h1 className="w-[18.9rem] h-[9.6rem] top-[29rem] left-[9.4rem] text-22 font-700 text-center">
        우리 가족과 일상을 재미있게 나누고
        <br />
        간편히 간직해보세요
      </h1>
      <div className="left-[2.4rem] top-[48.6rem]">
        <Terms />
      </div>
      <div className="flex flex-col gap-16 top-[58.6rem] left-16">
        <SocialLogin />
      </div>
    </div>
  );
}
