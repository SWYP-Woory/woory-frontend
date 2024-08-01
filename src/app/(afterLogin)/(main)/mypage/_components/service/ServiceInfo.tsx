import OptionTitle from '@/app/(afterLogin)/(main)/mypage/_components/OptionTitle';
import ServiceInfoIcon from '@/assets/icons/info/serviceInfo.svg';
import Link from 'next/link';

export default function ServiceInfo() {
  return (
    <div className="flex flex-col">
      <OptionTitle icon={<ServiceInfoIcon />} title="서비스 정보" />
      <Link href="/mypage" className="setting-button">
        서비스 기능 소개
      </Link>
      <Link href="/mypage/terms-of-use" className="setting-button" scroll={false}>
        서비스 이용약관
      </Link>
      <Link href="/mypage/privacy-policy" className="setting-button" scroll={false}>
        개인정보 처리 방침
      </Link>
      <Link href="/mypage/service-inquiry" className="setting-button" scroll={false}>
        서비스 관련 문의
      </Link>
    </div>
  );
}
