import { twMerge } from 'tailwind-merge';
import { Difficulty } from './types/post-type';

interface PostInfoFieldProps {
  label?: string;
  value?: string | Difficulty;
  variant?: 'header' | 'default' | 'body';
  className?: string;
}

export default function PostInfoRow({
  label,
  value,
  variant = 'default',
  className,
}: PostInfoFieldProps) {
  // 스타일 관리 //
  const baseStyle = 'flex';

  const variantStyles = {
    header: 'font-bold',
    default: '',
    body: 'flex-col gap-4',
  };

  const computedClassName = twMerge(
    baseStyle,
    variantStyles[variant],
    className
  );

  return (
    <div className={computedClassName}>
      {label && <span className="w-30">{label}</span>}
      <span className="flex-1">{value}</span>
    </div>
  );
}
