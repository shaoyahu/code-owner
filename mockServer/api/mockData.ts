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
        "height": "",
        "display": "flex"
      },
      "event": {
        "onClick": {}
      }
    },
    {
      "id": "769b878b-e40b-4205-b05d-8bab26a7d56e",
      "name": "按钮 Tab",
      "type": "div",
      "tailwind": "w-auto !m-1",
      "childNode": [
        {
          "id": "57887d1a-7141-47a5-a667-983eb990604b",
          "name": "ad-button",
          "type": "ad-button",
          "tailwind": "!m-1",
          "text": "按钮"
        },
        {
          "id": "c76a51b9-317a-4225-a970-d1a5cfcdc764",
          "name": "ad-button",
          "type": "ad-button",
          "tailwind": "!m-1",
          "text": "按钮"
        },
        {
          "id": "9e21f628-9c01-4db3-b266-49924949cd97",
          "name": "ad-button",
          "type": "ad-button",
          "tailwind": "!m-1",
          "text": "按钮"
        },
        {
          "id": "358896e1-de98-4552-a33b-2e342ac94a88",
          "name": "ad-button",
          "type": "ad-button",
          "tailwind": "!m-1",
          "text": "按钮"
        }
      ],
      "css": {
        "width": "50%",
        "backgroundColor": "#d6def7"
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
