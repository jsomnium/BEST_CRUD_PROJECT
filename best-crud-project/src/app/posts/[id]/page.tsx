import { getPostDetailApi } from '@/src/entities/post/api/getPostDetail';
import { PostModalTrigger } from '@/src/features/posts/modal/PostModalTrigger';
import Button from '@/src/shared/ui/Button';
import { Modal } from '@/src/shared/ui/Modal';
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
    <>
      <Header />
      <div className="flex w-full flex-col gap-4 px-20 pt-15 pb-25">
        <PostDetail post={post} />
      </div>
      <div className="flex justify-end px-20 pb-20">
        <PostModalTrigger defaultValues={post} />
      </div>
    </>
  );
}
