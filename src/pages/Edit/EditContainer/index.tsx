import { getComponentConfigByType } from '../../../components/componentLib';
import { WEB_PAGE_CONFIG } from '../../../constant/defaultConfig';
import useGetPageInfo from '../../../hooks/useGetPageInfo';
import type { BasicComponentPropsType } from '../../../types';

export default function EditContainer() {
  const { height, width } = WEB_PAGE_CONFIG;
  const page = useGetPageInfo();
  const { nodes } = page;
  console.log('page', page);
  return (
    <div
      className="flex justify-center items-center shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
      style={{ height, width }}
    >
      {/* 下方这个 div 为真正 tsx 页面返回元素 */}
      <div className="bg-white w-full h-full">
        {nodes?.map((item) => {
          return (
            <div key={item.id} className="">
              <div className="pointer-events-none">{genComponent(item)}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function genComponent(item: BasicComponentPropsType) {
  const componentConfig = getComponentConfigByType(item.type);
  if (!componentConfig) {
    return null;
  }
  console.log('item', item);
  const { Component } = componentConfig;
  const { tailwind = '', css = {}, childNode = [], ...rest } = item;

  if (childNode && childNode.length > 0) {
    return (
      <>
        <Component className={tailwind} css={css} {...rest}>
          {childNode?.map((child) => genComponent(child))}
        </Component>
      </>
    );
  } else {
    return (
      <>
        <Component {...rest} />
      </>
    );
  }
}
