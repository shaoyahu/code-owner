import EditContainer from './EditContainer';
import EditLeftPanel from './EditLeftPanel';
import EditRightPanel from './EditRightPanel';
import useLoadPageData from '../../hooks/useLoadPageData';
import { Spin } from 'antd';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import EditHeader from './EditHeader';
import useStore from '../../store';
import { getComponentConfigByType } from '../../components/componentLib';
import { genUUID } from '../../utils/calc';
import DragDisplay from '../../components/DragDisplay';
import { useState } from 'react';

export default function Edit() {
  const [type, setType] = useState('empty');
  const { loading } = useLoadPageData();
  const { moveNode, addComponentToPage, changeDragHoverNodeId } = useStore();
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: { distance: 3 },
    }),
    useSensor(TouchSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  return (
    <DndContext
      sensors={sensors}
      // collisionDetection={closestCenter}
      onDragStart={(e) => {
        const type = e.active.data.current?.type || 'empty';
        setType(type);
      }}
      onDragOver={(e) => {
        changeDragHoverNodeId(String(e.over?.id));
        console.log('onDragOver', e);
      }}
      onDragEnd={(e) => {
        // console.log("onDragEnd", e);
        const { active, over } = e;
        if (active && over) {
          if (active.id === over.id) {
            return;
          } else {
            if (active.data?.current?.origin === 'canvas') {
              moveNode(active.id as string, over.id as string, 'inside');
            }

            if (active.data?.current?.origin === 'lib') {
              const type = active.data?.current?.type;
              const componentConfig = getComponentConfigByType(type as string);
              console.log('componentConfig', componentConfig);
              if (componentConfig) {
                addComponentToPage(
                  {
                    ...componentConfig.defaultProps,
                    id: genUUID(),
                  },
                  over.id as string
                );
              }
            }
          }
        }
      }}
    >
      <div className="flex flex-col gap-4 !pb-4 h-full">
        <div className="bg-white h-[64px]">
          <EditHeader />
        </div>
        <div className="flex flex-1 justify-around gap-4 !px-4 min-h-0">
          <div className="bg-white !px-4 rounded-md w-[300px]">
            <EditLeftPanel />
          </div>
          <div className="flex flex-1 justify-center items-center rounded-md">
            {loading ? <Spin size="large" /> : <EditContainer />}
          </div>
          <div className="bg-white !px-4 rounded-md w-[300px]">
            <EditRightPanel />
          </div>
        </div>
      </div>
      <DragOverlay>
        <DragDisplay type={type} />
      </DragOverlay>
    </DndContext>
  );
}
