import { MOCK_POSTS } from '@/src/entities/post/mock';
import type { PostSearchParams, Post, PostsResponse, PaginationMeta } from '@/src/entities/post/types/post-type';

export const getPostsApi = async (
  params: PostSearchParams
): Promise<PostsResponse> => {
  //  실제 API 호출
  // const res = await fetch(`https://api.example.com/posts?title=${params.title...}`);
  // const data = await res.json();
  // return data;

  // Mock DATA FILTERING
  let filteredPosts = [...MOCK_POSTS];
  if (params.title) {
    filteredPosts = filteredPosts.filter((post) =>
      post.title.toLowerCase().includes(params.title!.toLowerCase())
    );
  }
  if (params.author) {
    filteredPosts = filteredPosts.filter((post) =>
      post.author.toLowerCase().includes(params.author!.toLowerCase())
    );
  }
  
  // 페이지네이션 설정
  const page = parseInt(params.page || '1', 10);
  const limit = parseInt(params.limit || '4', 10);
  const totalCount = filteredPosts.length;
  const totalPages = Math.ceil(totalCount / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  
  // 페이지별 데이터 슬라이싱
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // 메타데이터 생성
  const meta: PaginationMeta = {
    currentPage: page,
    totalPages,
    totalCount,
    limit,
    hasNext: page < totalPages,
    hasPrev: page > 1,
  };

  await new Promise(resolve => setTimeout(resolve, 300));

  return {
    posts: paginatedPosts,
    meta,
  };
};
