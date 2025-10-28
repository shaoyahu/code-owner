export const page = {
  name: "MyButton.tsx",
  page: {
    height: "600px",
    width: "800px",
  },
  imports: [
    "import { useNavigate } from 'react-router-dom'",
    "import { Input } from 'antd'",
  ],
  nodes: [
    {
      "id": "7b8aae8d-0567-4227-a222-9d035c8aee7c",
      "name": "顶部 Header",
      "type": "div",
      "tailwind": "!w-full !p-2 flex bg-white !border-b border-1 items-center",
      "childNode": [
        {
          "id": "72e54dd8-19f0-4a57-af96-ccc4eb661ead",
          "name": "WT 标题",
          "type": "span",
          "tailwind": "",
          "text": " Watch Tool",
          "css": {},
          "event": {
            "onClick": {}
          }
        },
        {
          "id": "fbf7b888-9503-4e59-99a5-5144edbe89f9",
          "name": "按钮组",
          "type": "div",
          "tailwind": "!ml-auto !px-2",
          "childNode": [
            {
              "id": "bad50c50-1b40-4cbd-a2b3-dd962cba348d",
              "name": "调试模式按钮",
              "type": "ad-button",
              "tailwind": "!ml-auto",
              "text": "开启调试",
              "attr": {
                "block": false,
                "type": "primary",
                "icon": "CheckOutlined"
              },
              "css": {},
              "event": {
                "onClick": {}
              }
            }
          ],
          "css": {},
          "event": {
            "onClick": {}
          }
        }
      ],
      "css": {
        "height": "40px"
      },
      "event": {
        "onClick": {}
      }
    },
    {
      "id": "952ed522-3663-4f15-a9fe-e0976f6bb0ef",
      "name": "div",
      "type": "div",
      "tailwind": "bg-gray-100",
      "childNode": [
        {
          "id": "1707c478-0455-4703-9ca8-9ae0fa4973e1",
          "name": "目录",
          "type": "div",
          "tailwind": "w-[100px] h-full!",
          "css": {},
          "event": {
            "onClick": {}
          }
        }
      ],
      "css": {
        "height": "calc(100% - '40px')"
      },
      "event": {
        "onClick": {}
      }
    }
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
      type: "number",
      value: 0,
    },
  ],
  otherCode: "const navigate = useNavigate()",
};
