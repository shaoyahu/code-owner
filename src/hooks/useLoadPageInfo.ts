import { useRequest } from "ahooks";
import useStore from "../store";
import { getPageById } from "../api/point";

export default function useLoadPageInfo() {

  const { selectedPageId } = useStore();
  const { data: page } = useRequest(async () => getPageById(selectedPageId));

  console.log('page', page);

}