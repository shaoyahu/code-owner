import { Button } from "antd";
import { AdButtonDefaultProps, type AdButtonPropsType } from "./interface";

export default function AdButton(props: AdButtonPropsType) {
  const { text } = { ...AdButtonDefaultProps, ...props };
  return <Button>{text}</Button>;
}
