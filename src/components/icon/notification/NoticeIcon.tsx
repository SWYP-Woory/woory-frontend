import ActiveNotice from '@/../../public/notification/activeNotice.svg';
import Notice from '@/../../public/notification/notice.svg';

interface Props {
  isActive: boolean;
}

export default function NoticeIcon({ isActive }: Props) {
  return isActive ? <ActiveNotice width="2.4rem" height="2.4rem" /> : <Notice width="2.4rem" height="2.4rem" />;
}
