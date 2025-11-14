'use client';

import Button from '@/src/shared/ui/Button';
import TextField from '@/src/shared/ui/TextField';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  SignupFormSchema,
  SignupFormData,
} from '@/src/entities/user/lib/validation';
import { useRouter } from 'next/navigation';

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(SignupFormSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    console.log('클라이언트 검증 통과, 임시 회원가입 시도:', data);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // MOCK API //
      console.log('임시 회원가입 성공!');
      router.push('/sign-in');
    } catch (error) {
      console.error('임시 회원가입 중 알 수 없는 에러', error);
    }
  };

  return (
    <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Email"
        placeholder="michael@xmail.com"
        {...register('email')}
        error={errors.email?.message}
      />
      <TextField
        label="Nickname"
        placeholder="michael"
        {...register('nickname')}
        error={errors.nickname?.message}
      />
      <TextField
        label="Password"
        placeholder="********"
        {...register('password')}
        error={errors.password?.message}
      />
      <TextField
        label="Confirm Password"
        placeholder="********"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />
      <Button type="submit" label="회원가입" className="w-full" />
    </form>
  );
}
