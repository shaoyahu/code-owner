import type { BasicComponentPropsType } from "../../../../types";

export type SpanPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
  }
>;

export const SpanDefaultProps: SpanPropsType = {
  id: "-1",
  type: "span",
  text: "默认文本",
};
