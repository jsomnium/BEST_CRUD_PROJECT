import { z } from 'zod';

// 로그인 폼 검증 스키마
export const SigninFormSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
});

// Zod 스키마에서 TypeScript 타입 추론
export type SigninFormData = z.infer<typeof SigninFormSchema>;