import { type DivPropsType, DivDefaultProps } from './interface';
export default function DivComponent(props: DivPropsType) {
  const { children } = { ...DivDefaultProps, ...props };
  return <div>{children}</div>;
}
