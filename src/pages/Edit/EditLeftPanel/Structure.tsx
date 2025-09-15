import { useEffect, useState } from 'react';
import useGetPageInfo from '../../../hooks/useGetPageInfo';
import { Space, Tag, Tree, type TreeDataNode, type TreeProps } from 'antd';
import type { BasicComponentPropsType } from '../../../types';
import { calcNewStruct } from '../../../utils/calc';

export default function Structure() {
  const { nodes } = useGetPageInfo();
  const [struct, setStruct] = useState<TreeDataNode[]>([]);

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };
  const onDrop: TreeProps['onDrop'] = (info) => {
    console.log('info', info);
    const dragKey = info.dragNode.key as string;
    const dropKey = info.node.key as string;
    const { dropPosition, dropToGap } = info;

    if (dropToGap) {
      // 插在缝隙（同级）
      if (dropPosition >= 1) {
        // 插在目标节点之后，只需要关注 node 对象，一定在这个对象的下面一个
        const result = calcNewStruct(struct, dragKey, dropKey);
      }
    }

    // /* ---------- 1. 成为子节点 ---------- */
    // if (!dropToGap && dropPosition === 0) {
    //   console.log(`把 ${dragKey} 放进 ${dropKey} 的内部`);
    //   return;
    // }

    // /* ---------- 2. 插在缝隙（同级） ---------- */
    // // 计算“插在目标节点之后第 offset 个位置”
    // const offset = dropPosition > 1 ? (dropPosition - 1) / 2 : 0;
    // console.log(`把 ${dragKey} 插在 ${dropKey} 之后第 ${offset} 个位置`);

    // /* ---------- 3. （可选）算出父节点 key 和 在父节点中的插入索引 ---------- */
    // const dropPos = info.node.pos; // 例： "0-2-1"
    // const posArr = dropPos.split('-').map(Number);
    // const insertIndex = posArr[posArr.length - 1] + 1 + offset; // 在父节点中的插入索引
    // posArr.pop(); // 去掉最后一级 → 父路径
    // const parentPos = posArr.join('-'); // 父节点的 pos

    // // 如果你维护了一个  pos->key  的 Map，这里就能直接拿到 parentKey
    // // const parentKey = posMap.get(parentPos);

    // console.log(`父节点 pos=${parentPos}，插入索引=${insertIndex}`);
  };

  useEffect(() => {
    function fn(nodes: BasicComponentPropsType[] = []) {
      const result: TreeDataNode[] = [];
      nodes.forEach((item) => {
        const obj: TreeDataNode = {
          title: (
            <Space align="center">
              <span>{item.name}</span>
              {/* <Tag>{item.type}</Tag> */}
              <Tag>{item.id}</Tag>
            </Space>
          ),
          key: item.id,
        };
        if (item.childNode) {
          obj.children = fn(item.childNode);
        }
        result.push(obj);
      });
      return result;
    }
    const res = fn(nodes);
    setStruct(res);
  }, [nodes]);

  return (
    <Tree
      onSelect={onSelect}
      treeData={struct}
      draggable={{
        icon: false,
      }}
      onDragStart={(obj) => {
        console.log('onDragStart', obj);
      }}
      onDrop={onDrop}
    />
  );
}
