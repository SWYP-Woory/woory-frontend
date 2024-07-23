import CalendarView from '@/app/(afterLogin)/(main)/home/[groupId]/calendar/[month]/_components/calendar/CalendarView';
import UpperTabBar from '@/app/_components/upperTabBar/UpperTabBar';

export default function CalendarPage() {
  return (
    <>
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="flex flex-col items-center mt-24">
        <CalendarView />
      </div>
    </>
  );
}
