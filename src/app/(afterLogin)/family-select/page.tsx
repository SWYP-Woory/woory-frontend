import FamilySelectMain from '@/app/(afterLogin)/family-select/_components/FamilySelectMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '가족 관리',
  description: '가족 관리',
};

export default function FamilySelectPage() {
  return <FamilySelectMain />;
}
