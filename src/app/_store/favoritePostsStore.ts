import { getData, postData } from '@/app/_api/api';
import { apiRoutes } from '@/app/_api/apiRoutes';
import { getCookies } from '@/app/_store/cookie/cookies';
import { FavoritePostType } from '@/type';
import { create } from 'zustand';

interface FavoritePostsState {
  favoritePosts: FavoritePostType[];
  fetchFavoritePosts: () => Promise<void>;
  toggleFavorite: (topicId: number) => Promise<void>;
}

export const useFavoritePostsStore = create<FavoritePostsState>((set) => ({
  favoritePosts: [],

  fetchFavoritePosts: async () => {
    const groupId = getCookies('groupId');
    const { data } = await getData({ path: `${apiRoutes.favorites}/${groupId}/favorites` });
    set({ favoritePosts: data });
  },

  toggleFavorite: async (topicId: number) => {
    const groupId = getCookies('groupId');
    await postData({ path: `${apiRoutes.favorites}/${groupId}/favorites/${topicId}` });
  },
}));
