import Main from '@/app/(beforeLogin)/_components/Main';
import RedirectHandler from '@/app/(beforeLogin)/_components/RedirectHandler';
import { getSession } from '@/app/_store/cookie/session';

export default async function Home() {
  const accessToken = await getSession('AccessToken');
  const groupId = await getSession('groupId');

  return (
    <>
      <RedirectHandler accessToken={accessToken} groupId={groupId} />
      {!accessToken && <Main />}
    </>
  );
}
