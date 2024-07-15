export const POST_CONTENT = `게시글을 삭제하면 
해당 게시글과 댓글, 반응이  
모두 사라집니다. 
게시글을 삭제하시겠습니까?`;

export const COMMENT_CONTENT = `댓글을 삭제하면
해당 댓글에 달린 답댓글도
함께 사라집니다.
댓글을 삭제하시겠습니까?`;

export const REPLY_CONTENT = `답댓글을 삭제하시겠습니까?`;

export const MODAL_TYPE_MAP = {
  post: POST_CONTENT,
  comment: COMMENT_CONTENT,
  reply: REPLY_CONTENT,
};
