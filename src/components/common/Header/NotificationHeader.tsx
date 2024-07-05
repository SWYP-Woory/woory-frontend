import NoticeIcon from '@/components/icon/notification/NoticeIcon';

interface Props {
  title: string;
}

export default function NotificationHeader({ title }: Props) {
  return (
    <header className="header">
      <div className="font-title text-18">{title}</div>
      <div className="absolute right-[1.6rem]">
        <NoticeIcon />
      </div>
    </header>
  );
}
