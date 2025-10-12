import { Collapse, Space, Typography, type CollapseProps } from "antd";
import {
  componentConfigGroup,
  type ComponentConfigType,
} from "../../../components/componentLib";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type { ReactNode } from "react";
import { DownCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
const { Text } = Typography;
type Item = NonNullable<CollapseProps["items"]>[number];
export default function ComponentLib() {
  const items = componentConfigGroup.reduce<Item[]>((last, current) => {
    const { groupId, groupName, Icon, components } = current;

    return [
      ...last,
      {
        key: groupId,
        label: (
          <Space align="center" className="leading-4">
            <Icon className="h-1!" />
            <Text>{groupName}</Text>
          </Space>
        ),
        children: (
          <div>
            {components.map((c) => (
              <GenComponent key={c.type} c={c} />
            ))}
          </div>
        ),
        classNames: {
          header: "bg-gray-100",
          body: "!py-1 !px-2",
        },
      },
    ];
  }, []);

  return (
    <>
      <Collapse
        items={items}
        size="large"
        bordered={false}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <DownCircleOutlined style={{ fontSize: "16px", color: "gray" }} />
          ) : (
            <RightCircleOutlined style={{ fontSize: "16px", color: "gray" }} />
          )
        }
      />
    </>
  );
}

function GenComponent({ c }: { c: ComponentConfigType }): ReactNode {
  const { type, title, Component } = c;
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: type,
      data: {
        origin: "lib",
        type,
      },
    });
  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  function handleClick() {
    console.log("Component", Component);
  }
  return (
    <div
      ref={setNodeRef}
      style={style}
      key={type}
      {...listeners}
      {...attributes}
      className="z-50 flex items-center gap-3 bg-white hover:bg-gray-200 !my-1 !pl-8 rounded-md h-12 leading-12 cursor-pointer"
      onClick={handleClick}
    >
      <Text>{title}</Text>
    </div>
  );
}
