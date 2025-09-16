import type { BasicComponentPropsType } from "../../../../types";

export type AdButtonPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
    className?: string;
  }
>;

export const AdButtonDefaultProps: AdButtonPropsType = {
  id: "-1",
  name: 'ad-button',
  type: "ad-button",
  text: "按钮",
};
