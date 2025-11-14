'use client';

import { PostItem } from '@/src/entities/post/PostItem';
import { Post } from '@/src/entities/post/types/post-type';
import { usePostSelectionStore } from '@/src/entities/post/post-selection-store';

interface PostListProps {
  posts: Post[];
}

interface PostListHeaderProps {
  allPostIdsOnPage: string[];
}

const PostListHeader = ({ allPostIdsOnPage }: PostListHeaderProps) => {
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
    <div className="hidden border-b border-gray-300 px-6 py-3 font-semibold md:flex">
      <input
        type="checkbox"
        className="mr-6"
        checked={isAllSelected}
        onChange={handleSelectAll}
      />
      <span className="flex-1">제목</span>
      <span className="w-32 text-center">작성자</span>
      <span className="w-32 text-center">카테고리</span>
      <span className="w-32 text-center">작성일</span>
      <span className="w-12 text-center">수정</span>
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

export default function PostList({ posts }: PostListProps) {
  const isEmpty = posts.length === 0;
  const allPostIdsOnPage = posts.map((post) => post.id);

  return (
    <div className="border-grey-350 mt-6 flex flex-col rounded-xl border bg-white shadow-sm">
      <PostListHeader allPostIdsOnPage={allPostIdsOnPage} />

      {isEmpty ? (
        <EmptyResults />
      ) : (
        posts.map((post) => <PostItem key={post.id} post={post} />)
      )}
    </div>
  );
}
