// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from '.';
import type { PageType } from '../types';

export type PageSlice = {
  selectedPageId: string;
  page: PageType;
  setPageSize: (size: { height: string; width: string; }) => void;
  resetPage: (page: PageSlice['page']) => void;
  setSelectedPageId: (id: string) => void;
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
});