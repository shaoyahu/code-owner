import type { TreeDataNode } from "antd";

export function calcNewStruct(struct: TreeDataNode[], dragKey: string, dropKey: string) {

  console.log('dragNode', findNode(struct, dragKey));
  // console.log('dropNode', findNode(struct, dropKey));
}

function findNode(struct, key) {
  console.log('struct', struct);
  struct.forEach(item => {

  });
}