// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from '.';

export type PageSlice = {
  selectedPageId: string;
  page: { height: string; width: string; };
  setPageSize: (size: { height: string; width: string; }) => void;
  resetPage: () => void;
  setSelectedPageId: (id: string) => void;
};

const initialPage = { height: '800px', width: '1100px' };

export const createPageSlice: SliceCreator<PageSlice> = (set) => ({
  page: initialPage,
  selectedPageId: '-1',

  setPageSize: ({ height, width }) =>
    set((state) => {
      state.page.height = height;
      state.page.width = width;
    }),

  setSelectedPageId: (id) => set({ selectedPageId: id }),
  resetPage: () =>
    set((state) => {
      state.page = initialPage;
    }),
});