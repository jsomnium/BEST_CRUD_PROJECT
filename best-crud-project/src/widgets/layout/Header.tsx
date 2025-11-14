'use client';

import Link from 'next/link';
import ROUTES from '@/src/shared/constants/routes';
import { useAuthStore } from '@/src/entities/user/userStore';

export default function Header() {
  const { isLoggedIn, user, logout } = useAuthStore();

  const handleLogout = () => {
    console.log('로그아웃 처리');
    logout();
  };

  return (
    <header className="flex justify-between px-8 py-4">
      <Link href={ROUTES.HOME} className="text-primary flex text-2xl font-bold">
        [Logo]
      </Link>
      {isLoggedIn ? (
        <div className="space-x-6">
          <span className="text-grey-750">
            안녕하세요,
            <span className="text-primary font-medium">{user?.nickname}</span>님
          </span>
          <button onClick={handleLogout} className="cursor-pointer">
            로그아웃
          </button>
        </div>
      ) : (
        <Link href={ROUTES.SIGN_IN}>로그인</Link>
      )}
    </header>
  );
}
