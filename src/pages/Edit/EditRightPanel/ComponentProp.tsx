import { Segmented } from 'antd';
import {
  getComponentConfigByType,
  type ComponentPropsType,
} from '../../../components/componentLib';
import useGetNodeInfo from '../../../hooks/useGetNodeInfo';
import useStore from '../../../store';
import { COMPONENT_SETTING_TAB } from '../../../constant/defaultConfig';

export default function ComponentProp() {
  const { updatePageNode, changeComponentSettingTab } = useStore();
  const node = useGetNodeInfo();

  if (!node) {
    return <div style={{ textAlign: 'center' }}>未选中组件</div>;
  }
  const componentConfig = getComponentConfigByType(node.type);

  if (!componentConfig) {
    return <div style={{ textAlign: 'center' }}>未选中组件</div>;
  }

  const onChange = (props: ComponentPropsType) => {
    if (!node) {
      return;
    }
    updatePageNode(node.id, props);
  };

  // console.log("node", node);

  const { PropComponent } = componentConfig;
  return (
    <div className="h-full">
      <div className="sticky! top-[62px]! pb-2! bg-white z-20">
        <Segmented
          className="h-8"
          defaultValue={COMPONENT_SETTING_TAB.CONTENT}
          options={Object.values(COMPONENT_SETTING_TAB)}
          onChange={(value) => {
            changeComponentSettingTab(value);
          }}
          block
        />
      </div>
      <PropComponent onChange={onChange} {...node} />
    </div>
  );
}
