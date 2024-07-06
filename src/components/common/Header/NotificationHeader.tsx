import NoticeIcon from '@/components/icon/notification/NoticeIcon';

interface Props {
  title: string;
  isActive?: boolean;
}

export default function NotificationHeader({ title, isActive }: Props) {
  return (
    <header className="header">
      <div className="font-title text-18">{title}</div>
      <div className="absolute right-[1.6rem]">
        <NoticeIcon isActive={isActive} />
      </div>
    </header>
  );
}
