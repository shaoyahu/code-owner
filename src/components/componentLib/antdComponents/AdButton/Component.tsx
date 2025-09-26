import { Button } from 'antd';
import { AdButtonDefaultProps, type AdButtonPropsType } from './interface';
import { getIcon } from '../../../../utils/calc';
import { useDroppable } from '@dnd-kit/core';

export default function AdButton(props: AdButtonPropsType) {
  const { id, text, children, tailwind, css, attr } = {
    ...AdButtonDefaultProps,
    ...props,
  };
  const { icon = '', ...rest } = attr || {};
  const { setNodeRef, isOver } = useDroppable({
    id,
  });

  if (id == '98-1') {
    // console.log("AdButton", attr);
  }
  return (
    <Button
      ref={setNodeRef}
      className={`${tailwind} ${
        isOver && 'border! border-dashed! border-[#008cff]! m-1!'
      }`}
      style={css}
      {...rest}
      icon={getIcon(icon as string)}
    >
      {text}
      {children}
    </Button>
  );
}
