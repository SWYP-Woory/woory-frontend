import DailyView from '@/app/_components/daily/DailyView';
import { Meta, StoryObj } from '@storybook/react';

const TOPIC = '내일 지구가 멸망한다면';
const PROFILE_IMAGE =
  'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4';
const POST_URL = 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg';

const DUMMY_DATA = {
  profileUrl: PROFILE_IMAGE,
  name: '아빠',
  content: '가족들과 함께 있기',
  comment: 1,
  reaction: 2,
  postUrl: POST_URL,
  isEdit: true,
};

const meta: Meta<typeof DailyView> = {
  title: 'DailyView',
  component: DailyView,
};

export default meta;

type Story = StoryObj<typeof DailyView>;

export const Default: Story = {
  args: {
    topic: TOPIC,
    data: DUMMY_DATA,
  },
};
