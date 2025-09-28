import { type DivPropsType, DivDefaultProps } from "./interface";
import DragAndDropContainer from "../../../DragAndDropContainer";

export default function DivComponent(props: DivPropsType) {
  const { id, children, tailwind, css } = { ...DivDefaultProps, ...props };

  return (
    <DragAndDropContainer id={id} block>
      <div className={tailwind} style={css}>
        {children}
      </div>
    </DragAndDropContainer>
  );
}
