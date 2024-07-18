export type TabType = 'daily' | 'calendar';

export type BottomSheetType = 'home' | 'inquiry' | 'familySelect';

export type ReactionType = 'heart' | 'smile' | 'sad' | 'surprise' | 'thumbs';

export type NotiType = 'topic' | 'reaction' | 'post';

export type ReactionNotiType = 'comment' | 'reComment' | 'reaction';

export type AccountDeletionType = 'householder' | 'member' | 'lastMember';

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

export type MemberType = {
  profileImage: string;
  name: string;
  isHouseholder: boolean;
};

export type NotificationSettingType = {
  topic: boolean;
  post: boolean;
  reaction: boolean;
};

export type ModalTypeMap = {
  [key: string]: string;
  post: string;
  comment: string;
  reply: string;
  householder: string;
  lastMember: string;
  member: string;
};
