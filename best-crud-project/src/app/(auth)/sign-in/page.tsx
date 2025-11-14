import SigninForm from '@/src/features/auth/sign-in/ui/SigninForm';
import Link from 'next/link';
import ROUTES from '@/src/shared/constants/routes';

export default function SignInPage() {
  return (
    <div className="ml-40 flex min-h-screen w-[540px] flex-col justify-center gap-6">
      <Link href={ROUTES.HOME} className="text-primary flex text-2xl font-bold">
        [Logo]
      </Link>
      <h1 className="text-3xl font-bold">로그인</h1>
      <SigninForm />
      <Link href={ROUTES.SIGN_UP} className="underline">
        회원가입
      </Link>
    </div>
  );
}
