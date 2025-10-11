import { type SpanPropsType, SpanDefaultProps } from './interface';
import DragAndDropContainer from '../../../DragAndDropContainer';

export default function SpanComponent(props: SpanPropsType) {
  const { id, text, children, tailwind, css, name } = {
    ...SpanDefaultProps,
    ...props,
  };

  return (
    <DragAndDropContainer name={name} id={id}>
      <span className={tailwind} style={css}>
        {text}
        {children}
      </span>
    </DragAndDropContainer>
  );
}
