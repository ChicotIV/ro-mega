import { useQuery } from "@tanstack/react-query";
import { getDimf2023Data } from "../hooks/useGalery";

export function useGaleryDimf2023() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["galerie_dimf2023"],
    queryFn: getDimf2023Data,
  });

  return { isLoading, error, data };
}
