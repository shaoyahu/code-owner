// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from '.';
import type { BasicComponentPropsType, PageType } from '../types';
import { findArrAndIndex, insertIndex, removeIndex } from '../utils/calc';

export type PageSlice = {
  selectedPageId: string;
  page: PageType;
  setPageSize: (size: { height: string; width: string; }) => void;
  resetPage: (page: PageSlice['page']) => void;
  setSelectedPageId: (id: string) => void;
  moveNode: (dragId: string, dropId: string, type: 'after' | 'before' | 'inside') => void;
};

const initialPage = {
  name: 'defaultPage',
  id: '-1',
  page: { height: '800px', width: '1100px' },
};

export const createPageSlice: SliceCreator<PageSlice> = (set) => ({
  page: initialPage,
  selectedPageId: '-1',

  setPageSize: ({ height, width }) =>
    set((state) => {
      state.page.page.height = height;
      state.page.page.width = width;
    }),

  setSelectedPageId: (id) => set({ selectedPageId: id }),
  resetPage: (page: PageSlice['page'] = initialPage) =>
    set((state) => {
      state.page = page;
    }),
  moveNode: (dragId: string, dropId: string, type: 'after' | 'before' | 'inside') => set(state => {
    const { nodes } = state.page;
    let movedNode: BasicComponentPropsType[] = [];
    if (nodes) {
      const dragRes = findArrAndIndex(nodes, dragId);
      if (dragRes) {
        const { arr: dragArr, index: dragIndex } = dragRes;
        movedNode = removeIndex(dragArr, dragIndex);
      }

      const dropRes = findArrAndIndex(nodes, dropId);
      if (dropRes) {
        const { arr: dropArr, index: dropIndex } = dropRes;
        if (type === 'after') {
          insertIndex(dropArr, dropIndex + 1, movedNode[0]);
        } else if (type === 'before') {
          insertIndex(dropArr, dropIndex, movedNode[0]);
        } else {
          dropArr[dropIndex].childNode = [...movedNode, ...(dropArr[dropIndex].childNode || [])];
        }
      }
    }
  })
});
