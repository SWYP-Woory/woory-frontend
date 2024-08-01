'use client';

import ModalBorder from '@/app/_components/common/border/ModalBorder';
import BottomSheetButton from '@/app/_components/common/button/BottomSheetButton';
import { PrivacyPolicyDescription, TermsOfUseDescription } from '@/app/_components/common/modal/AgreementDescription';
import ModalBackground from '@/app/_components/common/modal/ModalBackground';
import { useModalClosed } from '@/app/_hooks/useModal';

interface Props {
  agreementType: 'termsOfUse' | 'privacyPolicy';
}

export default function AgreementModal({ agreementType }: Props) {
  const { isClosed, handleClose } = useModalClosed();
  const title = agreementType === 'termsOfUse' ? '서비스 이용약관' : '개인정보 처리방침';
  const description = agreementType === 'termsOfUse' ? <TermsOfUseDescription /> : <PrivacyPolicyDescription />;

  return (
    <ModalBackground isClosed={isClosed} onClose={handleClose}>
      <div
        className={`fixed flex flex-col bottom-0 justify-center items-center w-[37.5rem] h-4/5 bg-white rounded-t-[4rem] z-10 ${isClosed ? 'bottomSheet-slide-down' : 'bottomSheet-slide-up'}`}
      >
        <ModalBorder />
        <h1 className="pt-40 flex justify-center text-center text-22 font-700 text-black">{title}</h1>
        <div className="pt-16 h-4/5 px-16 overflow-y-scroll text-14 text-midGrey">{description}</div>
        <div className="pt-16 pb-32 px-16">
          <BottomSheetButton text="닫기" onClick={handleClose} />
        </div>
      </div>
    </ModalBackground>
  );
}
