import { twMerge } from 'tailwind-merge';

type props = {
  label?: string;
  placeholder?: string;
  className?: string;
};

export default function TextField({ label, placeholder, className }: props) {
  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className={twMerge(
          `border-grey-350 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none`,
          className
        )}
      />
    </div>
  );
}
