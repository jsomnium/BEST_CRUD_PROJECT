import { Post } from "@/src/entities/post/types/post-type";
import { convertDifficultyToKorean } from "@/src/entities/post/utils/convertDifficultyToKor";

const META_DATA_COLUMNS = [
  { key: 'title', label: '제목', width: 'flex-1' },
  { 
    key: 'difficulty', 
    label: '난이도', 
    width: 'w-25', 
    format: (post: Post) => convertDifficultyToKorean(post.difficulty) 
  },
  { key: 'author', label: '작성자', width: 'w-25' },
  { key: 'category', label: '카테고리', width: 'w-25' },
  { key: 'postDate', label: '작성일', width: 'w-25' },
  { key: 'edit', label: '수정', width: 'w-12' },
] as const;

export { META_DATA_COLUMNS };