export type TabType = 'daily' | 'calendar';

export type ToastType = 'link' | 'shortcut' | 'imageSize' | 'post' | 'error';

export type DailyPostTitleType = 'post' | 'comment' | 'reply';

export type BottomSheetType = 'inquiry' | 'familySelect';

export type ReactionType = 'LOVE' | 'LIKE' | 'SAD' | 'WOW' | 'HAPPY';

export type NotiType = 'topic' | 'reaction' | 'post';

export type InputTextType = 'family' | 'profile' | 'familyEdit';

export type ProfileSize = 'small' | 'large' | 'xLarge';

export type NotificationType = {
  isRead?: boolean;
  notiType: NotiType;
  topic?: string;
  opponent?: string;
  reactionNotiType?: ReactionNotiType;
  notiTime: Date;
};

export type NotificationDataType = NotificationType & {
  id: number;
};

export type ReactionNotiType = 'comment' | 'reComment' | 'reaction';

export type AccountDeletionType = 'householder' | 'member' | 'lastMember';

export type CalenderDataType = {
  contentId: number;
  contentText: string;
  contentImgPath: string;
  contentRegDate: string;
};

type BasePostType = {
  profileUrl: string;
  name: string;
  content: string;
  postUrl?: string;
  isEdit: boolean;
};

export type DailyThreadType = BasePostType & {
  id: number;
  comment: number;
  reaction: number;
  regDate: string;
};

export type ReactionDataType = {
  reactionType: ReactionType;
  count: number;
  isActive: boolean;
};

export type DailyPostType = {
  contentId: number;
  contentImgPath?: string;
  contentRegDate: string;
  contentText: string;
  isEdit: boolean;
  name: string;
  profileUrl: string;
  userId: number;
  topicContent: string;
  topicId: number;
};

export type DailyDataType = {
  topicContent: string;
  topicId: number;
  issueDate: Date;
  hasPrevDay: boolean;
  hasNextDay: boolean;
  isPosted: boolean;
  contents: ContentDataType[];
};

export type ContentDataType = {
  profileUrl: string;
  name: string;
  contentId: number;
  contentText: string;
  contentImgPath?: string;
  contentRegDate: Date;
  commentsCount: number;
  reactionCount: number;
  isEdit: boolean;
};

export type CommentListType = {
  profileUrl: string;
  commentId: number;
  name: string;
  comment: string;
  replies: CommentType[];
  edit: boolean;
};

export type CommentType = Omit<CommentListType, 'replies'>;

export type FamilyMakeType = {
  groupId: number;
  groupName: string;
  groupImage?: string;
};

export type FavoritePostType = {
  topicId: number;
  topicTitle: string;
  topicImage: string;
  topicDate: Date;
};

export type MembersDataType = {
  user: MemberType;
  members: MemberType[];
};

export type MemberType = {
  userId: number;
  profileUrl?: string;
  userName: string;
  isHouseholder: boolean;
};

export type UserDataType = {
  userId: number;
  userEmail?: string;
  nickname: string;
  profileImgLink: string;
  isHouseholder: boolean;
  isLastMember: boolean;
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

export type ProfileSaveType = {
  name: string;
  images?: string;
};

export type TopicDataType = {
  topicId: number;
  topicContent: string;
  issueDate: string;
};

export type CreatePostType = {
  groupId: number;
  topicId: number;
  contentText: string;
  images?: string;
};

export type EditPostDataType = {
  contentText: string;
  images?: string;
};

export type TopicStoreType = {
  topicId?: number;
  topicTitle: string;
  topicImage: string;
  topicDate?: Date;
};
