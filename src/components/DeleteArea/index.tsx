import { useDroppable } from '@dnd-kit/core';
import useStore from '../../store';

export default function DeleteArea() {
  const { setNodeRef, isOver } = useDroppable({
    id: 'delete-area',
  });
  const { showDeleteArea } = useStore();
  return (
    <div
      ref={setNodeRef}
      className={`${showDeleteArea ? 'block' : 'hidden'} ${
        isOver ? 'h-[200px]' : 'h-[50px]'
      } absolute bottom-0 w-full h-[50px] bg-white border border-red-400 text-red-400 flex items-center justify-center border-dashed`}
    >
      <span>{isOver ? '松开删除组件' : '拖到此处删除组件'}</span>
    </div>
  );
}
