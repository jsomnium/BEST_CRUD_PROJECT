'use client';

import Button from '@/src/shared/ui/Button';
import { useManagePostStore } from '../model/useManagePostStore.ts';
import { PostModal } from './PostModal';

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
      <PostModal />
    </>
  );
}
