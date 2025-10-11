import type { ComponentType, FC } from "react";
import { BlockOutlined, AntDesignOutlined } from "@ant-design/icons";
import DivConfig, { type DivPropsType } from "./baseComponents/Div";
import SpanConfig, { type SpanPropsType } from "./baseComponents/Span";
import AdButtonConfig, {
  type AdButtonPropsType,
} from "./antdComponents/AdButton";

export type ComponentPropsType = DivPropsType &
  AdButtonPropsType &
  SpanPropsType;

export type ComponentConfigType = {
  title: string;
  type: string;
  Component: FC<ComponentPropsType>;
  PropComponent: FC<ComponentPropsType>;
  DragComponent?: FC<ComponentPropsType>;
  defaultProps: ComponentPropsType;
};

const componentConfigList = [DivConfig, SpanConfig, AdButtonConfig];

type ComponentConfigGroupType = {
  groupId: number;
  groupName: string;
  Icon: ComponentType<{ className?: string; style?: React.CSSProperties; }>;
  components: ComponentConfigType[];
};

export const componentConfigGroup: ComponentConfigGroupType[] = [
  {
    groupId: 1,
    groupName: "基础组件",
    Icon: BlockOutlined,
    components: [DivConfig, SpanConfig],
  },
  {
    groupId: 2,
    groupName: "Ant Design",
    Icon: AntDesignOutlined,
    components: [AdButtonConfig],
  },
];
// 根据类型获取组件配置
export function getComponentConfigByType(type: string) {
  return componentConfigList.find((item) => item.type === type);
}
