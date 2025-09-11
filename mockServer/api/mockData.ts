export const page = {
  "name": "MyButton.tsx",
  "page": {
    "height": "800px",
    "width": "1100px"
  },
  "imports": [
    "import { useNavigate } from 'react-router-dom'"
  ],
  "nodes": [
    {
      "type": "div",
      "_desc": "最基础的组件，用来填充空间或包裹组件",
      "css": {
      },
      "tailwind": "w-[300px] h-[300px] bg-cyan-200",
      "event": {
        "onClick": {
          "name": "onClick",
          "handleCode": "console.log('click')"
        }
      },
      "children": [
        {
          "type": "text",
          "_desc": "最基础的组件，用于放置文字，因为组件内是可以直接放文字的",
          "value": "直接的文字"
        },
        {
          "type": "antd-text",
          "css": {},
          "tailwind": "text-[20px] font-bold",
          "event": {},
          "children": [
            {
              "type": "text",
              "value": "组件内的文字"
            }
          ]
        }
      ]
    }
  ],
  "effects": [
    {
      "runCode": "",
      "dependence": []
    }
  ],
  "states": [
    {
      "name": "count",
      "_desc": "name 是由用户决定的，用户一旦决定了 name 那么 setState 函数名就会是固定的",
      "value": 0
    }
  ],
  "otherCode": "const navigate = useNavigate()"
};