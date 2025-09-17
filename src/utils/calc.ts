
export function findArrAndIndex<T extends { id: string; childNode?: T[]; }>(arr: T[], key: string): { arr: T[]; index: number; node: T; } | undefined {
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node.id === key) return { arr, index: i, node: arr[i] }; // 本级命中

    if (node.childNode) { // 下探
      const res = findArrAndIndex(node.childNode, key);
      if (res) return res;
    }
  }
  return undefined;
}

export const removeIndex = <T>(arr: Array<T>, index: number) => (arr.splice(index, 1));

export const insertIndex = <T>(arr: Array<T>, index: number, item: T) => (arr.splice(index, 0, item), arr);
