import WritePostMain from '@/app/(afterLogin)/posts/_components/WritePostMain';

const TOPIC = '오늘의 점심 메뉴는?';

export default function WritePostPage() {
  return <WritePostMain topic={TOPIC} />;
}
