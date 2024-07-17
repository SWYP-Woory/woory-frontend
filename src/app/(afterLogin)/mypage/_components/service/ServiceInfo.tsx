import OptionTitle from '@/app/(afterLogin)/mypage/_components/OptionTitle';
import ServiceInfoIcon from '@/assets/icons/info/serviceInfo.svg';

export default function ServiceInfo() {
  return (
    <div>
      <OptionTitle icon={<ServiceInfoIcon />} title="서비스 정보" />
      <button type="button" aria-label="term of use" className="setting-button">
        서비스 이용약관
      </button>
      <button type="button" aria-label="privacy policy" className="setting-button">
        개인정보 처리 방침
      </button>
      <button type="button" aria-label="service inquiry" className="setting-button">
        서비스 관련 문의
      </button>
    </div>
  );
}
