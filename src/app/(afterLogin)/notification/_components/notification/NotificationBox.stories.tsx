import NotificationBox from '@/app/(afterLogin)/notification/_components/notification/NotificationBox';
import { Meta, StoryObj } from '@storybook/react';

const TOPIC = '오늘 먹은 점심 자랑하기';
const OPPONENT = '김아빠';

function NotificationBoxes() {
  const date = new Date();
  return (
    <div className="flex flex-col gap-12">
      <NotificationBox notiType="topic" topic={TOPIC} notiTime={date} />
      <NotificationBox isRead notiType="post" opponent={OPPONENT} notiTime={date} />
      <NotificationBox notiType="reaction" opponent={OPPONENT} notiTime={date} reactionNotiType="comment" />
    </div>
  );
}

const meta: Meta<typeof NotificationBoxes> = {
  title: 'NotificationBox',
  component: NotificationBoxes,
};

export default meta;

type Story = StoryObj<typeof NotificationBoxes>;

export const Default: Story = {};
