import { twMerge } from 'tailwind-merge';

type Props = {
  variant: 'compact' | 'expanded';
  size?: 'small' | 'medium' | 'large';
  menuItems?: Array<{ label: string; href: string }>;
  className?: string;
};

export default function SideMenu({
  variant = 'expanded',
  size = 'medium',
  menuItems,
  className,
}: Props) {
  const baseStyle = 'border-r border-gray-300 h-full w-40';
  const variantStyles = {
    compact: 'p-4',
    expanded: 'p-6',
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
    <div className={style}>
      SideMenu - {variant} - {size}
      {menuItems && (
        <ul>
          {menuItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
