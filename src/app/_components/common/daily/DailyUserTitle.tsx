import KebabMenuIcon from '@/app/_components/icon/kebabMenu/KebabMenuIcon';

interface Props {
  name: string;
  isEdit: boolean;
}

export default function DailyUserTitle({ name, isEdit }: Props) {
  return (
    <div className="flex flex-grow justify-between items-center">
      <div className="font-bodyBold">{name}</div>
      {isEdit && <KebabMenuIcon />}
    </div>
  );
}
