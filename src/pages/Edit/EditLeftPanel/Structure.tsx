import { useEffect, useState } from "react";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import { Tree, type TreeDataNode, type TreeProps } from "antd";

const treeData: TreeDataNode[] = [
  {
    title: "parent 1",
    key: "0-0",
    children: [
      {
        title: "parent 1-0",
        key: "0-0-0",
        children: [
          {
            title: "leaf",
            key: "0-0-0-0",
          },
          {
            title: "leaf",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "parent 1-1",
        key: "0-0-1",
        children: [
          {
            title: <span style={{ color: "#1677ff" }}>sss</span>,
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];

export default function Structure() {
  const { nodes } = useGetPageInfo();
  const [struct, setStruct] = useState<TreeDataNode[]>([]);
  console.log("page.nodes", nodes);
  const onSelect: TreeProps["onSelect"] = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };

  useEffect(() => {
    function fn(nodes) {
      return [];
    }
    const res = fn(nodes);
    setStruct(res);
  }, [nodes]);

  return (
    <div className="bg-amber-300 h-full">
      <Tree
        defaultExpandedKeys={["0-0-0", "0-0-1"]}
        defaultSelectedKeys={["0-0-1"]}
        defaultCheckedKeys={["0-0-0", "0-0-1"]}
        onSelect={onSelect}
        // treeData={treeData}
        treeData={struct}
        draggable
        onDragStart={({ event, node }) => {
          console.log("onDragStart", event, node);
        }}
      />
    </div>
  );
}
