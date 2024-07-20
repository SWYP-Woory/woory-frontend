import FavoritePostView from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePostView';

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

export default function FavoritesPage() {
  return (
    <div className="flex flex-col flex-grow py-[0.7rem]">
      <FavoritePostView data={DUMMY_DATA} />
    </div>
  );
}
