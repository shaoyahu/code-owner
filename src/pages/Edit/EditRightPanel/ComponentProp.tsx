import {
  getComponentConfigByType,
  type ComponentPropsType,
} from '../../../components/componentLib';
import useGetNodeInfo from '../../../hooks/useGetNodeInfo';
import useStore from '../../../store';

export default function ComponentProp() {
  const { updatePageNode } = useStore();
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

  console.log('node', node);

  const { PropComponent } = componentConfig;
  return <PropComponent onChange={onChange} {...node} />;
}
