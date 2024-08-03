import IntroduceDescription from '@/app/(afterLogin)/introduce/_components/IntroduceDescription';
import IntroduceSubTitle from '@/app/(afterLogin)/introduce/_components/IntroduceSubTitle';
import IntroduceTitle from '@/app/(afterLogin)/introduce/_components/IntroduceTitle';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import Logo from '@/assets/icons/profile/family-select-profile.svg';
import IntroduceCalendarImage from '@/assets/images/introduce/introduce_calendar.png';
import IntroduceDailyImage from '@/assets/images/introduce/introduce_daily.png';
import IntroduceFavoriteImage from '@/assets/images/introduce/introduce_favorite.png';
import IntroduceMemberImage from '@/assets/images/introduce/introduce_member.png';
import Image from 'next/image';

export default function IntroducePage() {
  return (
    <>
      <BasicHeader title="서비스 기능 소개" />
      <div className="*:flex *:flex-col *:justify-center *:items-center">
        <div className="bg-introduceOddBackground">
          <Logo width={20} height={20} className="mt-[4.8rem]" />
          <IntroduceTitle>우리 멤버</IntroduceTitle>
          <IntroduceSubTitle>
            우리끼리
            <br />
            함께하는 이야기
          </IntroduceSubTitle>
          <IntroduceDescription>
            가족을 만들어 일상을 나누고픈
            <br />
            멤버를 초대해요
          </IntroduceDescription>
          <div className="w-[32rem] mt-40">
            <Image src={IntroduceMemberImage} alt="소개페이지 멤버" placeholder="blur" />
          </div>
        </div>
        <div className="bg-introduceEvenBackground">
          <Logo width={20} height={20} className="mt-[4.8rem]" />
          <IntroduceTitle>데일리</IntroduceTitle>
          <IntroduceSubTitle>
            부담없이
            <br />
            이어가는 대화
          </IntroduceSubTitle>
          <IntroduceDescription>
            열글자 이내의 글과 한장의 사진으로
            <br />
            부담없이 대화해요
          </IntroduceDescription>
          <div className="w-[26rem] mt-40">
            <Image src={IntroduceDailyImage} alt="소개페이지 데일리" placeholder="blur" />
          </div>
        </div>
        <div className="bg-introduceOddBackground">
          <Logo width={20} height={20} className="mt-[4.8rem]" />
          <IntroduceTitle>캘린더</IntroduceTitle>
          <IntroduceSubTitle>
            우리만의
            <br />
            편리한 가족 앨범
          </IntroduceSubTitle>
          <IntroduceDescription>
            가족의 대화는 한 눈에 볼 수 있는
            <br />
            캘린더로 모아져요
          </IntroduceDescription>
          <div className="w-[26rem] mt-40">
            <Image src={IntroduceCalendarImage} alt="소개페이지 캘린더" placeholder="blur" />
          </div>
        </div>
        <div className="bg-introduceEvenBackground">
          <Logo width={20} height={20} className="mt-[4.8rem]" />
          <IntroduceTitle>마음함</IntroduceTitle>
          <IntroduceSubTitle>
            우리만의
            <br />
            추억 저장 공간
          </IntroduceSubTitle>
          <IntroduceDescription>
            매일 다른 주제로 재미있게 소통하고
            <br />
            마음에 든 날을 간직해요
          </IntroduceDescription>
          <div className="w-[36rem] mt-40">
            <Image src={IntroduceFavoriteImage} alt="소개페이지 마음함" placeholder="blur" />
          </div>
        </div>
      </div>
    </>
  );
}
