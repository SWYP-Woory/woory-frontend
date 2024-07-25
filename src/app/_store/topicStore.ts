import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

interface TopicState {
  topicTitle: string;
  topicImage: string;
  topicDate: Date | null;
  setTopicTitle: (topic: string) => void;
  setTopicImage: (topicImage: string) => void;
  setTopicDate: (topicDate: Date) => void;
  reset: () => void;
}

export const useTopicStore = create<TopicState>()(
  devtools((set) => ({
    topicTitle: '',
    setTopicTitle: (topicTitle: string) => set((state) => ({ ...state, topicTitle })),
    topicImage: '',
    setTopicImage: (topicImage) => set((state) => ({ ...state, topicImage })),
    topicDate: null,
    setTopicDate: (topicDate) => set((state) => ({ ...state, topicDate })),
    reset: () => set({ topicTitle: '', topicImage: '', topicDate: null }),
  })),
);
