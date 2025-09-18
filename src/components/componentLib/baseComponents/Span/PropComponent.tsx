import { Form, Input } from 'antd';
import type { SpanPropsType } from './interface';
import { useEffect } from 'react';
import ComponentSettingForm, {
  type InitialType,
} from '../../../ComponentSettingForm';

export default function PropComponent(props: SpanPropsType) {
  const { onChange } = props;
  const [form] = Form.useForm();

  function handleValueChange() {
    const newValues = form.getFieldsValue();
    if (onChange) {
      onChange(newValues);
    }
  }

  useEffect(() => {
    form.setFieldsValue(props);
  }, [form, props]);

  return (
    <ComponentSettingForm<InitialType<SpanPropsType>>
      form={form}
      handleValueChange={handleValueChange}
      initialValues={props}
      basicContent={
        <Form.Item
          name="text"
          label="文本内容"
          rules={[{ required: true, message: '内容必填' }]}
        >
          <Input />
        </Form.Item>
      }
    />
  );
}
