'use client';

import Link from 'next/link';
import type { Post } from '@/src/entities/post/types/post-type';
import { usePostSelectionStore } from '../../features/posts/model/usePostSelectionStore';
import { convertDifficultyToKorean } from './utils/convertDifficultyToKor';

interface PostItemProps {
  post: Post;
}

const PostCell = ({ label }: { label: string }) => {
  return (
    <span className="text-grey-750 w-25 text-center text-sm">{label}</span>
  );
};

export function PostItem({ post }: PostItemProps) {
  const { selectedIds, toggleId } = usePostSelectionStore();
  const isSelected = selectedIds.has(post.postId);
  const convertedDifficulty = convertDifficultyToKorean(post.difficulty);

  return (
    <>
      <div
        className={`text-grey-850 hover:bg-grey-50 border-grey-150 flex items-center border-b px-6 py-4`}
      >
        <input
          type="checkbox"
          className="mr-6"
          checked={isSelected}
          onChange={() => toggleId(post.postId)}
        />
        <Link
          href={`/posts/${post.postId}`}
          className="hover:text-primary flex-1 font-medium"
        >
          {post.title}
        </Link>
        {PostCell({ label: convertedDifficulty })}
        {PostCell({ label: post.author })}
        {PostCell({ label: post.category })}
        {PostCell({ label: post.postDate })}
        <button className="text-grey-750 hover:text-primary w-12 cursor-pointer text-center text-sm">
          수정
        </button>
      </div>
    </>
  );
}
