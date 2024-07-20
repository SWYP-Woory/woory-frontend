import DailyMain from '@/app/(afterLogin)/(main)/home/daily/[day]/_components/daily/DailyMain';
import { cookies } from 'next/headers';

export default function DailyPage() {
  const cookieStore = cookies();
  const cookie = cookieStore.get('add_home');
  return <DailyMain cookie={cookie} />;
}
