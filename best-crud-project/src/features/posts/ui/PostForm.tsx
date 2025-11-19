import Button from '@/src/shared/ui/Button';
import TextField from '@/src/shared/ui/TextField';
import TextArea from '@/src/shared/ui/TextArea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Post } from '@/src/entities/post/types/post-type';
import {
  PostFormSchema,
  PostFormData,
} from '@/src/entities/post/lib/validation';

type PostFormProps = {
  defaultValues?: Post | null;
  onSubmit: (data: PostFormData) => void;
  onCancel?: () => void;
};

export default function PostForm({
  defaultValues,
  onSubmit,
  onCancel,
}: PostFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(PostFormSchema),
    defaultValues: {
      title: defaultValues?.title || '',
      content: defaultValues?.content || '',
    },
  });

  return (
    <form
      className="flex w-full flex-col gap-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mt-5 flex w-full flex-row">
        <span className="w-30 shrink-0 pt-2">제목</span>
        <div className="flex-1">
          <TextField
            className="border-grey-450 w-full"
            {...register('title')}
            error={errors.title?.message}
            placeholder="제목을 입력해주세요. (5~30자 이내)"
          />
        </div>
      </div>

      <div className="flex flex-row">
        <span className="w-30 shrink-0">난이도</span>
        <div className="text-gray-400 italic">상 중 하</div>
      </div>

      <div className="mb-5 flex flex-row">
        <span className="w-30 shrink-0">카테고리</span>
        <div className="text-gray-400 italic">카테고리 선택 버튼</div>
      </div>

      <div className="mb-10 flex flex-col gap-1">
        <span>본문</span>
        <TextArea
          placeholder="내용을 작성해주세요. (최소 20자 이상)"
          className="border-grey-450 h-60 w-full"
          {...register('content')}
          error={errors.content?.message}
        />
      </div>

      <div className="flex justify-end gap-3">
        <Button
          label="취소"
          className="w-30"
          variant="black"
          onClick={onCancel}
          type="button"
        />
        <Button label="완료" className="w-30" type="submit" />
      </div>
    </form>
  );
}
