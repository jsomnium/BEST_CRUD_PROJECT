import TextField from '@/src/components/ui/TextField';

export default function SigninForm() {
  return (
    <form>
      <TextField label="Email" placeholder="michael@xmail.com" />
      <TextField label="Password" placeholder="********" />
    </form>
  );
}
