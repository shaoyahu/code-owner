import type { BasicComponentPropsType } from "../../../../types";

export type DivPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {}
>;

export const DivDefaultProps: DivPropsType = {
  id: "-1",
  type: "div",
  tailwind: "w-auto h-[100px]",
  childNode: undefined,
};
