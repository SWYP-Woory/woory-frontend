export type TabType = '데일리' | '캘린더';

export type Page = 'daily' | 'favorites' | 'members' | 'myPage';

export type BottomSheetType = 'home' | 'inquiry' | 'familySelect';

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
  topic: string;
  reactions: ReactionDataType[];
};

export type ProfileType = {
  profileUrl: string;
  name: string;
  isEdit: boolean;
};

export type CommentListType = {
  profile: ProfileType;
  comment: string;
  replies: CommentType[];
};

export type CommentType = Omit<CommentListType, 'replies'>;

export type FamilyMakeType = {
  id: number;
  familyName: string;
  imageUrl?: string;
};

export type FavoritePostType = {
  content: string;
  imgUrl: string;
  postDate: Date;
};
