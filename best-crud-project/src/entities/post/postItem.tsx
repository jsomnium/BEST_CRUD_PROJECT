'use client';

import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';
import { usePostSelectionStore } from './post-selection-store';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const { selectedIds, toggleId } = usePostSelectionStore();
  const isSelected = selectedIds.has(post.id);

  return (
    <>
      <div
        className={`text-grey-850 hover:bg-grey-50 border-grey-150 flex items-center border-b px-6 py-4`}
      >
        <input
          type="checkbox"
          className="mr-6"
          checked={isSelected}
          onChange={() => toggleId(post.id)}
        />
        <Link
          href={`/posts/${post.id}`}
          className="hover:text-primary flex-1 font-medium"
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
