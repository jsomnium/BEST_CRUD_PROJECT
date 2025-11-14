import TextField from '@/src/shared/components/ui/TextField';

export default function SignupForm() {
  return (
    <form className="w-full space-y-6">
      <TextField label="Email" placeholder="michael@xmail.com" />
      <TextField label="Nickname" placeholder="michael" />
      <TextField label="Password" placeholder="********" />
      <TextField label="Confirm Password" placeholder="********" />
    </form>
  );
}
