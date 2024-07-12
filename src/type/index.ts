export type TabType = '데일리' | '캘린더';

export type Page = 'home' | 'heart' | 'member' | 'myPage';

export type BottomSheetType = 'home' | 'inquiry';

export type ReactionType = 'heart' | 'smile' | 'sad' | 'surprise' | 'thumbs';

export type NotiType = 'topic' | 'reaction' | 'post';

export type CalendarEventType = {
  date: string;
  url: string;
  isLiked: number;
};

export type CalenderDataType = {
  userId: number;
  calender: CalendarEventType[];
};

export type DailyThreadType = {
  profileUrl: string;
  name: string;
  content: string;
  comment: number;
  reaction: number;
  postUrl: string;
  isEdit: number;
};
