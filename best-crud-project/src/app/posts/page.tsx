import SearchPost from '@/src/features/posts/ui/SearchPost';
import Header from '@/src/widgets/layout/Header';
import type { PostSearchParams } from '@/src/entities/post/types/post-type';
import PostList from '@/src/widgets/ui/PostList';
import { getPostsApi } from '@/src/entities/post/api/getPostApi';
import Pagination from '@/src/features/posts/ui/Pagination';

export default async function PostsPage({
  searchParams,
}: {
  searchParams: PostSearchParams;
}) {
  const posts = await getPostsApi(searchParams);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="m-10 mb-20 flex h-full flex-col">
        <h1 className="mb-3 text-2xl font-medium">게시판</h1>
        <SearchPost searchParams={searchParams} total={posts.meta.totalCount} />
        <PostList posts={posts.posts} />
        <Pagination />
      </div>
    </div>
  );
}
