import SocialLogin from '@/app/(beforeLogin)/_components/SocialLogin';
import Terms from '@/app/(beforeLogin)/_components/Terms';
import Logo from '@/assets/icons/logo/logo_woory.svg';

export default function Main() {
  return (
    <div className="flex flex-col justify-center items-center pt-120 px-16">
      <div className="flex justify-center items-center w-160 h-160">
        <div className="w-[14.4rem] h-[5.8rem]">
          <Logo />
        </div>
      </div>
      <h1 className="flex flex-col text-22 font-700 text-center">
        우리 가족과 일상을
        <br />
        재미있게 나누고
        <br />
        간편히 간직해보세요
      </h1>
      <div className="flex flex-col pt-[13.2rem]">
        <Terms />
        <div className="flex flex-col pt-48 gap-16">
          <SocialLogin />
        </div>
      </div>
    </div>
  );
}
