export const apiRoutes = {
  // Family
  createFamily: '/v1/groups/create',
  UpdateFamily: '/v1/groups/update',
  getFamily: '/v1/groups/get/info',
  getFamilyList: '/v1/groups/my',
  joinFamily: '/v1/groups/url',
  getMembers: '/v1/groups/get',
  deleteMember: '/v1/groups/ban',
  deleteFamily: '/v1/groups/delete',

  // User
  UserLogout: '/v1/users/logout',
  UserDeletion: '/v1/users/delete',
  getUserData: '/v1/users/my',
  profileUpdate: '/v1/users/update',

  // Daily
  getDaily: '/v1/contents',

  // Post
  createPost: '/v1/contents/create',
  getTopic: '/v1/contents/topic',
  getMonthPost: '/v1/contents/get/month',
  getPost: '/v1/contents/get',
  deletePost: '/v1/contents/delete',
  getEditPost: '/v1/contents/modify',
  editPost: '/v1/contents',

  // Comment
  createComment: '/v1/comments/add',
  getComments: '/v1/comments',

  // Reaction
  getReaction: '/v1/contents/reaction',
  addReaction: '/v1/contents/reaction',
};
