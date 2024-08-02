import { FavoritePostType } from '@/type';
import { create } from 'zustand';

interface FavoritePostsState {
  favoritePosts: FavoritePostType[];
  setFavoritePosts: (favoritePosts: FavoritePostType[]) => void;
}

export const useFavoritePostsStore = create<FavoritePostsState>((set) => ({
  favoritePosts: [],
  setFavoritePosts: (favoritePosts: FavoritePostType[]) => set({ favoritePosts }),
}));
