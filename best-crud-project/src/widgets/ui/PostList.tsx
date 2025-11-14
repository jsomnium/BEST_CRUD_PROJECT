import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-grey-550 text-lg">검색 결과가 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 flex flex-1 flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post.id}
          className="border-grey-250 rounded-lg border p-6 transition-shadow hover:shadow-md"
        >
          <div className="mb-3 flex items-start justify-between">
            <Link
              href={`/posts/${post.id}`}
              className="text-foreground hover:text-primary text-xl font-semibold"
            >
              {post.title}
            </Link>
            <span className="bg-primary-light text-primary rounded px-2 py-1 text-sm">
              {post.category}
            </span>
          </div>

          <div className="text-grey-550 flex items-center justify-between text-sm">
            <span>작성자: {post.author}</span>
            <span>{post.postDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
