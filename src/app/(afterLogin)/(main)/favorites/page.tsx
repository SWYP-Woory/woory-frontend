import FavoritePostView from '@/app/(afterLogin)/(main)/favorites/_components/FavoritePostView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '마음함',
  description: '마음함',
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col flex-grow py-[0.7rem]">
      <FavoritePostView />
    </div>
  );
}
