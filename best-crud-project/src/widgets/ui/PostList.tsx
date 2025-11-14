import { Post } from '@/src/entities/post/types/post-type';
import { PostItem } from '@/src/entities/post/postItem';

interface PostListProps {
  posts: Post[];
}

const PostListHeader = () => {
  return (
    <div className="hidden border-b border-gray-300 px-6 py-3 font-semibold md:flex">
      <input type="checkbox" className="mr-6" />
      <span className="flex-1/2">제목</span>
      <span className="w-32 text-center">작성자</span>
      <span className="w-32 text-center">카테고리</span>
      <span className="w-32 text-center">작성일</span>
      <span className="w-12 text-center">수정</span>
    </div>
  );
};

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="border-grey-350 mt-6 flex flex-col rounded-xl border bg-white shadow-sm">
        <PostListHeader />
        <div className="py-12 text-center">
          <p className="text-grey-450 text-sm">검색 결과가 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-grey-350 mt-6 flex flex-col rounded-xl border bg-white shadow-sm">
      <PostListHeader />
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </div>
  );
}
