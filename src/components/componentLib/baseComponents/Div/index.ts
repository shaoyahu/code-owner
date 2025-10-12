import Component from "./Component";
import DragComponent from "./DragComponent";
import { DivDefaultProps } from "./interface";
import PropComponent from "./PropComponent";
export type { DivPropsType } from "./interface";

export default {
  title: "Div 块",
  type: "div",
  Component,
  PropComponent,
  DragComponent,
  defaultProps: DivDefaultProps,
};
