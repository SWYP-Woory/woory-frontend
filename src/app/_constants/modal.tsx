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

export const MODAL_TYPE_MAP = {
  post: POST_CONTENT,
  comment: COMMENT_CONTENT,
  reply: REPLY_CONTENT,
};
