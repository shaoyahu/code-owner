export const page = {
  name: "MyButton.tsx",
  page: {
    height: "800px",
    width: "1100px",
  },
  imports: ["import { useNavigate } from 'react-router-dom'"],
  nodes: [
    {
      id: "1",
      type: "div",
      name: "顶部 header",
      _desc: "最基础的组件，用来填充空间或包裹组件",
      css: {
        fontSize: "12px",
      },
      tailwind: "h-[300px] bg-cyan-200",
      event: {
        onClick: {
          name: "onClick",
          handleCode: "console.log('click')",
        },
      },
      childNode: [
        {
          id: "2",
          type: "span",
          name: "页面名称",
          _desc: "最基础的组件，用于放置文字，因为组件内是可以直接放文字的",
          text: "直接的文字",
          tailwind: "!m-2",
          css: {},
        },
        {
          id: "98",
          type: "div",
          name: "子元素div",
          text: "no",
          tailwind: "bg-pink-200 h-10 flex items-center justify-around",
          childNode: [
            {
              id: "98-1",
              type: "ad-button",
              name: "按钮1",
              text: "按钮1",
              css: {},
              tailwind: "text-[12px]",
              event: {},
              attr: {
                block: true,
                type: 'default'
              }
            },
            {
              id: "98-2",
              type: "ad-button",
              name: "按钮2",
              text: "按钮2",
              css: {},
              tailwind: "text-[12px]",
              event: {},
              attr: {
                block: false,
              }
            },
            {
              id: "98-3",
              type: "ad-button",
              name: "按钮3",
              text: "按钮3",
              css: {},
              tailwind: "text-[12px]",
              event: {},
            },
          ],
        },
        {
          id: "3",
          type: "ad-button",
          name: "登录按钮",
          css: {},
          tailwind: "text-[20px] font-bold",
          event: {},
          childNode: [
            {
              id: "4",
              type: "span",
              name: "登录按钮文本",
              text: "组件内的文字",
            },
          ],
        },
      ],
    },
    {
      id: "11",
      type: "div",
      name: "底部 footer",
      _desc: "最基础的组件，用来填充空间或包裹组件",
      css: {},
      tailwind: "w-[300px] h-[300px] bg-cyan-200",
      event: {
        onClick: {
          name: "onClick",
          handleCode: "console.log('click')",
        },
      },
      childNode: [
        {
          id: "12",
          type: "span",
          name: "页面名称",
          _desc: "最基础的组件，用于放置文字，因为组件内是可以直接放文字的",
          text: "直接的文字",
        },
        {
          id: "13",
          type: "ad-button",
          name: "订单",
          css: {},
          tailwind: "text-[20px] font-bold",
          event: {},
          childNode: [
            {
              id: "14",
              type: "span",
              name: "登录按钮文本",
              text: "组件内的文字",
            },
          ],
        },
        {
          id: "23",
          type: "ad-button",
          name: "购物车",
          css: {},
          tailwind: "text-[20px] font-bold",
          event: {},
        },
        {
          id: "33",
          type: "ad-button",
          name: "我的",
          css: {},
          tailwind: "text-[20px] font-bold",
          event: {},
          childNode: [
            {
              id: "34",
              type: "span",
              name: "登录按钮文本",
              text: "组件内的文字",
            },
          ],
        },
      ],
    },
  ],
  effects: [
    {
      runCode: "",
      dependence: [],
    },
  ],
  states: [
    {
      name: "count",
      _desc:
        "name 是由用户决定的，用户一旦决定了 name 那么 setState 函数名就会是固定的",
      value: 0,
    },
  ],
  otherCode: "const navigate = useNavigate()",
};
