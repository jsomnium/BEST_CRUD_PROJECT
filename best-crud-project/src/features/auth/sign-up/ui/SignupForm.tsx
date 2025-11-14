import Button from '@/src/shared/ui/Button';
import TextField from '@/src/shared/ui/TextField';

export default function SignupForm() {
  return (
    <form className="w-full space-y-6" action="/" method="POST">
      <TextField label="Email" placeholder="michael@xmail.com" name="email" />
      <TextField label="Nickname" placeholder="michael" name="nickname" />
      <TextField label="Password" placeholder="********" name="password" />
      <TextField
        label="Confirm Password"
        placeholder="********"
        name="confirmPassword"
      />
      <Button type="submit" label="회원가입" className="w-full" />
    </form>
  );
}
