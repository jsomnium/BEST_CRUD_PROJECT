import { MOCK_POSTS } from '@/src/entities/post/mock';
import type { Post } from '@/src/entities/post/types/post-type';

export const getPostDetailApi = async (postId: string): Promise<Post | null> => {
  // 실제 API 호출 (주석 처리)
  // const res = await fetch(`https://api.example.com/posts/${id}`);
  // if (!res.ok) {
  //   throw new Error('Failed to fetch post detail');
  // }
  // const data = await res.json();
  // return data;

  await new Promise(resolve => setTimeout(resolve, 300)); // API 호출 지연 시뮬레이션

  const post = MOCK_POSTS.find(p => p.postId === postId);

  return post || null;
};