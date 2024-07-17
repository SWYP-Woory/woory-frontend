import BasicHeader from '@/app/_components/common/header/BasicHeader';
import ControlHeader from '@/app/_components/common/header/ControlHeader';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';
import { Meta, StoryObj } from '@storybook/react';

function Header() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-8">
        <h1 className="text-16 bg-white w-fit p-4">BasicHeader</h1>
        <BasicHeader title="title" hasRightButton buttonType="complete" />
        <BasicHeader title="title" hasRightButton buttonType="save" />
        <BasicHeader title="title" hasRightButton={false} />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-16 bg-white w-fit p-4">NoticeHeader </h1>
        <NotificationHeader />
        <NotificationHeader />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-16 bg-white w-fit p-4">ControlHeader</h1>
        <ControlHeader />
      </div>
    </div>
  );
}

const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
