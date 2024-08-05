import WritePostMain from '@/app/(afterLogin)/posts/_components/WritePostMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '게시글',
  description: '게시글',
};

export default function WritePostPage() {
  return <WritePostMain />;
}
