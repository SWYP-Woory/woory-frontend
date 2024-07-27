import DailyPostView from '@/app/(afterLogin)/posts/[postId]/_components/DailyPostView';
import CommentView from '@/app/(afterLogin)/posts/[postId]/_components/comment/CommentView';
import InputComment from '@/app/(afterLogin)/posts/[postId]/_components/input/InputComment';
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
        <div className="flex flex-col flex-grow">
          <CommentView postId={params.postId} />
        </div>
      </div>
      <InputComment postId={params.postId} />
    </>
  );
}
