'use client';

import Button from '@/src/shared/ui/Button';
import { usePostSelectionStore } from '@/src/features/posts/model/usePostSelectionStore';
import { useDeletePostStore } from '../model/useDeletePostStore';
import { ConfirmDeleteModal } from './DeleteModal';

export function DeleteButtonTrigger() {
  const { selectedIds } = usePostSelectionStore();
  const { open } = useDeletePostStore((state) => state.actions);
  const isDisabled = selectedIds.size === 0;

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    open();
  };

  const buttonClassName = `flex h-8 w-25 items-center justify-center ${
    isDisabled ? 'bg-grey-350 text-grey-50 cursor-not-allowed border-none' : ''
  }`;

  return (
    <>
      <Button
        label="삭제"
        disabled={isDisabled}
        className={buttonClassName}
        onClick={handleClick}
        variant="white"
      />
      <ConfirmDeleteModal />
    </>
  );
}
