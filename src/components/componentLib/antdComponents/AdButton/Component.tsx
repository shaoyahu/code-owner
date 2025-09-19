import { Button } from 'antd';
import { AdButtonDefaultProps, type AdButtonPropsType } from './interface';
import { getIcon } from '../../../../utils/calc';

export default function AdButton(props: AdButtonPropsType) {
  const { text, children, tailwind, css, attr } = {
    ...AdButtonDefaultProps,
    ...props,
  };
  console.log('AdButton', attr?.icon);
  const { icon = '', ...rest } = attr || {};

  if (props.id == '98-1') {
    console.log('AdButton', attr);
  }
  return (
    <Button
      className={tailwind}
      style={css}
      {...rest}
      icon={getIcon(icon as string)}
    >
      {text}
      {children}
    </Button>
  );
}
