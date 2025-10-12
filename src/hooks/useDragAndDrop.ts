import { useDraggable, useDroppable } from "@dnd-kit/core";

export default function useDragAndDrop(id: string, type: string) {
  const {
    attributes,
    listeners,
    setNodeRef: dragRef,
    transform,
    isDragging,
  } = useDraggable({
    id,
    data: {
      id,
      origin: "canvas",
      type,
    },
  });
  const { setNodeRef: dropRef, isOver } = useDroppable({
    id,
    data: { id, type },
  });
  const setNodeRef = (el: HTMLElement | null) => {
    dragRef(el);
    dropRef(el);
  };
  return {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
    isOver,
  };
}
