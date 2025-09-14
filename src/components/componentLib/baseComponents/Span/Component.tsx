import { type SpanPropsType, SpanDefaultProps } from "./interface";

export default function SpanComponent(props: SpanPropsType) {
  const { text } = { ...SpanDefaultProps, ...props };
  return <span>{text}</span>;
}
