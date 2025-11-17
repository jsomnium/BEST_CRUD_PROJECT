export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Post {
  postId: string;
  title: string;
  author: string;
  category: string;
  postDate: string;
  difficulty: Difficulty;
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