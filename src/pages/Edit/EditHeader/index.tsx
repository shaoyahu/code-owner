import { Button } from 'antd';
import useStore from '../../../store';

export default function EditHeader() {
  const { page } = useStore();
  return (
    <div
      className="flex justify-center items-center h-full"
      onClick={() => console.log(page)}
    >
      <Button>打印 page 数据</Button>
    </div>
  );
}
