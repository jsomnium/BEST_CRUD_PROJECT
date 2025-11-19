'use client ';

import { twMerge } from 'tailwind-merge';

export const ModalHeader = ({
  label,
  onClose,
}: {
  label?: string;
  onClose: () => void;
}) => {
  return (
    <div className="flex w-full flex-row justify-between">
      <h2 className="text-lg font-medium">{label}</h2>
      <button
        className="cursor-pointer text-gray-500 hover:text-black"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  HeaderLabel?: string;
  size?: 'small' | 'medium' | 'large';
};

export const Modal = ({
  isOpen,
  onClose,
  children,
  HeaderLabel: label,
  size = 'large',
}: Props) => {
  if (!isOpen) return null;

  const baseContentStyle =
    'modal-content flex flex-col gap-3 rounded-xl bg-white px-8 py-6 shadow-2xl transition-all duration-300';

  const sizeStyles = {
    small: 'max-w-20',
    medium: 'max-w-3xl',
    large: 'max-w-5xl',
  };

  const computedSizeClass = sizeStyles[size];

  const computedContentClassName = twMerge(
    baseContentStyle,
    computedSizeClass,
    'w-full'
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" // 배경을 50% 불투명하게 조정
      onClick={onClose}
    >
      <div
        className={computedContentClassName}
        onClick={(e) => e.stopPropagation()}
        style={{ minWidth: '300px' }}
      >
        <ModalHeader label={label} onClose={onClose} />
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};
