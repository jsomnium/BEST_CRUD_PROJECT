'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@/src/shared/ui/TextField';
import {
  SigninFormData,
  SigninFormSchema,
} from '@/src/entities/user/lib/validation';
import Button from '@/src/shared/ui/Button';
import { useRouter } from 'next/navigation';

// import { signinApi } from '@/src/entities/user/api/signinApi';
import { useAuthStore } from '@/src/entities/user/userStore';

export default function SigninForm() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    resolver: zodResolver(SigninFormSchema),
  });

  const onSubmit = async (data: SigninFormData) => {
    console.log('클라이언트 검증 통과, 임시 로그인 시도:', data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // MOCK DATA //
      const mockUserData = {
        id: 'mock-user-123',
        nickname: '임시사용자',
        email: data.email,
      };

      login(mockUserData);
      console.log('임시 로그인 성공! 스토어 상태:', useAuthStore.getState());
      router.push('/');
    } catch (error) {
      console.error('임시 로그인 중 알 수 없는 에러', error);
    }
  };

  // 3. 폼은 내부에 선언된 onSubmit을 참조합니다.
  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        placeholder="michael@xmail.com"
        {...register('email')}
        error={errors.email?.message}
      />
      <TextField
        label="Password"
        placeholder="********"
        type="password" //
        {...register('password')}
        error={errors.password?.message}
      />
      <Button type="submit" label="로그인" className="w-full" />
    </form>
  );
}
