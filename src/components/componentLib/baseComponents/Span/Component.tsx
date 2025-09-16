import { type SpanPropsType, SpanDefaultProps } from "./interface";

export default function SpanComponent(props: SpanPropsType) {
  const { text, children, tailwind, css } = { ...SpanDefaultProps, ...props };
  return (
    <span className={tailwind} style={css}>
      {text}
      {children}
    </span>
  );
}
