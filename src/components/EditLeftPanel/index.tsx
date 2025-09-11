import {
  AntDesignOutlined,
  PartitionOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Tabs } from 'antd';

export default function EditLeftPanel() {
  const tabsItems = [
    {
      key: 'pages',
      label: (
        <div>
          <UnorderedListOutlined />
          <span>页面</span>
        </div>
      ),
      children: <div>页面</div>,
    },
    {
      key: 'structure',
      label: (
        <div>
          <PartitionOutlined />
          <span>结构</span>
        </div>
      ),
      children: <div>结构</div>,
    },
    {
      key: 'componentLib',
      label: (
        <div>
          <AntDesignOutlined />
          <span>Antd</span>
        </div>
      ),
      children: <div>组件库</div>,
    },
  ];
  return <Tabs defaultActiveKey="componentLib" items={tabsItems} />;
}
