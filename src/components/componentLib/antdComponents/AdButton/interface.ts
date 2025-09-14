import type { BasicComponentPropsType } from "../../../../types";

export type AdButtonPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
  }
>;

export const AdButtonDefaultProps: AdButtonPropsType = {
  id: "-1",
  type: "ad-button",
  text: "按钮",
};
