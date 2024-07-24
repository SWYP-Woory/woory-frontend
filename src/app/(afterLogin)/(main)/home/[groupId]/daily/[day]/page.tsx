import DailyMain from '@/app/(afterLogin)/(main)/home/[groupId]/daily/[day]/_components/daily/DailyMain';

interface Props {
  params: {
    groupId: number;
    day: Date;
  };
}

export default function DailyPage({ params }: Props) {
  return <DailyMain groupId={params.groupId} day={params.day} />;
}
