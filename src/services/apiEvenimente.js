import supabase from "./supabase";

export async function getEvenimente() {
  const { data, error } = await supabase
    .from("evenimente")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error(error);
    throw new Error("Evenimente could not be loaded");
  }
  return data;
}
