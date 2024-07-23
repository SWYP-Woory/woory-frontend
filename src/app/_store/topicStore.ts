import { create } from 'zustand';

interface TopicState {
  topic: string;
  topicImage: string;
  topicDate: Date | null;
  setTopic: (topic: string) => void;
  setTopicImage: (topicImage: string) => void;
  setTopicDate: (topicDate: Date) => void;
  reset: () => void;
}

export const useTopicStore = create<TopicState>((set) => ({
  topic: '',
  setTopic: (topic: string) => set((state) => ({ ...state, topicImage: topic })),
  topicImage: '',
  setTopicImage: (topicImage) => set((state) => ({ ...state, topicImage })),
  topicDate: null,
  setTopicDate: (topicDate) => set((state) => ({ ...state, topicDate })),
  reset: () => set({ topic: '', topicImage: '', topicDate: null }),
}));
