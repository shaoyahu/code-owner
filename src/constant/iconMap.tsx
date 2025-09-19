import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import { Space } from 'antd';

export const ICON_MAP: Record<string, React.ReactNode> = {
  CheckOutlined: <CheckOutlined />,
  DeleteOutlined: <DeleteOutlined />,
};

export const ICON_LIST = Object.keys(ICON_MAP).map((icon) => ({
  label: (
    <Space>
      {ICON_MAP[icon]}
      {icon}
    </Space>
  ),
  value: icon,
}));
