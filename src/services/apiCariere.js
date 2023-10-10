import supabase from "./supabase";

export async function createCariereForm(newCreateCariereForm) {
  const { data, error } = await supabase.from("cariere").insert([
    {
      id: newCreateCariereForm.id,
      nume: newCreateCariereForm.nume,
      email: newCreateCariereForm.email,
      telefon: newCreateCariereForm.telefon,
      cv: newCreateCariereForm.cv,
      job: newCreateCariereForm.job,
      mesaj: newCreateCariereForm.mesaj,
    },
  ]);

  if (error) {
    console.error(error);
    throw new Error("Contact form could not be sent");
  }
  return data;
}
