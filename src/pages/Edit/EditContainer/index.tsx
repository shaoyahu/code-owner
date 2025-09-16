import { getComponentConfigByType } from "../../../components/componentLib";
import { WEB_PAGE_CONFIG } from "../../../constant/defaultConfig";
import useGetPageInfo from "../../../hooks/useGetPageInfo";
import type { BasicComponentPropsType } from "../../../types";

export default function EditContainer() {
  const { height, width } = WEB_PAGE_CONFIG;
  const page = useGetPageInfo();
  const { nodes } = page;
  return (
    <div
      className="flex justify-center items-center shadow-[0_0_10px_5px_rgba(0,0,0,0.1)]"
      style={{ height, width }}
    >
      {/* 下方这个 div 为真正 tsx 页面返回元素 */}
      <div className="bg-white w-full h-full">
        {nodes?.map((item) => {
          return (
            <div key={item.id} className="!m-1">
              {genComponent(item)}
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
  const { Component } = componentConfig;
  const { childNode = [], ...rest } = item;

  if (item.id == "2") {
    console.log("item", item, Component);
  }

  if (childNode && childNode.length > 0) {
    return (
      <>
        <Component {...rest}>
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
