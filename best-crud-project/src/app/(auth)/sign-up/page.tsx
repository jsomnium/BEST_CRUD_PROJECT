import Button from '@/src/components/ui/Button';
import SignupForm from '@/src/features/auth/sign-up/ui/SignupForm';
import Link from 'next/link';
import ROUTES from '@/src/shared/config/routes';

export default function SignUpPage() {
  return (
    <div className="ml-40 flex min-h-screen w-[540px] flex-col justify-center gap-6">
      <Link href={ROUTES.HOME} className="text-primary flex text-2xl font-bold">
        [Logo]
      </Link>
      <h1 className="text-3xl font-bold">회원가입</h1>
      <SignupForm />
      <Button label="회원가입" className="w-full" />
      <Link href={ROUTES.SIGN_IN} className="underline">
        로그인
      </Link>
    </div>
  );
}
