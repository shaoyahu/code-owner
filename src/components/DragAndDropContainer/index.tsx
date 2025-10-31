/**
 * 真正组件样式与拖拽容器组件样式冲突解决方案如下（暂时）
 * 有遇到问题再做修改，针对具体样式问题给样式名和类名
 *
 * css：
 *  传递给拖拽容器的：
 *    - height
 *    - width
 *  真正组件使用的：...rest
 *
 *
 * tailwind：
 *  传递给拖拽容器的：全部
 *  真正组件使用的：无
 */

import { DEFAULT_INITIAL_STYLE } from '../../constant/defaultConfig';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import { CSS } from '@dnd-kit/utilities';
import useStore from '../../store';
import {
  type ReactElement,
  cloneElement,
  type MouseEvent,
  type HTMLAttributes,
} from 'react';
import type { ComponentPropsType } from '../componentLib';

type DragAndDropContainerType = ComponentPropsType & {
  id: string;
  name: string;
  type: string;
  // children: ReactElement;
  children: ReactElement<HTMLAttributes<HTMLElement> & { tailwind?: string }>;
  block?: boolean;
  adButtonData?: { block?: boolean };
};
export default function DragAndDropContainer(props: DragAndDropContainerType) {
  const {
    id,
    name,
    type,
    children,
    block = false,
    adButtonData = {},
    css = {},
    tailwind,
  } = props;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { height, width, ...restCss } = css;
  const { attributes, listeners, setNodeRef, transform, isDragging, isOver } =
    useDragAndDrop(id, type);
  const {
    hoverNodeIdList,
    pushHoverNodeId,
    popHoverNodeId,
    dragHoverNodeId,
    selectedNodeId,
    changeSelectedNodeId,
  } = useStore();

  const judgeBlock = () => {
    return block || adButtonData?.block;
  };

  // 鼠标移动 hover 时显示 label 标签
  const hoverShow =
    hoverNodeIdList.length > 0 &&
    hoverNodeIdList[hoverNodeIdList.length - 1] === id;

  // 拖拽组件 hover 时显示 label 标签
  const dragOverShow = isOver && dragHoverNodeId == id;

  // 选中组件时显示 label 标签
  const selectShow = selectedNodeId === id;

  const style = {
    ...DEFAULT_INITIAL_STYLE,
    // ...css,
    height,
    width,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };
  // console.log('tailwind', tailwind);
  const className = `relative border-dashed! border-transparent overflow-visible ${tailwind}
  ${isDragging && 'border-[#008cff]! border! border-dashed!'}
  ${isOver && 'bg-[#b4d2ff]! border-[#0000CD]! border! border-dashed!'} 
  ${selectShow && 'border-[#008cff]! border-solid! border!'}
  ${hoverShow && 'hover:border-[#008cff]!'} border! border-dashed!`;

  function onMouseEnter() {
    pushHoverNodeId(id);
  }

  function onMouseLeave() {
    popHoverNodeId();
  }

  function onClick(e: MouseEvent<HTMLSpanElement | HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    changeSelectedNodeId(id);
  }

  const realComponent = cloneElement(children, {
    style: { ...restCss },
    tailwind: '',
  });

  return (
    <>
      {judgeBlock() ? (
        <div
          ref={setNodeRef}
          style={style}
          className={className}
          {...listeners}
          {...attributes}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {(hoverShow || dragOverShow || selectShow) && (
            <Label name={name} selectShow={selectShow} />
          )}
          {realComponent}
        </div>
      ) : (
        <span
          ref={setNodeRef}
          style={style}
          className={`inline-block ${className}`}
          {...listeners}
          {...attributes}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={onClick}
        >
          {(hoverShow || dragOverShow || selectShow) && (
            <Label name={name} selectShow={selectShow} />
          )}
          {realComponent}
        </span>
      )}
    </>
  );
}

function Label(props: { name: string; selectShow: boolean }) {
  const { name, selectShow } = props;
  return (
    <div
      className={`absolute whitespace-nowrap top-[-30px] text-[12px] ${
        selectShow ? 'bg-[#1d70ff]' : 'bg-[#30a2ff]'
      } p-1! px-3! text-white rounded-sm pointer-events-none`}
    >
      {name}
    </div>
  );
}
