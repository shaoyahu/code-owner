import { Form } from 'antd';
import type { DivPropsType } from './interface';
import { useEffect } from 'react';
import ComponentSettingForm, {
  type InitialType,
} from '../../../ComponentSettingForm';

export default function PropComponent(props: DivPropsType) {
  const { name, tailwind, css, event, onChange } = props;
  const [form] = Form.useForm();

  function handleValueChange() {
    const newValues = form.getFieldsValue();
    if (onChange) {
      onChange(newValues);
    }
  }

  useEffect(() => {
    form.setFieldsValue({ tailwind, css, name, event });
  }, [tailwind, css, name, form, event]);

  return (
    <ComponentSettingForm<InitialType<DivPropsType>>
      form={form}
      handleValueChange={handleValueChange}
      initialValues={{ tailwind, css, name, event }}
    />
  );
}
