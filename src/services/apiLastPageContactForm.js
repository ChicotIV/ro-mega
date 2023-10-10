import supabase from "./supabase";

export async function lastPageContactForm(newLastPageContactForm) {
  const { data, error } = await supabase.from("lastPageContactForm").insert([
    {
      nume: newLastPageContactForm.nume,
      email: newLastPageContactForm.email,
      telefon: newLastPageContactForm.telefon,
      mesaj: newLastPageContactForm.mesaj,
      id: newLastPageContactForm.id,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("Last page Contact form could not be sent");
  }
  return data;
}
