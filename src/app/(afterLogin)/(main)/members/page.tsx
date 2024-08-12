import MemberMain from '@/app/(afterLogin)/(main)/members/_components/MemberMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '우리 멤버',
  description: '우리 멤버',
};

export default function MemberPage() {
  return <MemberMain />;
}
