import EditContainer from '../../components/EditContainer';
import EditLeftPanel from '../../components/EditLeftPanel';
import EditRightPanel from '../../components/EditRightPanel';
import useLoadPageInfo from '../../hooks/useLoadPageInfo';

export default function Edit() {
  useLoadPageInfo();
  return (
    <div className="flex flex-col gap-4 h-full !pb-4">
      <div className="bg-white h-[64px]">header</div>
      <div className="flex flex-1 justify-around gap-4 !px-4">
        <div className="bg-white w-[300px] rounded-md !px-4">
          <EditLeftPanel />
        </div>
        <div className="flex-1 flex items-center justify-center rounded-md">
          <EditContainer />
        </div>
        <div className="bg-white w-[200px] rounded-md !px-4">
          <EditRightPanel />
        </div>
      </div>
    </div>
  );
}
