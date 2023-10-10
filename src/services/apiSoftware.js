import supabase from "./supabase";

export async function getSoftware() {
  const { data, error } = await supabase.from("software").select("*");

  if (error) {
    console.error(error);
    throw new Error("Software could not be loaded");
  }
  return data;
}
