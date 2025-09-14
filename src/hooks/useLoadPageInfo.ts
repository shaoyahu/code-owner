import { useRequest } from "ahooks";
import useStore from "../store";
import { getPageById } from "../api/point";
import { useEffect } from "react";

export default function useLoadPageInfo() {
  const { selectedPageId, resetPage } = useStore();
  const { data, loading, run } = useRequest(
    async () => getPageById(selectedPageId),
    {
      manual: true,
    }
  );

  useEffect(() => {
    if (!data) return;
    resetPage(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    run();
  }, [selectedPageId, run]);

  return { loading };
}
