import { useDroppable } from '@dnd-kit/core';
import {
  getComponentConfigByType,
  type ComponentPropsType,
} from '../../../components/componentLib';
import {
  DEFAULT_INITIAL_STYLE,
  WEB_PAGE_CONFIG,
} from '../../../constant/defaultConfig';
import useGetPageInfo from '../../../hooks/useGetPageInfo';

export default function EditContainer() {
  const page = useGetPageInfo();
  const { nodes, page: pageSize = WEB_PAGE_CONFIG } = page;
  const { height, width } = pageSize;

  const { setNodeRef } = useDroppable({
    id: 'edit-container',
  });
  return (
    <div
      className="flex justify-center items-center shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
      style={{ height, width }}
    >
      {/* 下方这个 div 为真正 tsx 页面返回元素 */}
      <div ref={setNodeRef} className="bg-white w-full h-full">
        {nodes?.map((item) => {
          return (
            <div key={item.id} className="!m-1" style={DEFAULT_INITIAL_STYLE}>
              {GenComponent(item)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function GenComponent(item: ComponentPropsType) {
  const componentConfig = getComponentConfigByType(item.type);
  if (!componentConfig) {
    return null;
  }
  const { Component } = componentConfig;
  const { childNode = [], ...rest } = item;

  if (item.id == '98-1') {
    // console.log('item', item);
  }

  if (childNode && childNode.length > 0) {
    return (
      <>
        <Component {...rest}>
          {childNode?.map((child) => (
            <div key={child.id} className="!m-1" style={DEFAULT_INITIAL_STYLE}>
              {GenComponent(child)}
            </div>
          ))}
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
