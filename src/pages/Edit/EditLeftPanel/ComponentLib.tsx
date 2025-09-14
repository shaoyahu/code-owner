import { Collapse, Space, Typography, type CollapseProps } from "antd";
import {
  componentConfigGroup,
  type ComponentConfigType,
} from "../../../components/componentLib";
{
  /* <RightCircleOutlined /> <DownCircleOutlined /> */
}
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
          body: "overflow-hidden !py-1 !px-2",
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

  function handleClick() {
    console.log("Component", Component);
  }
  return (
    <div
      key={type}
      className="bg-white hover:bg-gray-200 !my-1 !pl-8 rounded-md h-12 leading-12 cursor-pointer"
      onClick={handleClick}
    >
      <Text>{title}</Text>
    </div>
  );
}
