export default {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  HOME: '/',
  MY_PAGE: '/my-page',
  POST: '/post',
  POST_CREATE: '/post/create',
  POST_DETAIL: (postId: string) => `/post/${postId}`,
  POST_EDIT: (postId: string) => `/post/${postId}/edit`,
};
