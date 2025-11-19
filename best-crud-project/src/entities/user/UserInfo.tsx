'use client';

import { redirect, useRouter } from 'next/navigation';
import { Redirect } from 'next';
import { useAuthStore } from './useAuthStore';

export function UserInfo() {
  const router = useRouter();

  const user = useAuthStore((state) => state.user);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  if (!isLoggedIn || !user) {
    redirect('/login');
  }

  return (
    <div className="space-y-10">
      <div className="text-3xl font-bold">{'사용자'} 님</div>
      <div className="flex flex-col gap-4">
        <span className="">이메일</span>
        <span className="text-grey-550 ml-5">{user.email}</span>
      </div>
      <div className="flex flex-col gap-4">
        <span className="">이름</span>
        <span className="text-grey-550 ml-5">
          {user.nickname || '정보 없음'}
        </span>
      </div>
    </div>
  );
}
