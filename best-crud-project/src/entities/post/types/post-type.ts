export interface Post {
  id: string;
  title: string;
  author: string;
  category: string;
  postDate: string;
  content?: string;
}

export interface PostSearchParams {
  title?: string;
  author?: string;
  page?: string;
  limit?: string;
}

export interface PaginationMeta {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

export interface PostsResponse {
  posts: Post[];
  meta: PaginationMeta;
}