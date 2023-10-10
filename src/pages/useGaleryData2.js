import { useQuery } from "@tanstack/react-query";
import { getMetalShow2023Data } from "../hooks/useGalery";

export function useGaleryMetalShow2023() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["galerie_metalshow&tib2023"],
    queryFn: getMetalShow2023Data,
  });

  return { isLoading, error, data };
}
