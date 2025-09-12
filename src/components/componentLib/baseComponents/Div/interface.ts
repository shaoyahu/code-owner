import type { ReactNode } from "react";
import type { BasicComponentPropsType } from "../../../../types";

export type DivPropsType = BasicComponentPropsType & {



  children: ReactNode;
};

export const DivDefaultProps = {
  children: null,
};