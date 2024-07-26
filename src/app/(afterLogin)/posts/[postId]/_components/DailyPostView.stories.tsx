import DailyPostView from '@/app/(afterLogin)/posts/[postId]/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentView';
import Border from '@/app/_components/common/border/Border';
import { Meta, StoryObj } from '@storybook/react';

const DUMMY_COMMENT = [
  {
    profile: {
      profileUrl: '',
      name: '엄마',
      isEdit: false,
    },
    comment: 'This is a comment',
    replies: [
      {
        profile: {
          profileUrl: '',
          name: '아빠',
          isEdit: true,
        },
        comment: 'This is a reply',
      },
      {
        profile: {
          profileUrl: '',
          name: '아들',
          isEdit: false,
        },
        comment: 'This is a reply',
      },
    ],
  },
  {
    profile: {
      profileUrl: '',
      name: '엄마',
      isEdit: false,
    },
    comment: 'This is a comment',
    replies: [
      {
        profile: {
          profileUrl: '',
          name: '아빠',
          isEdit: true,
        },
        comment: 'This is a reply',
      },
      {
        profile: {
          profileUrl: '',
          name: '아들',
          isEdit: false,
        },
        comment: 'This is a reply',
      },
    ],
  },
];

function DailyPostViewTest() {
  return (
    <div className="w-[37.5rem] bg-white">
      <DailyPostView postId={0} />
      <Border />
      <CommentView data={DUMMY_COMMENT} />
    </div>
  );
}

const meta: Meta<typeof DailyPostViewTest> = {
  title: 'DailyPostViewTest',
  component: DailyPostViewTest,
};

export default meta;

type Story = StoryObj<typeof DailyPostViewTest>;

export const Default: Story = {
  args: {},
};
