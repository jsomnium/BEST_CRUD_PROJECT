import Link from 'next/link';
import ROUTES from '@/src/shared/config/routes';

export default function Header() {
  return (
    <header className="flex justify-between px-8 py-4">
      <Link href={ROUTES.HOME} className="text-primary flex text-2xl font-bold">
        [Logo]
      </Link>
      <Link href={ROUTES.SIGN_IN}>로그인</Link>
    </header>
  );
}
