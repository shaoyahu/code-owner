import EditContainer from "./EditContainer";
import EditLeftPanel from "./EditLeftPanel";
import EditRightPanel from "./EditRightPanel";
import useLoadPageData from "../../hooks/useLoadPageData";
import { Spin } from "antd";
import {
  closestCenter,
  closestCorners,
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import EditHeader from "./EditHeader";
import useStore from "../../store";

export default function Edit() {
  const { loading } = useLoadPageData();
  const { moveNode } = useStore();
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 },
    })
  );

  return (
    <DndContext
      // sensors={sensors}
      // collisionDetection={closestCenter}
      onDragOver={(e) => {
        console.log("onDragOver", e);
      }}
      onDragEnd={(e) => {
        console.log("onDragEnd", e);
        const { active, over } = e;
        if (active && over) {
          if (active.id === over.id) {
            return;
          } else {
            moveNode(active.id as string, over.id as string, "inside");
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
    </DndContext>
  );
}
