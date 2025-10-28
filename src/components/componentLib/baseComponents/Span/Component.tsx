import { type SpanPropsType, SpanDefaultProps } from './interface';
import DragAndDropContainer from '../../../DragAndDropContainer';

export default function SpanComponent(props: SpanPropsType) {
  const { text, children, tailwind, css } = {
    ...SpanDefaultProps,
    ...props,
  };

  return (
    <DragAndDropContainer {...props}>
      <span className={tailwind} style={css}>
        {text}
        {children}
      </span>
    </DragAndDropContainer>
  );
}
