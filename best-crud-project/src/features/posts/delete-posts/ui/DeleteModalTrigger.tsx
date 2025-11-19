'use client';

import Button from '@/src/shared/ui/Button';
import { usePostSelectionStore } from '@/src/entities/post/post-selection-store'; // 기존 스토어
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

  return (
    <>
      <Button
        label="삭제"
        className="flex h-8 w-25 items-center justify-center text-sm"
        variant="white"
        onClick={handleClick}
      />
      <ConfirmDeleteModal />
    </>
  );
}
