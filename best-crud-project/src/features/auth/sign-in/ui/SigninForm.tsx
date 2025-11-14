import TextField from '@/src/shared/components/ui/TextField';

export default function SigninForm() {
  return (
    <form className="w-full space-y-6">
      <TextField label="Email" placeholder="michael@xmail.com" />
      <TextField label="Password" placeholder="********" />
    </form>
  );
}
