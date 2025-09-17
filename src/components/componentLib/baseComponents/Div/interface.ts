import type { BasicComponentPropsType } from "../../../../types";

export type DivPropsType = React.PropsWithChildren<
  BasicComponentPropsType & {
    onChange?: (props: DivPropsType) => void;
  }
>;

export const DivDefaultProps: DivPropsType = {
  id: "-1",
  name: 'div',
  type: "div",
  tailwind: "w-auto h-[100px] !m-1",
  childNode: undefined,
};
