import { useDroppable } from '@dnd-kit/core';
import { type DivPropsType, DivDefaultProps } from './interface';

export default function DivComponent(props: DivPropsType) {
  const { id, children, tailwind, css } = { ...DivDefaultProps, ...props };
  const { setNodeRef, isOver } = useDroppable({
    id,
  });
  return (
    <div
      ref={setNodeRef}
      className={`${tailwind} ${
        isOver && 'border! border-dashed! border-[#008cff]! m-1!'
      }`}
      style={css}
    >
      {children}
    </div>
  );
}
