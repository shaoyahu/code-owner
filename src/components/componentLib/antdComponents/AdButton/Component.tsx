import { Button } from 'antd';
import { AdButtonDefaultProps, type AdButtonPropsType } from './interface';
import { getIcon } from '../../../../utils/calc';
import DragAndDropContainer from '../../../DragAndDropContainer';

export default function AdButton(props: AdButtonPropsType) {
  const { id, text, children, tailwind, css, attr } = {
    ...AdButtonDefaultProps,
    ...props,
  };
  const { icon = '', ...rest } = attr || {};

  if (id == '3') {
    // console.log('AdButton', props);
  }
  return (
    <DragAndDropContainer
      id={id}
      adButtonData={{ block: (attr?.block as boolean) || false }}
    >
      <Button
        className={tailwind}
        style={css}
        {...rest}
        icon={getIcon(icon as string)}
      >
        {text}
        {children}
      </Button>
    </DragAndDropContainer>
  );
}
