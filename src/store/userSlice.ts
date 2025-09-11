// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from '.';

export type UserSlice = {
  user: { id: number; name: string; };
  setName: (name: string) => void;
};

const initialUser = { id: 1, name: 'shaoyahu' };

export const createUserSlice: SliceCreator<UserSlice> = (set) => ({
  user: initialUser,

  setName: (name) =>
    set((state) => {
      state.user.name = name;
    }),
});