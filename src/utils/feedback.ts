import { notification } from 'antd';
type Props = {
  title: string;
  msg?: string;
  type?: 'success' | 'error' | 'info' | 'warning' | 'open';
  onClick?: () => void;
  duration?: number;
};

export const openNotification = (props: Props) => {
  const { title, msg = '', type = 'open', onClick, duration = 5 } = props;
  notification[type]({
    message: title,
    description: msg,
    onClick,
    duration
  });
};