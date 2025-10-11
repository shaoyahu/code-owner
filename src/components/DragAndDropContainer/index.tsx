import { DEFAULT_INITIAL_STYLE } from '../../constant/defaultConfig';
import useDragAndDrop from '../../hooks/useDragAndDrop';
import { CSS } from '@dnd-kit/utilities';
import useStore from '../../store';

type DragAndDropContainerType = {
  id: string;
  name: string;
  children: React.ReactNode;
  block?: boolean;
  adButtonData?: { block?: boolean };
};
export default function DragAndDropContainer(props: DragAndDropContainerType) {
  const { id, name, children, block = false, adButtonData = {} } = props;
  const { attributes, listeners, setNodeRef, transform, isDragging, isOver } =
    useDragAndDrop(id);
  const { hoverNodeIdList, pushHoverNodeId, popHoverNodeId } = useStore();

  const judgeBlock = () => {
    return block || adButtonData?.block;
  };

  const style = {
    ...DEFAULT_INITIAL_STYLE,
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0 : 1,
  };

  const className = `group relative border! border-dashed! border-transparent ${
    isDragging && 'border-[#008cff]!'
  } ${isOver && 'bg-[#b4d2ff]!'} ${
    hoverNodeIdList.length > 0 &&
    hoverNodeIdList[hoverNodeIdList.length - 1] === id &&
    'hover:border-[#008cff]!'
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
          <Label id={id} name={name} />
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
          <Label id={id} name={name} />
          {children}
        </span>
      )}
    </>
  );
}

function Label(props: { name: string; id: string }) {
  const { hoverNodeIdList } = useStore();
  const { name, id } = props;
  return (
    <div
      className={`absolute top-[-30px] text-[12px] bg-[#30a2ff] p-1! px-3! text-white rounded-sm invisible ${
        hoverNodeIdList.length > 0 &&
        hoverNodeIdList[hoverNodeIdList.length - 1] === id &&
        'group-hover:visible'
      }`}
    >
      {name}
    </div>
  );
}
