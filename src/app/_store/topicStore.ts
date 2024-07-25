import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface TopicState {
  favoriteTopicId: number;
  topicTitle: string;
  topicImage: string;
  topicDate: Date | null;
  setFavoriteTopicId: (favoriteTopicId: number) => void;
  setTopicTitle: (topic: string) => void;
  setTopicImage: (topicImage: string) => void;
  setTopicDate: (topicDate: Date) => void;
  reset: () => void;
}

export const useTopicStore = create<TopicState>()(
  devtools((set) => ({
    favoriteTopicId: -1,
    setFavoriteTopicId: (favoriteTopicId: number) => set((state) => ({ ...state, favoriteTopicId })),
    topicTitle: '',
    setTopicTitle: (topicTitle: string) => set((state) => ({ ...state, topicTitle })),
    topicImage: '',
    setTopicImage: (topicImage) => set((state) => ({ ...state, topicImage })),
    topicDate: null,
    setTopicDate: (topicDate) => set((state) => ({ ...state, topicDate })),
    reset: () => set({ topicTitle: '', topicImage: '', topicDate: null }),
  })),
);
