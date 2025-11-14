import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label?: string;
  className?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const TextField = forwardRef<HTMLInputElement, Props>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label>{label}</label>}
        <input
          type="text"
          className={twMerge(
            `border-grey-350 focus:border-primary w-full rounded-lg border px-4 py-2 focus:outline-none`,
            error && 'border-red focus:border-red',
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-red text-sm">{error}</p>}
      </div>
    );
  }
);

// 디버깅을 위한 displayName 설정
TextField.displayName = 'TextField';

export default TextField;
