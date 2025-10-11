import { v4 as uuidv4 } from 'uuid';

// arr: 目标数据
// key: 目标节点 id
// 在 <T extends { id: string; childNode?: T[]; }> 数据结构中

import { ICON_MAP } from "../constant/iconMap";

// return { arr: 目标节点所在数组; index: 目标节点在数组中的索引; node: 目标节点}
export function findArrAndIndex<T extends { id: string; childNode?: T[]; }>(
  arr: T[],
  key: string
): { arr: T[]; index: number; node: T; } | undefined {
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node.id === key) return { arr, index: i, node: arr[i] }; // 本级命中

    if (node.childNode) {
      // 下探
      const res = findArrAndIndex(node.childNode, key);
      if (res) return res;
    }
  }
  return undefined;
}

export const removeIndex = <T>(arr: Array<T>, index: number) =>
  arr.splice(index, 1);

export const insertIndex = <T>(arr: Array<T>, index: number, item: T) => (
  arr.splice(index, 0, item), arr
);

// 获取 min-max 数之间指定 Array<{ value: string|number; label: string }> 供 antd select 组件使用
export const genOptions = (
  min: number,
  max: number,
  config?: { type?: string; unit?: string; withUnit?: boolean; step?: number; }
): Array<{ value: string | number; label: string; }> => {
  if (min >= max) {
    return [{ value: "Error", label: "Error, max can not less then min!" }];
  }

  const res: Array<{ value: string | number; label: string; }> = [];

  const {
    type = "number",
    unit = "",
    withUnit = false,
    step = 1,
  } = config || {};

  for (let i = min; i <= max; i += step) {
    let value: string | number;
    const label = `${i} ${unit}`;
    if (type === "number") {
      value = i;
    } else {
      value = withUnit ? `${i}${unit}` : `${i}`;
    }
    const option = { label, value };
    res.push(option);
  }

  return res;
};


export function getIcon(icon: string) {
  return ICON_MAP[icon as keyof typeof ICON_MAP] || null;
}


export function genUUID() {
  return uuidv4();
}

export function getChildNodeIdList<T extends { id: string; childNode?: T[]; }>(
  node: T
): string[] {
  const res: string[] = [];
  if (node.childNode) {
    node.childNode.forEach((item) => {
      res.push(item.id);
      res.push(...getChildNodeIdList(item));
    });
  }
  return res;
}