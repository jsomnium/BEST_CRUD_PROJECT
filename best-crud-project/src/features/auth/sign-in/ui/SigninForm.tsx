import TextField from '@/src/components/ui/TextField';

export default function SigninForm() {
  return (
    <form className="flex w-full flex-col gap-6">
      <TextField
        label="Email"
        placeholder="michael@xmail.com"
        className="w-full"
      />
      <TextField label="Password" placeholder="********" className="w-full" />
    </form>
  );
}
