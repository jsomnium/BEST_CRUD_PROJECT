import { create } from 'zustand';
import type { Post } from '@/src/entities/post/types/post-type';

type ManagePostState = {
  isOpen: boolean;
  mode: 'create' | 'edit';
  editTarget: Post | null; // 수정할 때 채워질 데이터
  actions: {
    openCreate: () => void;
    openEdit: (post: Post) => void;
    close: () => void;
  };
};

export const useManagePostStore = create<ManagePostState>((set) => ({
  isOpen: false,
  mode: 'create',
  editTarget: null,
  actions: {
    openCreate: () => set({ isOpen: true, mode: 'create', editTarget: null }),
    openEdit: (post) => set({ isOpen: true, mode: 'edit', editTarget: post }),
    close: () => set({ isOpen: false, editTarget: null }),
  },
}));