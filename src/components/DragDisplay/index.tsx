import { getComponentConfigByType } from "../componentLib";

type DragDisplayProp = {
  type: string;
};
export default function DragDisplay(props: DragDisplayProp) {
  const { type } = props;
  let DragComponent;
  if (type === "empty") {
    return (
      <div className="flex justify-center items-center bg-white border border-[#008cff6d] border-dashed w-[50px] h-[42px]">
        <span>拖动中</span>
      </div>
    );
  } else {
    const config = getComponentConfigByType(type);
    if (config) {
      DragComponent = config.DragComponent;
      return <DragComponent />;
    }
  }
}
