import FavoritePost from '@/app/(afterLogin)/favorites/_components/FavoritePost';

interface Props {
  data: {
    content: string;
    imgUrl: string;
    postDate: Date;
  }[];
}

export default function FavoritePostView({ data }: Props) {
  if (data.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center text-center w-full flex-grow font-body text-textDisabled">
        마음을 누른 글이 없어요. <br />
        우리에 올라온 글을 확인하고 <br />
        마음을 눌러보세요!
      </div>
    );
  }

  return data.map(({ content, imgUrl, postDate }) => (
    <FavoritePost content={content} imgUrl={imgUrl} postDate={postDate} />
  ));
}
