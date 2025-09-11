import useStore from "../store";

export default function useGetPageInfo() {
  const { page } = useStore();

  return page;
}