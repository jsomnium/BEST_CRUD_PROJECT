import { z } from 'zod';

export const SignupFormSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요.' }),
  nickname: z.string().min(2, { message: '닉네임은 2자 이상이어야 합니다.' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상이어야 합니다.' }),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['confirmPassword']
});

export type SignupFormData = z.infer<typeof SignupFormSchema>;

export const SigninFormSchema = z.object({
  email: z.string().email({ message: '올바른 이메일을 입력해주세요.' }),
  password: z.string().min(8, { message: '비밀번호는 8자 이상이어야 합니다.' }),
});

export type SigninFormData = z.infer<typeof SigninFormSchema>;