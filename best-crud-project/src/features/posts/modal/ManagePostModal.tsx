'use client';

import PostForm from '../ui/PostForm';
import { Modal } from '@/src/shared/ui/Modal';
import { useManagePostStore } from '../useManagePostStore.ts';
import { Post } from '@/src/entities/post/types/post-type.js';

export function ManagePostModal() {
  const { isOpen, mode, editTarget, actions } = useManagePostStore();

  // API Mutation 훅 불러오기
  // const { mutate: createPost } = useCreatePostMutation();
  // const { mutate: updatePost } = useUpdatePostMutation();

  const handleSubmit = (data: Post) => {
    if (mode === 'create') {
      console.log('생성 API 호출:', data);
      // createPost(data);
    } else {
      console.log('수정 API 호출:', { id: editTarget?.postId, ...data });
      // updatePost({ id: editTarget.id, ...data });
    }
    actions.close(); // 성공 시 닫기
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={actions.close}
      HeaderLabel={mode === 'create' ? '게시글 생성' : '게시글 수정'}
    >
      <div className="w-full p-6">
        <PostForm
          defaultValues={editTarget}
          onSubmit={handleSubmit}
          onCancel={actions.close}
        />
      </div>
    </Modal>
  );
}
