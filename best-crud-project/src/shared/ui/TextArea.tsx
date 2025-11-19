import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  label?: string;
  className?: string;
  error?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, className, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">
        {label && <label>{label}</label>}
        <textarea
          className={twMerge(
            `border-grey-35 focus:border-primary w-full resize-none items-start justify-start rounded-lg border px-4 py-2 text-start whitespace-pre-line focus:outline-none`,
            error && 'border-red focus:border-red',
            className
          )}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...props}
        />
        {error && <p className="text-red text-sm">{error}</p>}
      </div>
    );
  }
);

TextArea.displayName = 'TextArea';

export default TextArea;
