import Component from "./Component";
import DragComponent from "./DragComponent";
import { AdButtonDefaultProps } from "./interface";
import PropComponent from "./PropComponent";

export type { AdButtonPropsType } from "./interface";

export default {
  title: "Button 按钮",
  type: "ad-button",
  Component,
  PropComponent,
  DragComponent,
  defaultProps: AdButtonDefaultProps,
};
