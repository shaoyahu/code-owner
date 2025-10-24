// import { immer } from 'zustand/middleware/immer';
import type { SliceCreator } from ".";
import type { ComponentPropsType } from "../components/componentLib";
import { COMPONENT_SETTING_TAB } from "../constant/defaultConfig";
import type { BasicComponentPropsType, PageType } from "../types";
import {
  findArrAndIndex,
  getChildNodeIdList,
  insertIndex,
  removeIndex,
} from "../utils/calc";

export type PageSlice = {
  // state
  // 选中的页面 id
  selectedPageId: string;
  // 选中的页面中的节点/元素/组件 id
  selectedNodeId: string;
  // 页面的所有信息
  page: PageType;
  // 组件设置页中的三个 tab 标签的决定当前显示的是哪个 tab
  componentSettingTab: string;
  // 鼠标移动时 hover 到的组件 id 列表，由外到内
  hoverNodeIdList: string[];
  // 组件拖拽时 hover 到的组件 id
  dragHoverNodeId: string;
  // 展示删除区域
  showDeleteArea: boolean;




  // action
  // 修改展示删除区域
  changeShowDeleteArea: () => void;
  // 修改拖拽组件时 hover 到的组件的 id
  changeDragHoverNodeId: (id: string) => void;
  // 鼠标移动中移入任意组件时将当前移入的组件 Id 添加到 hover 节点列表中
  pushHoverNodeId: (id: string) => void;
  // 鼠标移动中移出任意组件时将 hover 节点列表的最后一个元素去除
  popHoverNodeId: () => void;
  // 更新 page 数据
  updatePage: (page: PageSlice["page"]) => void;
  // 重置 page 数据
  resetPage: (page: PageSlice["page"]) => void;
  // 设置选中的页面 id
  setSelectedPageId: (id: string) => void;
  // 在树结构中移动节点的位置
  moveNode: (
    dragId: string,
    dropId: string,
    type: "after" | "before" | "inside"
  ) => void;
  // 从组件库中添加组件到视图中
  addComponentToPage: (component: ComponentPropsType, parentId: string) => void;
  // 在结构树和页面中点击节点/组件/元素时更新选中的元素 Id
  changeSelectedNodeId: (id: string) => void;
  // 根据 Id 更新指定节点/元素/组件
  updatePageNode: (id: string, props: ComponentPropsType) => void;
  // 更改组件设置的 tab 页
  changeComponentSettingTab: (tab: string) => void;
};

const initialPage = {
  name: "defaultPage",
  id: "-1",
  page: { height: "800px", width: "1100px" },
  nodes: []
};

export const createPageSlice: SliceCreator<PageSlice> = (set) => ({
  page: initialPage,
  selectedPageId: "-1",
  selectedNodeId: "-1",
  componentSettingTab: COMPONENT_SETTING_TAB.CONTENT,
  hoverNodeIdList: [],
  dragHoverNodeId: "",
  showDeleteArea: false,

  changeShowDeleteArea: () => set((state) => ({ showDeleteArea: !state.showDeleteArea })),

  changeDragHoverNodeId: (id) => set(() => ({ dragHoverNodeId: id })),

  pushHoverNodeId: (id) =>
    set((state) => {
      return { hoverNodeIdList: [...state.hoverNodeIdList, id] };
    }),

  popHoverNodeId: () =>
    set((state) => ({
      hoverNodeIdList: state.hoverNodeIdList.slice(0, -1),
    })),

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
        if (!dragRes) return;
        const { arr: dragArr, index: dragIndex } = dragRes;
        const dragNode = dragArr[dragIndex];
        // 这里需要解决拖拽嵌套的问题
        // 在这个方法中判断如果拖放元素是拖拽元素的子元素，则取消拖拽
        const idList = getChildNodeIdList(dragNode);
        if (idList.includes(dropId)) return;

        if (dropId === "edit-container") {
          // 是从别的地方拖拽到编辑容器中，属于页面组件的 nodes 内容的第一层，默认放到末尾去
          removeIndex(dragArr, dragIndex);
          insertIndex(nodes, nodes.length, dragNode);
        } else {
          const dropRes = findArrAndIndex(nodes, dropId);
          if (dropRes) {
            // 拖放元素在元素中，说明并不是删除
            movedNode = removeIndex(dragArr, dragIndex);
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

          if (!dropRes && dropId === "delete-area") {
            // 拖放元素不在页面元素节点中，且拖放元素 Id 为删除框 Id 符合移动到删除框就直接删除，否则不做其他处理
            movedNode = removeIndex(dragArr, dragIndex);
          }
        }
      }
    }),

  // 从组件库中添加组件到视图中
  addComponentToPage: (component: ComponentPropsType, dropId: string) => {
    set((state) => {
      const { nodes } = state.page;
      if (nodes) {
        if (dropId === "edit-container") {
          // 拖拽到编辑容器中，属于页面组件的 nodes 内容的第一层，默认放到末尾去
          insertIndex(nodes, nodes.length, component);
        } else {
          const dropRes = findArrAndIndex(nodes, dropId);
          if (dropRes) {
            const { arr: dropArr, index: dropIndex } = dropRes;
            dropArr[dropIndex].childNode = [
              component,
              ...(dropArr[dropIndex].childNode || []),
            ];
          }
        }
      }
    });
  },

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
