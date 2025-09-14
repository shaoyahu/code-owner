
// 基础组件属性，所有组件在此基础上扩充自己的属性类型
export type BasicComponentPropsType = {
  id: string;
  type: string;
  _desc?: string;
  css?: Record<string, string>;
  tailwind?: string;
  event?: Record<string, Record<string, string>>;
  childNode?: BasicComponentPropsType[];
};

export type StateType = {
  name: string;
  _desc?: string;
  value: unknown;
};

export type EffectType = {
  runCode: string;
  dependence: string[];
};

// 页面组件类型
export type PageType = {
  name: string;
  id: string;
  page: Record<string, string>;
  imports?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nodes?: BasicComponentPropsType[] | any;
  states?: StateType[];
  effects?: EffectType[];
  otherCode?: string;
};
