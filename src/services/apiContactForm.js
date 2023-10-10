import supabase from "./supabase";

export async function createContactForm(newContactForm) {
  const { data, error } = await supabase.from("contact").insert([
    {
      id: newContactForm.id,
      nume: newContactForm.nume,
      prenume: newContactForm.prenume,
      companie: newContactForm.companie,
      functia: newContactForm.functia,
      email: newContactForm.email,
      telefon: newContactForm.telefon,
      interesat: newContactForm.interesat,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("Contact form could not be sent");
  }
  return data;
}
