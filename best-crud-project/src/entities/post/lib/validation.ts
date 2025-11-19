import { z } from 'zod';

export const PostFormSchema = z.object({
  title: z.string().min(5, { message: '제목은 최소 5자 이상이어야 합니다.' }).max(30, { message: '제목은 30자를 넘을 수 없습니다.' }),
  content: z.string().min(20, { message: '본문은 최소 20자 이상이어야 합니다.' }),
});

export type PostFormData = z.infer<typeof PostFormSchema>;
