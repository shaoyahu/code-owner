import { CSS } from '@dnd-kit/utilities';
import { type SpanPropsType, SpanDefaultProps } from './interface';
import useDragAndDrop from '../../../../hooks/useDragAndDrop';

export default function SpanComponent(props: SpanPropsType) {
  const { id, text, children, tailwind, css } = {
    ...SpanDefaultProps,
    ...props,
  };

  const { attributes, listeners, setNodeRef, transform, isOver } =
    useDragAndDrop(id);

  return (
    <span
      ref={setNodeRef}
      className={`inline-block ${tailwind} ${
        isOver && 'border! border-dashed! border-[#008cff]! m-1!'
      }`}
      style={{ ...css, transform: CSS.Translate.toString(transform) }}
      {...listeners}
      {...attributes}
    >
      {text}
      {children}
    </span>
  );
}
