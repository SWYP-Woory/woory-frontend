import { create } from 'zustand';

interface TopicState {
  topic: string;
  topicImage: string;
  setTopic: (topic: string) => void;
  setTopicImage: (topicImage: string) => void;
  reset: () => void;
}

export const useTopicImageStore = create<TopicState>((set) => ({
  topic: '',
  setTopic: (topic: string) => set((state) => ({ ...state, topicImage: topic })),
  topicImage: '',
  setTopicImage: (topicImage) => set((state) => ({ ...state, topicImage })),
  reset: () => set({ topic: '', topicImage: '' }),
}));
