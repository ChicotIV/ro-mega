import supabase from "../services/supabase";

export async function getDimf2023Data() {
  const { data, error } = await supabase.storage
    .from("galerie_dimf2023")
    .list(null, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error(error);
    throw new Error("Dimf2023 data could not be loaded");
  }
  return data;
}

export async function getMetalShow2023Data() {
  const { data, error } = await supabase.storage
    .from("galerie_metalshow2023")
    .list(null, {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  if (error) {
    console.error(error);
    throw new Error("MetalShow2023 data could not be loaded");
  }
  return data;
}
