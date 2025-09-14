import {
  ApiOutlined,
  DeploymentUnitOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd";
import ComponentLib from "./ComponentLib";
import Structure from "./Structure";

export default function EditLeftPanel() {
  const tabsItems = [
    {
      key: "pages",
      label: (
        <div>
          <UnorderedListOutlined />
          <span>页面</span>
        </div>
      ),
      children: <div>页面</div>,
    },
    {
      key: "structure",
      label: (
        <div>
          <DeploymentUnitOutlined />
          <span>结构</span>
        </div>
      ),
      children: <Structure />,
    },
    {
      key: "componentLib",
      label: (
        <div>
          <ApiOutlined />
          <span>组件库</span>
        </div>
      ),
      children: <ComponentLib />,
    },
  ];
  return <Tabs defaultActiveKey="componentLib" items={tabsItems} />;
}
