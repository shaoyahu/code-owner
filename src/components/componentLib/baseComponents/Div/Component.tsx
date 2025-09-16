import { type DivPropsType, DivDefaultProps } from "./interface";

export default function DivComponent(props: DivPropsType) {
  const { children, tailwind, css } = { ...DivDefaultProps, ...props };
  return (
    <div className={tailwind} style={css}>
      {children}
    </div>
  );
}
