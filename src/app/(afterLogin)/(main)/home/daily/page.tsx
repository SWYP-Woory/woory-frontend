import DailyMain from '@/app/(afterLogin)/(main)/home/daily/_components/DailyMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '데일리',
  description: '데일리',
};

export default function DailyPage() {
  return <DailyMain />;
}
