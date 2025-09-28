import { ControlOutlined, SettingOutlined } from '@ant-design/icons';
import { Tabs, type TabsProps } from 'antd';
import ComponentProp from './ComponentProp';
import PageSetting from './PageSetting';
import { useState } from 'react';
import StickyBox from 'react-sticky-box';
import './index.css';

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

  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => {
    return (
      <StickyBox offsetTop={0} className="z-1">
        <DefaultTabBar {...props} className="bg-white" />
      </StickyBox>
    );
  };

  return (
    <div className="flex h-full overflow-y-scroll">
      <Tabs
        renderTabBar={renderTabBar}
        className="flex flex-col flex-1"
        tabBarStyle={{ flexShrink: 0 }}
        defaultActiveKey={activeKey}
        items={tabsItems}
      />
    </div>
  );
}
