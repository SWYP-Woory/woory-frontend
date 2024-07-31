import DailyView from '@/app/(afterLogin)/(main)/home/daily/_components/DailyView';
import PostButton from '@/app/(afterLogin)/(main)/home/daily/_components/PostButton';
import UpperTabBar from '@/app/_components/common/upperTabBar/UpperTabBar';

export default function DailyMain() {
  return (
    <>
      <div className="mt-8 mx-16">
        <UpperTabBar />
      </div>
      <div className="flex flex-col flex-grow mt-24">
        <DailyView />
      </div>
      <PostButton />
    </>
  );
}
