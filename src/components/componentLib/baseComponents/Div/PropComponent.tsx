import { ColorPicker, Form, Input, Select } from "antd";
import type { DivPropsType } from "./interface";
import { useEffect } from "react";
import useStore from "../../../../store";
import { COMPONENT_SETTING_TAB } from "../../../../constant/defaultConfig";
import { genOptions } from "../../../../utils/calc";

export default function PropComponent(props: DivPropsType) {
  const { name, tailwind, css, event, onChange } = props;
  const { componentSettingTab } = useStore();
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
    <Form
      form={form}
      onValuesChange={handleValueChange}
      layout="vertical"
      initialValues={{ tailwind, css, name, event }}
    >
      {/* 基本内容 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.CONTENT ? "" : "hidden"
        }`}
      >
        <Form.Item
          name="name"
          label="组件名称"
          rules={[{ required: true, message: "标题必填" }]}
        >
          <Input />
        </Form.Item>
      </div>

      {/* 样式 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.STYLE ? "" : "hidden"
        }`}
      >
        <Form.Item name={["css", "fontSize"]} label="字体大小">
          <Select
            options={[
              ...genOptions(10, 40, {
                type: "string",
                unit: "px",
                withUnit: true,
                step: 2,
              }),
              ...genOptions(1, 6, {
                type: "string",
                unit: "rem",
                withUnit: true,
                step: 0.5,
              }),
            ]}
          />
        </Form.Item>
        <Form.Item
          name={["css", "color"]}
          getValueFromEvent={(color) => color.toHexString()}
          label="字体颜色"
        >
          <ColorPicker format="hex" showText />
        </Form.Item>
      </div>

      {/* 事件 */}
      <div
        className={`${
          componentSettingTab === COMPONENT_SETTING_TAB.EVENT ? "" : "hidden"
        }`}
      >
        <Form.Item
          name={["event", "onClick", "handleCode"]}
          label="鼠标左键单击"
        >
          <Input.TextArea />
        </Form.Item>
      </div>
    </Form>
  );
}
