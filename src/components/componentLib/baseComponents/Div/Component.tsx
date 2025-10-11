import { type DivPropsType, DivDefaultProps } from './interface';
import DragAndDropContainer from '../../../DragAndDropContainer';
import EmptyBlock from '../../../EmptyBlock';

export default function DivComponent(props: DivPropsType) {
  const { id, children, tailwind, css, name } = {
    ...DivDefaultProps,
    ...props,
  };

  return (
    <DragAndDropContainer name={name} id={id} block>
      <div
        className={`${tailwind} ${
          children ? '' : 'border border-dashed border-[#008cff6c]'
        }`}
        style={css}
      >
        {children ? children : <EmptyBlock text="Div 块" />}
      </div>
    </DragAndDropContainer>
  );
}
