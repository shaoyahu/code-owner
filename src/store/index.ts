import { create, type StateCreator } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools, persist } from 'zustand/middleware';
import { createPageSlice, type PageSlice } from './pageSlice';
import { createUserSlice, type UserSlice } from './userSlice';

/* 1. 大 Store = 所有小 slice 的并集 */
export type Store = PageSlice & UserSlice;

// 2. 给单个 slice 用的「子 StateCreator」别名
//    第一个泛型填 Store（完整树），第二个填当前 slice 的返回类型
export type SliceCreator<Slice> = StateCreator<
  Store,                       // ← 整棵树
  [['zustand/immer', never]],  // 中间件标记
  [],                          // 没有变换
  Slice                        // 当前 slice 实际返回的形状
>;

/* 3. 真正的 zustand store，只写一次 create */
const useStore = create<Store>()(
  devtools(
    persist(
      immer((...a) => ({
        // 3. 把每个 slice 展开合并
        ...createPageSlice(...a),
        ...createUserSlice(...a),
      })),
      {
        name: 'main-store', // localStorage key
        partialize: (s) => ({
          page: s.page, // 只持久化 page
          // user: s.user  // 想持久化再打开
        }),
      }
    )
  )
);

export default useStore;