import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  return (
    <>
      <div className="text-grey-850 hover:bg-grey-50 border-grey-150 flex items-center border-b px-6 py-5 text-sm">
        <input type="checkbox" className="mr-6" />
        <Link
          href={`/posts/${post.id}`}
          className="hover:text-primary flex-1/2 font-medium"
        >
          {post.title}
        </Link>
        <span className="w-32 text-center text-sm">{post.category}</span>
        <span className="w-32 text-center text-sm">{post.author}</span>
        <span className="w-32 text-center text-sm">{post.postDate}</span>
        <button className="hover:text-primary w-12 cursor-pointer text-center text-sm">
          수정
        </button>
      </div>
    </>
  );
}
