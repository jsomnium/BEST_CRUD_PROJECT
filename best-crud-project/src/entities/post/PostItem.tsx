'use client';

import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';
import { usePostSelectionStore } from '../../features/posts/model/usePostSelectionStore';
import { META_DATA_COLUMNS } from '@/src/features/posts/config/post-table-config';

interface PostItemProps {
  post: Post;
}

export function PostItem({ post }: PostItemProps) {
  const { selectedIds, toggleId } = usePostSelectionStore();
  const isSelected = selectedIds.has(post.postId);

  return (
    <div
      className={`text-grey-850 hover:bg-grey-50 border-grey-150 flex items-center border-b px-6 py-4`}
    >
      <input
        type="checkbox"
        className="mr-6"
        checked={isSelected}
        onChange={() => toggleId(post.postId)}
      />

      {META_DATA_COLUMNS.map((col) => {
        if (col.key === 'title') {
          return (
            <Link
              key={col.key}
              href={`/posts/${post.postId}`}
              className={`${col.width} hover:text-primary text-left font-medium`}
            >
              {post.title}
            </Link>
          );
        }

        if (col.key === 'edit') {
          return (
            <button
              key={col.key}
              className={`${col.width} text-grey-750 hover:text-primary cursor-pointer text-center text-sm`}
            >
              수정
            </button>
          );
        }

        let content: React.ReactNode;
        if ('format' in col && typeof col.format === 'function') {
          content = col.format(post);
        } else {
          content = post[col.key as keyof Post];
        }

        return (
          <span
            key={col.key}
            className={`${col.width} text-grey-750 text-center text-sm`}
          >
            {content}
          </span>
        );
      })}
    </div>
  );
}
