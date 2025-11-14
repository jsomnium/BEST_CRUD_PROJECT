export default {
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  HOME: '/',
  MY_PAGE: '/my-page',
  POST: '/posts',
  POST_CREATE: '/posts/create',
  POST_DETAIL: (postId: string) => `/posts/${postId}`,
  POST_EDIT: (postId: string) => `/posts/${postId}/edit`,
};
