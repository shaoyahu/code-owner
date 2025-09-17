import { ControlOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import ComponentProp from './ComponentProp';
import PageSetting from './PageSetting';
import { useState } from 'react';

const TAB_KEYS = {
  PROP_KEY: 'prop',
  SETTING_KEY: 'setting',
};

export default function EditRightPanel() {
  const [activeKey] = useState(TAB_KEYS.PROP_KEY);
  const tabsItems = [
    {
      key: TAB_KEYS.PROP_KEY,
      label: (
        <div>
          <ControlOutlined />
          <span>组件设置</span>
        </div>
      ),
      children: <ComponentProp />,
    },
    {
      key: TAB_KEYS.SETTING_KEY,
      label: (
        <div>
          <SettingOutlined />
          <span>页面设置</span>
        </div>
      ),
      children: <PageSetting />,
    },
  ];

  return <Tabs activeKey={activeKey} items={tabsItems} />;
}
