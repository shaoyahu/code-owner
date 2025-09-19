import {
  ColorPicker,
  Form,
  Input,
  Select,
  Typography,
  type FormInstance,
} from 'antd';
import { COMPONENT_SETTING_TAB } from '../../constant/defaultConfig';
import useStore from '../../store';
import { genOptions } from '../../utils/calc';

export type InitialType<T> = Omit<T, 'id' | 'type'>;

type ComponentSettingFormProps<T> = {
  form: FormInstance;
  handleValueChange: () => void;
  initialValues?: InitialType<T>;
  // otherAttr?: (prop: T) => React.ReactNode;
  otherAttr?: React.ReactNode;
};

export default function ComponentSettingForm<T>(
  props: ComponentSettingFormProps<T>
) {
  const { form, handleValueChange, initialValues, otherAttr = <></> } = props;
  console.log('initialValues', initialValues);
  const { componentSettingTab } = useStore();
  return (
    <Form
      form={form}
      onValuesChange={handleValueChange}
      layout="vertical"
      initialValues={initialValues}
    >
      {/* 基本内容 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.CONTENT ? '' : 'hidden'
        }`}
      >
        <Form.Item
          name="name"
          label="组件名称"
          rules={[{ required: true, message: '标题必填' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="tailwind"
          label="Tailwind 类名"
          extra={
            <Typography.Text type="secondary" className="text-[10px]!">
              注意：此项修改只有删除可以在编辑器中查看效果。
            </Typography.Text>
          }
        >
          <Input.TextArea />
        </Form.Item>
        {otherAttr}
      </div>

      {/* 样式 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.STYLE ? '' : 'hidden'
        }`}
      >
        <Form.Item name={['css', 'width']} label="宽度">
          <Input placeholder="exp:500px" />
        </Form.Item>
        <Form.Item name={['css', 'height']} label="高度">
          <Input placeholder="exp:200px" />
        </Form.Item>
        <Form.Item name={['css', 'fontSize']} label="字体大小">
          <Select
            allowClear
            options={[
              ...genOptions(10, 40, {
                type: 'string',
                unit: 'px',
                withUnit: true,
                step: 2,
              }),
              ...genOptions(1, 6, {
                type: 'string',
                unit: 'rem',
                withUnit: true,
                step: 0.25,
              }),
            ]}
          />
        </Form.Item>
        <Form.Item
          name={['css', 'color']}
          getValueFromEvent={(color) => color.toHexString()}
          label="字体颜色"
        >
          <ColorPicker format="hex" showText />
        </Form.Item>
      </div>

      {/* 事件 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.EVENT ? '' : 'hidden'
        }`}
      >
        <Form.Item
          name={['event', 'onClick', 'handleCode']}
          label="鼠标左键单击"
        >
          <Input.TextArea />
        </Form.Item>
      </div>
    </Form>
  );
}
