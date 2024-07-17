interface Props {
  icon: React.ReactNode;
  title: string;
}

export default function OptionTitle({ icon, title }: Props) {
  return (
    <div className="flex pl-16 items-center gap-[1.0rem] w-full h-[5.8rem]">
      {icon}
      <div className="font-body font-700">{title}</div>
    </div>
  );
}
