import { WEB_PAGE_CONFIG } from '../../../constant/defaultConfig';
import useGetPageInfo from '../../../hooks/useGetPageInfo';

export default function EditContainer() {
  const { height, width } = WEB_PAGE_CONFIG;
  const page = useGetPageInfo();
  // console.log('page', page);
  return (
    <div
      className="flex justify-center items-center shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
      style={{ height, width }}
    >
      {/* 下方这个 div 为真正 tsx 页面返回元素 */}
      <div className="bg-white w-full h-full">{page.name}</div>
    </div>
  );
}
