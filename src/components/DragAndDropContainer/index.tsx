import { DEFAULT_INITIAL_STYLE } from '../../constant/defaultConfig';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import { CSS } from '@dnd-kit/utilities';
import useStore from '../../store';
import type { MouseEvent } from 'react';

type DragAndDropContainerType = {
  id: string;
  name: string;
  type: string;
  children: React.ReactNode;
  block?: boolean;
  adButtonData?: { block?: boolean };
};
export default function DragAndDropContainer(props: DragAndDropContainerType) {
  const { id, name, type, children, block = false, adButtonData = {} } = props;
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
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  const className = `relative border! border-dashed! border-transparent overflow-visible
  ${isDragging && 'border-[#008cff]!'}
  ${isOver && 'bg-[#b4d2ff]! border-[#0000CD]!'} 
  ${selectShow && 'border-[#008cff]! border-solid!'}
  ${hoverShow && 'hover:border-[#008cff]!'}`;

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
          {children}
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
          {children}
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
