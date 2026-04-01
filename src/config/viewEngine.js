import ejs from "ejs";
import fs from "fs";
import path from "path";

export const render = async (view, data = {}, c) => {
  // Arahkan ke src/views/
  const viewPath = path.join(process.cwd(), "src", "views", `${view}.ejs`);
  
  try {
    const template = fs.readFileSync(viewPath, "utf-8");
    return ejs.render(template, data, {
      filename: viewPath, // Wajib ada agar include/layout berfungsi
    });
  } catch (error) {
    console.error("View Error:", error.message);
    throw new Error(`Gagal memuat view: ${view}. Pastikan file ada di src/views/`);
  }
};