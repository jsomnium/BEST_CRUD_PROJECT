import { create } from 'zustand';

type DeleteModalState = {
  isModalOpen: boolean;
  actions: {
    open: () => void;
    close: () => void;
  };
};

export const useDeletePostStore = create<DeleteModalState>((set) => ({
  isModalOpen: false,
  actions: {
    open: () => set({ isModalOpen: true }),
    close: () => set({ isModalOpen: false }),
  },
}));