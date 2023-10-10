import { useQuery } from "@tanstack/react-query";
import { getSoftware } from "../services/apiSoftware";

export function useSoftware() {
  const {
    isLoading,
    data: software,
    error,
  } = useQuery({
    queryKey: ["software"],
    queryFn: getSoftware,
  });

  return { isLoading, error, software };
}
