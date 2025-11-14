import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

type Props = {
  variant: 'compact' | 'expanded';
  size?: 'small' | 'medium' | 'large';
  menuItems?: readonly { label: string; href: string }[];
  className?: string;
};

export default function SideMenu({
  variant = 'expanded',
  size = 'medium',
  menuItems = [],
  className,
}: Props) {
  const baseStyle = 'h-full';
  const variantStyles = {
    compact: 'w-16 p-2',
    expanded: 'w-64 p-6',
  };
  const sizeStyles = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const style = twMerge(
    baseStyle,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  return (
    <nav className={style}>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="hover:bg-primary block rounded px-3 py-2 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
