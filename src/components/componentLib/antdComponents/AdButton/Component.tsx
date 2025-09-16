import { Button } from "antd";
import { AdButtonDefaultProps, type AdButtonPropsType } from "./interface";

export default function AdButton(props: AdButtonPropsType) {
  const { text, children, tailwind, css } = {
    ...AdButtonDefaultProps,
    ...props,
  };
  return (
    <Button className={tailwind} style={css}>
      {text}
      {children}
    </Button>
  );
}
