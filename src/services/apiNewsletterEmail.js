import supabase from "./supabase";

export async function createNewsletterEmail(newEmail) {
  const { data, error } = await supabase.from("emails").insert([
    {
      id: newEmail.id,
      email: newEmail.email,
      masini_unelte: newEmail.masini_unelte,
      sisteme_de_masura_si_control: newEmail.sisteme_de_masura_si_control,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("Email could not be loaded");
  }
  return data;
}
