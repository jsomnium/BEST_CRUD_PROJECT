import Button from '@/src/shared/ui/Button';
import TextField from '@/src/shared/ui/TextField';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextArea from '@/src/shared/ui/TextArea';
import { Post } from '@/src/entities/post/types/post-type';

// 게시판 생성, 수정에 사용하는 Form UI는 동일
export default function PostForm({ initialData }: { initialData?: Post }) {
  return (
    <form className="flex w-full flex-col gap-3">
      <div className="mt-5 flex w-100 flex-row">
        <span className="w-30">제목</span>
        <TextField
          className="border-grey-450"
          defaultValue={initialData?.title}
        />
      </div>
      <div className="flex flex-row">
        <span className="w-30">난이도</span>
        <div>상 중 하</div>
        {/* 다중 단일 선택 버튼 (공용 컴포넌트) 합쳐서 난이도 선택 버튼 */}
      </div>
      <div className="mb-5 flex flex-row">
        <span className="w-30">카테고리</span>
        <div>카테고리 선택 버튼</div>
      </div>
      <div className="mb-10 flex flex-col gap-1">
        <span>본문</span>
        <TextArea
          className="border-grey-450 h-60 w-full"
          defaultValue={initialData?.content}
        />
      </div>
      <div className="flex justify-end">
        <Button label="완료" className="w-30" />
      </div>
    </form>
  );
}
