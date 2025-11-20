'use client';

import { PostItem } from '@/src/entities/post/PostItem';
import { Post } from '../../entities/post/types/post-type';
import { usePostSelectionStore } from '@/src/features/posts/model/usePostSelectionStore';
import { META_DATA_COLUMNS } from '@/src/features/posts/config/post-table-config';

interface PostListHeaderProps {
  allPostIdsOnPage: string[];
}

const PostListHeader = ({ allPostIdsOnPage }: PostListHeaderProps) => {
  // 테이블 설정(META_DATA_COLUMNS)에 따라 헤더 렌더링
  // 아이템과 너비 동기화 목적

  const { selectedIds, selectAll } = usePostSelectionStore();

  const totalCount = allPostIdsOnPage.length;
  const selectedCount = Array.from(selectedIds).filter((id) =>
    allPostIdsOnPage.includes(id)
  ).length;

  const isAllSelected = totalCount > 0 && totalCount === selectedCount;

  const handleSelectAll = () => {
    selectAll(allPostIdsOnPage);
  };

  return (
    <div className="hidden border-b border-gray-300 px-6 py-3 font-semibold text-gray-800 md:flex">
      <input
        type="checkbox"
        className="mr-6"
        checked={isAllSelected}
        onChange={handleSelectAll}
        aria-label="전체 게시글 선택"
      />

      {META_DATA_COLUMNS.map((col) => (
        <span key={col.key} className={`${col.width} text-center`}>
          {col.label}
        </span>
      ))}
    </div>
  );
};

const EmptyResults = () => {
  return (
    <div className="py-12 text-center">
      <p className="text-grey-450 text-sm">검색 결과가 없습니다.</p>
    </div>
  );
};

interface PostListProps {
  posts: Post[];
}

export default function PostList({ posts }: PostListProps) {
  const isEmpty = posts.length === 0;
  const allPostIdsOnPage = posts.map((post) => post.postId);

  return (
    <div className="border-grey-350 mt-3 flex flex-col rounded-xl border bg-white shadow-sm">
      <PostListHeader allPostIdsOnPage={allPostIdsOnPage} />

      {isEmpty ? (
        <EmptyResults />
      ) : (
        posts.map((post) => <PostItem key={post.postId} post={post} />)
      )}
    </div>
  );
}
