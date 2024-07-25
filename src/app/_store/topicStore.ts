import { create } from 'zustand';

interface TopicState {
  topicId: number | null;
  topicTitle: string;
  topicImage: string;
  topicDate: Date | null;
  setTopicId: (topicId: number) => void;
  setTopicTitle: (topic: string) => void;
  setTopicImage: (topicImage: string) => void;
  setTopicDate: (topicDate: Date) => void;
  reset: () => void;
}

export const useTopicStore = create<TopicState>((set) => ({
  topicId: null,
  setTopicId: (topicId: number | null) => set((state) => ({ ...state, topicId })),
  topicTitle: '',
  setTopicTitle: (topicTitle: string) => set((state) => ({ ...state, topicTitle })),
  topicImage: '',
  setTopicImage: (topicImage) => set((state) => ({ ...state, topicImage })),
  topicDate: null,
  setTopicDate: (topicDate) => set((state) => ({ ...state, topicDate })),
  reset: () => set({ topicId: null, topicTitle: '', topicImage: '', topicDate: null }),
}));
