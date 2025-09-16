import { type DivPropsType, DivDefaultProps } from './interface';

export default function DivComponent(props: DivPropsType) {
  const { children, className, css } = { ...DivDefaultProps, ...props };
  return (
    <div className={className} style={css}>
      {children}
    </div>
  );
}
