import { useDroppable } from '@dnd-kit/core';

export default function DeleteArea() {
  const { setNodeRef } = useDroppable({
    id: 'delete-area',
  });
  return (
    <div
      ref={setNodeRef}
      className="hidden w-[80%] h-[300px] bg-white border border-red-400 text-red-400 flex items-center justify-center border-dashed"
    >
      <span>拖到此处删除组件</span>
    </div>
  );
}
