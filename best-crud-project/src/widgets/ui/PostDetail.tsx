import PostInfoRow from '@/src/entities/post/PostInfoRow';
import { Post } from '@/src/entities/post/types/post-type';
import { convertDifficultyToKorean } from '@/src/entities/post/utils/convertDifficultyToKor';

type PostDetailItemProps = {
  post: Post;
};

export function PostDetail({ post }: PostDetailItemProps) {
  const convertedDifficulty = convertDifficultyToKorean(post.difficulty);

  return (
    <>
      <PostInfoRow
        value={post.title}
        variant="header"
        className="text-3xl font-medium"
      />
      <PostInfoRow label="난이도" value={convertedDifficulty} />
      <PostInfoRow label="작성자" value={post.author} />
      <PostInfoRow label="카테고리" value={post.category} />
      <PostInfoRow label="작성일" value={post.postDate} />
      <PostInfoRow
        label="본문"
        value={post.content}
        variant="body"
        className="mt-20"
      />
    </>
  );
}
