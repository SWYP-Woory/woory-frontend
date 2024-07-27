'use client';

import ModalBorder from '@/app/_components/common/border/ModalBorder';
import BottomSheetButton from '@/app/_components/common/button/BottomSheetButton';
import { PrivacyPolicyDescription, TermsOfUseDescription } from '@/app/_components/common/modal/AgreementDescription';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import { useRouter } from 'next/navigation';

interface Props {
  agreementType: 'termsOfUse' | 'privacyPolicy';
}

export default function AgreementModal({ agreementType }: Props) {
  const title = agreementType === 'termsOfUse' ? '서비스 이용약관' : '개인정보 처리방침';
  const description = agreementType === 'termsOfUse' ? <TermsOfUseDescription /> : <PrivacyPolicyDescription />;
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  return (
    <ModalBackground>
      <div className="fixed bottom-0 justify-center items-center w-[37.5rem] h-[73.2rem] bg-white rounded-t-[4rem] z-10 *:absolute">
        <ModalBorder />
        <h1 className="top-40 left-[11.4rem] text-center text-22 font-700 text-black">{title}</h1>
        <div className="top-[8.8rem] h-[54.8rem] px-16 overflow-y-scroll text-14 text-midGrey">{description}</div>
        <div className="top-[65.2rem] left-16">
          <BottomSheetButton text="닫기" onClick={onClickClose} />
        </div>
      </div>
    </ModalBackground>
  );
}
