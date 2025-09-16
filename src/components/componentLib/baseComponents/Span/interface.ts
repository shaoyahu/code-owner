import type { BasicComponentPropsType } from "../../../../types";

export type SpanPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
    className?: string;
  }
>;

export const SpanDefaultProps: SpanPropsType = {
  id: "-1",
  name: 'span',
  type: "span",
  text: "默认文本",
};
