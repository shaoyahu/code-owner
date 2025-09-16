import { useEffect, useState } from 'react';
import useGetPageInfo from '../../../hooks/useGetPageInfo';
import { Space, Tag, Tree, type TreeDataNode, type TreeProps } from 'antd';
import type { BasicComponentPropsType } from '../../../types';
import useStore from '../../../store';

export default function Structure() {
  const { nodes } = useGetPageInfo();
  const [struct, setStruct] = useState<TreeDataNode[]>([]);
  const { moveNode } = useStore();

  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onDrop: TreeProps['onDrop'] = (info) => {
    const dragId = info.dragNode.key.toString();
    const dropId = info.node.key.toString();
    const { dropPosition, dropToGap } = info;

    if (dropToGap) {
      // 插在缝隙（同级）
      if (dropPosition >= 1) {
        // 插在目标节点之后，只需要关注 node 对象，一定在这个对象的下面一个
        moveNode(dragId, dropId, 'after');
      }
      if (dropPosition < 0) {
        // 插在目标节点之前，只需要关注 node 对象，一定在这个对象的上面一个
        moveNode(dragId, dropId, 'before');
      }
    } else {
      // 插在目标节点内部，只需要关注 node 对象，一定在这个对象的 children 数组中第一个的位置
      moveNode(dragId, dropId, 'inside');
    }
  };

  useEffect(() => {
    function fn(nodes: BasicComponentPropsType[] = []) {
      const result: TreeDataNode[] = [];
      nodes.forEach((item) => {
        const obj: TreeDataNode = {
          title: (
            <Space align="center">
              <span>{item.name}</span>
              <Tag>{item.type}</Tag>
              {/* <Tag>{item.id}</Tag> */}
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
      onDrop={onDrop}
    />
  );
}
