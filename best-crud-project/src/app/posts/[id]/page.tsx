import { getPostDetailApi } from '@/src/entities/post/api/getPostDetail';
import Header from '@/src/widgets/layout/Header';
import { PostDetail } from '@/src/widgets/ui/PostDetail';
import { notFound } from 'next/navigation';

type PostDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id: postId } = await params;
  const post = await getPostDetailApi(postId);

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full">
      <Header />
      <div className="flex w-full flex-col gap-4 px-20 py-15">
        <PostDetail post={post} />
      </div>
    </div>
  );
}
