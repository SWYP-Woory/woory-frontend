import Main from '@/app/(beforeLogin)/_components/Main';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Home() {
  const cookieStore = cookies();
  const accessToken = cookieStore.get('AccessToken');
  const groupId = cookieStore.get('groupId')?.value;

  if (accessToken) {
    if (groupId) {
      redirect(`/home/daily`);
    }
    redirect(`/family-select`);
  }
  return <Main />;
}
