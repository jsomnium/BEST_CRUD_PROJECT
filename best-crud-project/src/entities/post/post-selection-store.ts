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
        return { selectedIds: newSelectedIds }; 
      }
      
      newSelectedIds.add(id);
      return { selectedIds: newSelectedIds };
    }),
  
  selectAll: (ids) =>
    set((state) => {
      const isAllSelected = ids.every((id) => state.selectedIds.has(id));
      
      return {
        selectedIds: isAllSelected ? new Set() : new Set(ids),
      };
    }),

  clear: () => set({ selectedIds: new Set() }),
}));