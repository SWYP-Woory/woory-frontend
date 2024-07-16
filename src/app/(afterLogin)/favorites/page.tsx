import FavoritePostView from '@/app/(afterLogin)/favorites/_components/FavoritePostView';
import BottomMenuBar from '@/app/_components/common/bottomMenuBar/BottomMenuBar';
import NotificationHeader from '@/app/_components/common/header/NotificationHeader';

const HEDER_TITLE = '마음함';
const DUMMY_DATA = [
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '먹고싶은 음식 말하기',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '먹고싶은 음식 말하기',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '먹고싶은 음식 말하기',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '먹고싶은 음식 말하기',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '먹고싶은 음식 말하기',
    imgUrl: '',
    postDate: new Date(),
  },
  {
    content: '오늘 먹은 점심자랑하기',
    imgUrl: 'https://cdn.smarttoday.co.kr/news/photo/202002/img_4656_0.jpg',
    postDate: new Date(),
  },
  {
    content: '오늘의 기분은?',
    imgUrl: '',
    postDate: new Date(),
  },
];

export default function FavoritesPage() {
  return (
    <div className="flex flex-col min-h-screen relative bg-white shadow-borderShadow">
      <NotificationHeader title={HEDER_TITLE} />
      <div className="flex flex-col flex-grow py-[0.7rem]">
        <FavoritePostView data={DUMMY_DATA} />
      </div>
      <BottomMenuBar />
    </div>
  );
}
