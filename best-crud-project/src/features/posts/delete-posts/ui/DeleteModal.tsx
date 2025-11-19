'use client';

import { Modal } from '@/src/shared/ui/Modal';
import Button from '@/src/shared/ui/Button';
import { usePostSelectionStore } from '@/src/entities/post/post-selection-store';
import { useDeletePostStore } from '../model/useDeletePostStore';

// Mock API
const mockDeleteApi = async (ids: string[]) => {
  console.log(`[API MOCK] 다음 ID 삭제 요청: ${ids.join(', ')}`);
  await new Promise((resolve) => setTimeout(resolve, 500));
  return { success: true, deletedCount: ids.length };
};

export function ConfirmDeleteModal() {
  const { isModalOpen, actions: modalActions } = useDeletePostStore();
  const { selectedIds, clear: clearSelection } = usePostSelectionStore();

  const idsToDelete = Array.from(selectedIds);

  // 실제 프로젝트에서는 Tanstack Query의 useMutation 사용
  const handleDelete = async () => {
    if (idsToDelete.length === 0) return;

    try {
      await mockDeleteApi(idsToDelete);
      clearSelection();
      modalActions.close();
      console.log('선택된 게시글 삭제 완료!');
      // 게시글 목록 새로고침 또는 캐시 무효화 로직 추가
    } catch (error) {
      console.error('삭제 실패:', error);
      modalActions.close();
    }
  };

  if (!isModalOpen) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={modalActions.close}
      HeaderLabel="게시글 삭제 확인"
      size="small"
    >
      <div className="flex w-full flex-col items-center gap-6">
        <p className="my-8 text-center">
          선택된 <strong className="">{idsToDelete.length}개의 게시글</strong>
          을<br />
          정말로 삭제하시겠습니까?
        </p>

        <div className="flex w-full gap-3">
          <Button
            label="취소"
            variant="black"
            onClick={modalActions.close}
            className="w-full"
          />
          <Button
            label="삭제"
            variant="white"
            onClick={handleDelete}
            className="w-full"
          />
        </div>
      </div>
    </Modal>
  );
}
