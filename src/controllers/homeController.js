import { render } from "../config/viewEngine";
import { getAll } from "../models/mahasiswaModel";

export const home = async (c) => {
  const mahasiswa = await getAll();
  
  const html = await render("home", {
    title: "Dashboard Bun MVC",
    mahasiswa: mahasiswa,
    totalMahasiswa: mahasiswa.length,
  }, c);

  return c.html(html);
};