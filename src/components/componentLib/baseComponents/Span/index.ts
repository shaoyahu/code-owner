import Component from "./Component";
import DragComponent from "./DragComponent";
import { SpanDefaultProps } from "./interface";
import PropComponent from "./PropComponent";
export type { SpanPropsType } from "./interface";

export default {
  title: "Span 行",
  type: "span",
  Component,
  PropComponent,
  DragComponent,
  defaultProps: SpanDefaultProps,
};
