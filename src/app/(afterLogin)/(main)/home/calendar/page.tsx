import CalendarView from '@/app/(afterLogin)/(main)/home/calendar/_components/CalendarView';
import UpperTabBar from '@/app/_components/common/upperTabBar/UpperTabBar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '캘린더',
  description: '캘린더',
};

export default function CalendarPage() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="flex flex-col flex-grow items-center mt-24">
        <CalendarView />
      </div>
    </div>
  );
}
