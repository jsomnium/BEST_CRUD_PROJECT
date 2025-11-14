import { create } from 'zustand';

interface PostSelectionState {
  selectedIds: Set<string>;
  toggleId: (id: string) => void;
  selectAll: (ids: string[]) => void;
  clear: () => void;
}

export const usePostSelectionStore = create<PostSelectionState>((set) => ({
  selectedIds: new Set(),
  
  toggleId: (id) =>
    set((state) => {
      const newSelectedIds = new Set(state.selectedIds);
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
      return { selectedIds: newSelectedIds };
    }),

  selectAll: (ids) =>
    set((state) => {
      if (ids.every((id) => state.selectedIds.has(id))) {
        return { selectedIds: new Set() };
      } // 이미 모두 선택되었다면, 전부 해제

      return { selectedIds: new Set(ids) };
    }),

  clear: () => set({ selectedIds: new Set() }),
}));