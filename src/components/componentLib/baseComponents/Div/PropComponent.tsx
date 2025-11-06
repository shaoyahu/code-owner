import { Form } from 'antd';
import type { DivPropsType } from './interface';
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

  return (
    <ComponentSettingForm<InitialType<DivPropsType>>
      form={form}
      handleValueChange={handleValueChange}
      initialValues={{ tailwind, css, name, event }}
    />
  );
}
