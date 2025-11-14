import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <div className="p-6 transition-shadow hover:shadow-md">
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
  );
}
