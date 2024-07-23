import FavoritePost from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePost';
import { FavoritePostType } from '@/type';

const DUMMY_DATA = [
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202406/mn_52620_20240616152756_1.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
];

export default function FavoritePostView() {
  const data: FavoritePostType[] = DUMMY_DATA;
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
