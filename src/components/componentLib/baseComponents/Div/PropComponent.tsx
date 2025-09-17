import { ColorPicker, Form, Input, Select } from 'antd';
import type { DivPropsType } from './interface';
import { useEffect } from 'react';

export default function PropComponent(props: DivPropsType) {
  const { name, tailwind, css, onChange } = props;
  const [form] = Form.useForm();

  function handleValueChange() {
    const newValues = form.getFieldsValue();
    console.log('newValues', newValues);
    if (onChange) {
      onChange(newValues);
    }
  }

  useEffect(() => {
    form.setFieldsValue({ tailwind, css, name });
  }, [tailwind, css, name, form]);

  return (
    <Form
      form={form}
      onValuesChange={handleValueChange}
      layout="vertical"
      initialValues={{ tailwind, css, name }}
    >
      <Form.Item
        name="name"
        label="组件名称"
        rules={[{ required: true, message: '标题必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="fontSize" label="字体大小">
        <Select
          options={[
            { value: '[10px]', label: '10px' },
            { value: '[12px]', label: '12px' },
            { value: '[14px]', label: '14px' },
            { value: '[16px]', label: '16px' },
            { value: '[18px]', label: '18px' },
            { value: '[20px]', label: '20px' },
            { value: '4', label: '1rem' },
            { value: '8', label: '2rem' },
            { value: '12', label: '3rem' },
          ]}
        />
      </Form.Item>
      <Form.Item name="color" label="字体颜色">
        <ColorPicker showText />
      </Form.Item>
    </Form>
  );
}
