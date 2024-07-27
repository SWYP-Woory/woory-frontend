import DailyPostView from '@/app/(afterLogin)/posts/[postId]/_components/DailyPostView';
import CommentMain from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentMain';
import Border from '@/app/_components/common/border/Border';
import BasicHeader from '@/app/_components/common/header/BasicHeader';

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
        <CommentMain postId={params.postId} />
      </div>
    </>
  );
}
