import { useEffect } from 'react';
import useGetPageInfo from '../../../hooks/useGetPageInfo';
import { Button, Form, Input } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import useStore from '../../../store';

export default function PageSetting() {
  const {
    effects,
    imports = [''],
    name,
    otherCode,
    page,
    states,
  } = useGetPageInfo();
  const [form] = Form.useForm();
  const { updatePage } = useStore();

  function handleValueChange() {
    const newValues = form.getFieldsValue();
    updatePage(newValues);
    console.log('newValues', newValues);
  }

  useEffect(() => {
    form.setFieldsValue({ effects, imports, name, otherCode, page, states });
  }, [form, effects, imports, name, otherCode, page, states]);

  return (
    <Form
      form={form}
      onValuesChange={handleValueChange}
      layout="vertical"
      initialValues={{ effects, imports, name, otherCode, page, states }}
    >
      <Form.Item
        name="name"
        label="页面名称"
        rules={[{ required: true, message: '页面名称必填' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={['page', 'height']} label="页面高度">
        <Input />
      </Form.Item>
      <Form.Item name={['page', 'width']} label="页面宽度">
        <Input />
      </Form.Item>
      <Form.List name="imports">
        {(imports, { add, remove }) => (
          <>
            {imports.map(({ key, name }) => (
              <div key={key}>
                <Form.Item
                  key={key}
                  label={name === 0 ? '依赖导入' : ''}
                  name={name}
                >
                  <Input
                    suffix={
                      name !== 0 && (
                        <MinusCircleOutlined
                          style={{ color: '#999' }}
                          onClick={() => remove(name)}
                        />
                      )
                    }
                  />
                </Form.Item>
              </div>
            ))}
            <Form.Item>
              <Button
                block
                type="dashed"
                onClick={() => add()}
                icon={<PlusOutlined />}
              >
                添加依赖行
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item name="otherCode" label="其他函数体内代码">
        <Input.TextArea />
      </Form.Item>
    </Form>
  );
}
