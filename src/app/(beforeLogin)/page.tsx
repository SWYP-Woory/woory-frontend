import Main from '@/app/(beforeLogin)/_components/Main';
import { getCalendarTime } from '@/utils/getTime';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('AccessToken');
  const groupId = cookieStore.get('groupId')?.value;

  if (accessToken) {
    const today = getCalendarTime(new Date());
    if (groupId) redirect(`/home/${groupId}/daily/${today}`);
    redirect(`/family-select`);
  }
  return <Main />;
}
