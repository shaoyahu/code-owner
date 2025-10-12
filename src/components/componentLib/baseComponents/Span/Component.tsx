import { type SpanPropsType, SpanDefaultProps } from "./interface";
import DragAndDropContainer from "../../../DragAndDropContainer";

export default function SpanComponent(props: SpanPropsType) {
  const { id, text, children, tailwind, css, name, type } = {
    ...SpanDefaultProps,
    ...props,
  };

  return (
    <DragAndDropContainer name={name} id={id} type={type}>
      <span className={tailwind} style={css}>
        {text}
        {children}
      </span>
    </DragAndDropContainer>
  );
}
