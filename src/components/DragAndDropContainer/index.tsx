import { DEFAULT_INITIAL_STYLE } from "../../constant/defaultConfig";
import useDragAndDrop from "../../hooks/useDragAndDrop";
import { CSS } from "@dnd-kit/utilities";

type DragAndDropContainerType = {
  id: string;
  children: React.ReactNode;
  block?: boolean;
};
export default function DragAndDropContainer(props: DragAndDropContainerType) {
  const { id, children, block = false } = props;
  const { attributes, listeners, setNodeRef, transform, isDragging, isOver } =
    useDragAndDrop(id);

  return (
    <>
      {block ? (
        <div
          ref={setNodeRef}
          style={{
            ...DEFAULT_INITIAL_STYLE,
            transform: CSS.Translate.toString(transform),
          }}
          className={`${
            isDragging && "border! border-dashed! border-[#008cff]! m-1!"
          } ${isOver && "bg-[#b4d2ff]! p-1!"}`}
          {...listeners}
          {...attributes}
        >
          {children}
        </div>
      ) : (
        <span
          ref={setNodeRef}
          style={{
            ...DEFAULT_INITIAL_STYLE,
            transform: CSS.Translate.toString(transform),
          }}
          className={`inline-block ${
            isDragging && "border! border-dashed! border-[#008cff]! m-1!"
          } ${isOver && "bg-[#b4d2ff]! p-1!"}`}
          {...listeners}
          {...attributes}
        >
          {children}
        </span>
      )}
    </>
  );
}
