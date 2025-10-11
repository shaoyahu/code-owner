import { useDraggable, useDroppable } from "@dnd-kit/core";

export default function useDragAndDrop(id: string) {
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
      origin: 'canvas'
    }
  });
  const { setNodeRef: dropRef, isOver } = useDroppable({
    id,
    data: { id }
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
