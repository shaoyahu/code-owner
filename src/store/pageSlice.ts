// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from ".";
import type { ComponentPropsType } from "../components/componentLib";
import { COMPONENT_SETTING_TAB } from "../constant/defaultConfig";
import type { BasicComponentPropsType, PageType } from "../types";
import { findArrAndIndex, insertIndex, removeIndex } from "../utils/calc";

export type PageSlice = {
  selectedPageId: string;
  selectedNodeId: string;
  page: PageType;
  componentSettingTab: string;
  updatePage: (page: PageSlice["page"]) => void;
  resetPage: (page: PageSlice["page"]) => void;
  setSelectedPageId: (id: string) => void;
  moveNode: (
    dragId: string,
    dropId: string,
    type: "after" | "before" | "inside"
  ) => void;
  changeSelectedNodeId: (id: string) => void;
  updatePageNode: (id: string, props: ComponentPropsType) => void;
  changeComponentSettingTab: (tab: string) => void;
};

const initialPage = {
  name: "defaultPage",
  id: "-1",
  page: { height: "800px", width: "1100px" },
};

export const createPageSlice: SliceCreator<PageSlice> = (set) => ({
  page: initialPage,
  selectedPageId: "-1",
  selectedNodeId: "-1",
  componentSettingTab: COMPONENT_SETTING_TAB.CONTENT,

  updatePage: (page) =>
    set((state) => {
      state.page = {
        ...state.page,
        ...page,
      };
    }),

  setSelectedPageId: (id) => set({ selectedPageId: id }),
  resetPage: (page: PageSlice["page"] = initialPage) =>
    set((state) => {
      state.page = page;
    }),

  // 结构页中树节点移动位置
  moveNode: (
    dragId: string,
    dropId: string,
    type: "after" | "before" | "inside"
  ) =>
    set((state) => {
      const { nodes } = state.page;
      let movedNode: BasicComponentPropsType[] = [];
      if (nodes) {
        const dragRes = findArrAndIndex(nodes, dragId);
        if (dragRes) {
          const { arr: dragArr, index: dragIndex } = dragRes;
          const dragNode = dragArr[dragIndex];
          // 这里需要解决拖拽嵌套的问题
          // 在这个方法中判断如果拖放元素是拖拽元素的子元素，则取消拖拽
          console.log("dragNode", dragNode.id, JSON.stringify(dragNode.childNode));
          movedNode = removeIndex(dragArr, dragIndex);
        }
        const dropRes = findArrAndIndex(nodes, dropId);
        if (dropRes) {
          const { arr: dropArr, index: dropIndex } = dropRes;
          if (type === "after") {
            insertIndex(dropArr, dropIndex + 1, movedNode[0]);
          } else if (type === "before") {
            insertIndex(dropArr, dropIndex, movedNode[0]);
          } else {
            dropArr[dropIndex].childNode = [
              ...movedNode,
              ...(dropArr[dropIndex].childNode || []),
            ];
          }
        }
      }
    }),

  // 选中指定的元素
  changeSelectedNodeId: (id: string) => {
    set((state) => {
      state.selectedNodeId = id;
    });
  },

  // 更新页面节点
  updatePageNode: (id: string, props: ComponentPropsType) => {
    set((state) => {
      const { nodes } = state.page;
      if (nodes) {
        const nodeRes = findArrAndIndex(nodes, id);
        if (nodeRes) {
          const { arr: nodeArr, index: nodeIndex } = nodeRes;
          nodeArr[nodeIndex] = { ...nodeArr[nodeIndex], ...props };
        }
      }
    });
  },

  // 更改组件设置的 tab 页
  changeComponentSettingTab: (tab: string) => {
    set((state) => {
      state.componentSettingTab = tab;
    });
  },
});
