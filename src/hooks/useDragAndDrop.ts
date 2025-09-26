import { useDraggable, useDroppable } from "@dnd-kit/core";

export default function useDragAndDrop(id: string) {
  const {
    attributes,
    listeners,
    setNodeRef: dragRef,
    transform,
  } = useDraggable({
    id,
  });
  const { setNodeRef: dropRef, isOver } = useDroppable({
    id,
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
    isOver,
  };
}