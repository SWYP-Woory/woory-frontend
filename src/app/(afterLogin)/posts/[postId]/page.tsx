import DailyPostView from '@/app/(afterLogin)/posts/[postId]/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentView';
import InputComment from '@/app/(afterLogin)/posts/[postId]/_components/input/InputComment';
import Border from '@/app/_components/common/border/Border';
import BasicHeader from '@/app/_components/common/header/BasicHeader';
import { DailyPostType } from '@/type';

const DUMMY_DATA: DailyPostType = {
  profileUrl: 'https://avatars.githubusercontent.com/u/49144662?s=400&u=903e697529c3b51f9c69bc3885c8f9be3d754028&v=4',
  name: '아빠',
  content: '나무들이 좋다',
  postUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
  isEdit: true,
  topic: '가장 좋아하는 사진',
  reactions: [
    {
      reactionType: 'heart',
      count: 2,
      isActive: true,
    },
    {
      reactionType: 'smile',
      count: 1,
      isActive: false,
    },
    {
      reactionType: 'thumbs',
      count: 3,
      isActive: true,
    },
    {
      reactionType: 'surprise',
      count: 3,
      isActive: true,
    },
  ],
};

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

export default function PostPage() {
  return (
    <>
      <div>
        <BasicHeader title="게시글" />
        <DailyPostView data={DUMMY_DATA} />
        <Border />
      </div>
      <CommentView data={DUMMY_COMMENT} />
      <InputComment />
    </>
  );
}
