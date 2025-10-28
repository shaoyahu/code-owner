import { Button } from 'antd';
import useStore from '../../../store';
import { generateReactCode } from '../../../utils/core';
import { saveAs } from 'file-saver';

export default function EditHeader() {
  const { page } = useStore();
  return (
    <div className="flex justify-center items-center h-full">
      <Button onClick={() => console.log(page)}>打印 page 数据</Button>
      <Button
        onClick={() => {
          const code = generateReactCode(page);
          saveAs(
            new Blob([code], { type: 'text/plain;charset=utf-8' }),
            page.name
          );
        }}
      >
        下载文件
      </Button>
    </div>
  );
}
