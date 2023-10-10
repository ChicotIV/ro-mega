import { useQuery } from "@tanstack/react-query";
import { getEvenimente } from "../services/apiEvenimente";

export function useEvenimente() {
  const {
    isLoading,
    data: evenimente,
    error,
  } = useQuery({
    queryKey: ["evenimente"],
    queryFn: getEvenimente,
  });

  return { isLoading, error, evenimente };
}
