import SearchPost from '@/src/features/posts/ui/SearchPost';
import Header from '@/src/widgets/layout/Header';
import type { PostSearchParams } from '@/src/entities/post/types/post-type';
import PostList from '@/src/widgets/ui/PostList';
import { getPostsApi } from '@/src/entities/post/api/getPostApi';
import Pagination from '@/src/features/posts/ui/Pagination';
import { CreatePostTrigger } from '@/src/features/posts/modal/CreateModalTrigger';
import { DeleteButtonTrigger } from '@/src/features/posts/delete-posts/ui/DeleteModalTrigger';

export default async function PostsPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: Promise<PostSearchParams>;
}) {
  const searchParams = await searchParamsPromise;
  const posts = await getPostsApi(searchParams);

  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="m-10 flex h-full flex-col">
        <SearchPost searchParams={searchParams} total={posts.meta.totalCount} />
        <div className="flex justify-end gap-4">
          <CreatePostTrigger />
          <DeleteButtonTrigger />
        </div>
        <PostList posts={posts.posts} />
        <div className="flex flex-1 items-end justify-center py-4">
          <Pagination
            totalPages={posts.meta.totalPages}
            currentPage={posts.meta.currentPage}
          />
        </div>
      </div>
    </div>
  );
}
