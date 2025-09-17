import { useMemo } from "react";
import useStore from "../store";
import { findArrAndIndex } from "../utils/calc";

export default function useGetNodeInfo() {
  const { selectedNodeId, page } = useStore();
  const nodeInfo = useMemo(() => {
    if (page?.nodes) {
      return findArrAndIndex(page.nodes, selectedNodeId);
    }
    return undefined;
  }, [page?.nodes, selectedNodeId]);

  if (!nodeInfo) return undefined;
  const { node } = nodeInfo;
  return node;
}