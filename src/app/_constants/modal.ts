import { ModalTypeMap } from '@/type';

export const POST_CONTENT = `게시글을 삭제하면 
해당 게시글과 댓글, 반응이  
모두 사라집니다. 
게시글을 삭제하시겠습니까?`;

export const COMMENT_CONTENT = `댓글을 삭제하면
해당 댓글에 달린 답댓글도
함께 사라집니다.
댓글을 삭제하시겠습니까?`;

export const REPLY_CONTENT = `답댓글을 삭제하시겠습니까?`;

export const MEMBER_DELETE_CONTENT = `멤버를 내보내면 해당 멤버가
작성한 글, 댓글이 모두 삭제되며
해당 가족에 접근할 권한을 
잃게 됩니다.
멤버를 내보내시겠습니까?
`;

export const MEMBER_ACCOUNT_DELETE_CONTENT = `탈퇴하면 현재 계정으로
작성한 글, 댓글에 대한
권한이 없어집니다. 
지금 탈퇴하시겠습니까?
`;

export const HOUSEHOLDER_ACCOUNT_DELETE_CONTENT = `탈퇴하면 가장의 권한은
다른 멤버에게 이동되며, 
현재 계정으로 작성한 글,
댓글에 대한 권한이 없어집니다. 
지금 탈퇴하시겠습니까?
`;

export const LAST_MEMBER_ACCOUNT_DELETE_CONTENT = `탈퇴하면 이 가족의 글과
댓글이 모두 삭제되며,
복구할 수 없습니다. 
지금 탈퇴하시겠습니까?
`;

export const FAMILY_DELETE_CONTENT = `삭제하면 이 가족에 업로드 된
글과 댓글 등의 
모든 데이터가 삭제되며,
복구할 수 없습니다.
가족을 삭제하시겠습니까?
`;

export const MODAL_TYPE_MAP: ModalTypeMap = {
  post: POST_CONTENT,
  comment: COMMENT_CONTENT,
  reply: REPLY_CONTENT,
  householder: HOUSEHOLDER_ACCOUNT_DELETE_CONTENT,
  lastMember: LAST_MEMBER_ACCOUNT_DELETE_CONTENT,
  member: MEMBER_ACCOUNT_DELETE_CONTENT,
};
