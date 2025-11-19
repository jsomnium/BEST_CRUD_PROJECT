'use client';

import Button from '@/src/shared/ui/Button';
import { useManagePostStore } from '../useManagePostStore.ts';
import { Post } from '@/src/entities/post/types/post-type.js';
import { ManagePostModal } from './ManagePostModal';
import { useRouter } from 'next/navigation';

type PostModalTriggerProps = {
  defaultValues: Post;
};

export function PostModalTrigger({ defaultValues }: PostModalTriggerProps) {
  const { actions } = useManagePostStore();
  const router = useRouter();

  return (
    <>
      <Button
        label="이전으로"
        className="mr-3 w-40"
        variant="white"
        onClick={() => router.back()}
      />
      <Button
        label="수정하기"
        className="w-40"
        onClick={() => actions.openEdit(defaultValues)}
      />

      <ManagePostModal />
    </>
  );
}
