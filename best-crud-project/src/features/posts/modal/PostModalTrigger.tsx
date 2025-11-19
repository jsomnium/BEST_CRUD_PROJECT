'use client';

import Button from '@/src/shared/ui/Button';
import { Modal } from '@/src/shared/ui/Modal';
import { useManagePostStore } from '../useManagePostStore.ts';
import { Post } from '@/src/entities/post/types/post-type.js';
import PostForm from '../ui/PostForm';

export function PostModalTrigger() {
  const { isOpen, actions } = useManagePostStore();
  const mockPost: Post = {
    postId: '1',
    title: '샘플 게시글',
    author: '작성자',
    postDate: '2023-10-01',
    content: '이것은 샘플 게시글입니다.',
    category: '기타',
    difficulty: 'medium',
  };

  return (
    <>
      <Button
        label="수정하기"
        className="hover:bg-primary-deep w-40"
        onClick={() => actions.openEdit(mockPost)}
      />

      <Modal isOpen={isOpen} onClose={actions.close} HeaderLabel="게시판 수정">
        <PostForm initialData={mockPost} />
      </Modal>
    </>
  );
}
