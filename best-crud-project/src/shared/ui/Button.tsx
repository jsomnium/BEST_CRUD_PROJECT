'use client';

import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'white' | 'grey' | 'primary_light' | 'black';
  label?: string;
}

const Button = ({
  className,
  variant = 'primary',
  label = '',
  ...props
}: ButtonProps) => {
  const baseStyle = 'cursor-pointer rounded-md px-4 py-2';

  const variantStyles = {
    primary: 'bg-primary text-white',
    white: 'bg-grey-50 text-black border-1 border-grey-200',
    grey: 'border-1 border-grey-250 text-grey-450',
    primary_light: 'bg-primary-light text-white',
    black: 'bg-grey-650 text-white',
  };

  const computedClassName = twMerge(
    baseStyle,
    variantStyles[variant],
    className
  );

  return (
    <button className={computedClassName} {...props}>
      {label}
    </button>
  );
};

export default Button;
