export type TabType = '데일리' | '캘린더';

export type Page = 'home' | 'heart' | 'member' | 'myPage';

export type BottomSheetType = 'home' | 'inquiry';

export type ReactionType = 'heart' | 'smile' | 'sad' | 'surprise' | 'thumbs';

export type NotiType = 'topic' | 'reaction' | 'post';

export type CalendarEventType = {
  date: string;
  url: string;
  isLiked: boolean;
};

export type CalenderDataType = {
  userId: number;
  calender: CalendarEventType[];
};

type BasePostType = {
  profileUrl: string;
  name: string;
  content: string;
  postUrl: string;
  isEdit: boolean;
};

export type DailyThreadType = BasePostType & {
  comment: number;
  reaction: number;
};

export type ReactionDataType = {
  reactionType: ReactionType;
  count: number;
  isActive?: boolean;
};

export type DailyPostType = BasePostType & {
  reactions: ReactionDataType[];
};
