import DailyPostView from '@/app/(afterLogin)/posts/[postId]/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentView';
import InputComment from '@/app/(afterLogin)/posts/[postId]/_components/input/InputComment';
import Border from '@/app/_components/common/border/Border';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

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
          name: '아들',
          isEdit: false,
        },
        comment: 'This is a reply',
      },
      {
        profile: {
          profileUrl: '',
          name: '아빠',
          isEdit: true,
        },
        comment: 'This is a reply',
      },
    ],
  },
];

interface Props {
  params: {
    postId: number;
  };
}

export default function PostPage({ params }: Props) {
  return (
    <>
      <BasicHeader title="게시글" />
      <div className="flex-grow flex flex-col">
        <div className="flex-shrink-0">
          <DailyPostView postId={params.postId} />
          <Border />
        </div>
        <div className="flex flex-col flex-grow">
          <CommentView data={DUMMY_COMMENT} postId={params.postId} />
        </div>
      </div>
      <InputComment postId={params.postId} />
    </>
  );
}
