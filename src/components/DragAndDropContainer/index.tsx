import { DEFAULT_INITIAL_STYLE } from "../../constant/defaultConfig";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import { CSS } from "@dnd-kit/utilities";
import useStore from "../../store";

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
  // console.log("DragAndDropContainer", name, type);
  const { attributes, listeners, setNodeRef, transform, isDragging, isOver } =
    useDragAndDrop(id, type);
  const { hoverNodeIdList, pushHoverNodeId, popHoverNodeId, dragHoverNodeId } =
    useStore();

  const judgeBlock = () => {
    return block || adButtonData?.block;
  };

  // 鼠标移动 hover 时显示 label 标签
  const hoverShow =
    hoverNodeIdList.length > 0 &&
    hoverNodeIdList[hoverNodeIdList.length - 1] === id;

  // 拖拽组件 hover 时显示 label 标签
  const dragOverShow = isOver && dragHoverNodeId == id;

  const style = {
    ...DEFAULT_INITIAL_STYLE,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  const className = `group relative border! border-dashed! border-transparent overflow-visible ${
    isDragging && "border-[#008cff]!"
  } ${isOver && "bg-[#b4d2ff]! border-[#0000CD]!"} ${
    hoverShow && "hover:border-[#008cff]!"
  }`;

  function onMouseEnter() {
    pushHoverNodeId(id);
  }

  function onMouseLeave() {
    popHoverNodeId();
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
        >
          {(hoverShow || dragOverShow) && <Label name={name} />}
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
        >
          {(hoverShow || dragOverShow) && <Label name={name} />}
          {children}
        </span>
      )}
      <div>{/* {JSON.stringify(dragHoverNodeId)} = {id} */}</div>
    </>
  );
}

function Label(props: { name: string }) {
  const { name } = props;
  return (
    <div
      className={`absolute whitespace-nowrap top-[-30px] text-[12px] bg-[#30a2ff] p-1! px-3! text-white rounded-sm`}
    >
      {name}
    </div>
  );
}
