export type TabType = 'daily' | 'calendar';

export type ToastType = 'link' | 'shortcut' | 'imageSize';

export type BottomSheetType = 'home' | 'inquiry' | 'familySelect';

export type ReactionType = 'heart' | 'smile' | 'sad' | 'surprise' | 'thumbs';

export type NotiType = 'topic' | 'reaction' | 'post';

export type InputTextType = 'family' | 'profile' | 'familyEdit';

export type ProfileSize = 'small' | 'large' | 'xLarge';

export type ProfileImageType = 'family' | 'profile';

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
  id: number;
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
  groupId: number;
  groupName: string;
  groupImage?: string;
};

export type FavoritePostType = {
  content: string;
  imgUrl: string;
  postDate: Date;
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
