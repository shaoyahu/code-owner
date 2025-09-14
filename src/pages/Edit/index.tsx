import EditContainer from "./EditContainer";
import EditLeftPanel from "./EditLeftPanel";
import EditRightPanel from "./EditRightPanel";
import useLoadPageInfo from "../../hooks/useLoadPageInfo";
import { Spin } from "antd";

export default function Edit() {
  const { loading } = useLoadPageInfo();
  return (
    <div className="flex flex-col gap-4 !pb-4 h-full">
      <div className="bg-white h-[64px]">header</div>
      <div className="flex flex-1 justify-around gap-4 !px-4">
        <div className="bg-white !px-4 rounded-md w-[300px]">
          <EditLeftPanel />
        </div>
        <div className="flex flex-1 justify-center items-center rounded-md">
          {loading ? <Spin size="large" /> : <EditContainer />}
        </div>
        <div className="bg-white !px-4 rounded-md w-[200px]">
          <EditRightPanel />
        </div>
      </div>
    </div>
  );
}
