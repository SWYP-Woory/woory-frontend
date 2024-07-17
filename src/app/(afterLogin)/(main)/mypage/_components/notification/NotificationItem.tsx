import ToggleSwitch from '@/app/_components/switch/ToggleSwitch';

interface Props {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

export default function NotificationItem({ title, content, isActive, onClick }: Props) {
  return (
    <div className="flex items-center justify-between px-16 w-full h-[7.8rem]">
      <div>
        <div className="font-body">{title}</div>
        <div className="font-caption text-midGrey">{content}</div>
      </div>
      <ToggleSwitch isActive={isActive} onClick={onClick} />
    </div>
  );
}
