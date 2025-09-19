import { Form, Input, Select, Switch, Typography } from 'antd';
import type { AdButtonPropsType } from './interface';
import { useEffect } from 'react';
import ComponentSettingForm, {
  type InitialType,
} from '../../../ComponentSettingForm';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { ICON_LIST } from '../../../../constant/iconMap';

export default function PropComponent(props: AdButtonPropsType) {
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
    <ComponentSettingForm<InitialType<AdButtonPropsType>>
      form={form}
      handleValueChange={handleValueChange}
      initialValues={props}
      otherAttr={
        <>
          <Form.Item
            name={['attr', 'block']}
            label="宽度适配父元素"
            layout="horizontal"
          >
            <Switch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultChecked
            />
          </Form.Item>
          <Form.Item
            name={['attr', 'type']}
            label="type"
            extra={
              <Typography.Text type="secondary" className="text-[10px]!">
                注意：设置 variant 与 color 后，type 不生效。
              </Typography.Text>
            }
          >
            <Select
              allowClear
              options={[
                { label: 'Default', value: 'default' },
                { label: 'Primary', value: 'primary' },
                { label: 'Link', value: 'link' },
                { label: 'Text', value: 'text' },
                { label: 'Dashed', value: 'dashed' },
              ]}
            />
          </Form.Item>
          <Form.Item name={['attr', 'variant']} label="variant">
            <Select
              allowClear
              options={[
                { label: 'Outlined', value: 'outlined' },
                { label: 'Solid', value: 'solid' },
                { label: 'Filled', value: 'filled' },
                { label: 'Text', value: 'text' },
                { label: 'Dashed', value: 'dashed' },
              ]}
            />
          </Form.Item>
          <Form.Item name={['attr', 'color']} label="color">
            <Select
              allowClear
              options={[
                { label: 'Default', value: 'default' },
                { label: 'Primary', value: 'primary' },
                { label: 'Danger', value: 'danger' },
              ]}
            />
          </Form.Item>
          <Form.Item name={['attr', 'disabled']} label="disabled">
            <Input placeholder="exp: {loading}" />
          </Form.Item>
          <Form.Item name={['attr', 'icon']} label="icon">
            <Select allowClear options={ICON_LIST} />
          </Form.Item>
          <Form.Item>{/* <Select allowClear options={{}} /> */}</Form.Item>
        </>
      }
    />
  );
}
