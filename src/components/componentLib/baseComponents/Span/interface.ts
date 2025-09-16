import type { BasicComponentPropsType } from "../../../../types";

export type SpanPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
  }
>;

export const SpanDefaultProps: SpanPropsType = {
  id: "-1",
  name: 'span',
  type: "span",
  tailwind: "!m-1",
  text: "默认文本",
};
