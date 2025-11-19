'use client';

import Button from '@/src/shared/ui/Button';
import { useManagePostStore } from '../useManagePostStore.ts';
import { ManagePostModal } from './ManagePostModal';

export function CreatePostTrigger() {
  const openCreate = useManagePostStore((state) => state.actions.openCreate);

  return (
    <>
      <Button
        label="생성"
        className="flex h-8 w-25 items-center justify-center text-sm"
        variant="white"
        onClick={openCreate}
      />
      <ManagePostModal />
    </>
  );
}
