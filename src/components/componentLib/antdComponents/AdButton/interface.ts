import type { BasicComponentPropsType } from "../../../../types";

export type AdButtonPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    text?: string;
  }
>;

export const AdButtonDefaultProps: AdButtonPropsType = {
  id: "-1",
  name: "ad-button",
  type: "ad-button",
  tailwind: "!m-1",
  text: "按钮",
};
