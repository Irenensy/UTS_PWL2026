import { render } from "../config/viewEngine";
import * as model from "../models/mahasiswaModel";

// 1. LIST (Menampilkan semua data)
export const index = async (c) => {
  const data = await model.getAll(); // Tambahkan await
  const success = c.req.query("success");
  const error = c.req.query("error");
  
  return c.html(
    await render("mahasiswa/index", {
      title: "Data Mahasiswa",
      mahasiswa: data,
      success,
      error,
    }, c)
  );
};

// 2. FORM CREATE (Menampilkan form tambah)
export const create = async (c) => {
  return c.html(
    await render("mahasiswa/create", {
      title: "Tambah Mahasiswa",
    }, c)
  );
};

// 3. STORE (Proses simpan data ke DB)
export const store = async (c) => {
  const body = await c.req.parseBody();

  if (!body.nama || !body.nim) {
    return c.redirect("/mahasiswa/create?error=Semua field wajib diisi");
  }

  await model.create({ // Tambahkan await
    nama: body.nama,
    nim: body.nim,
  });

  return c.redirect("/mahasiswa?success=Data berhasil ditambahkan");
};

// 4. FORM EDIT (Menampilkan form edit dengan data lama)
export const edit = async (c) => {
  const id = c.req.param("id"); // Ambil ID dari URL
  const data = await model.getById(id); // Tambahkan await
  
  if (!data) return c.redirect("/mahasiswa?error=Data tidak ditemukan");

  return c.html(
    await render("mahasiswa/edit", {
      title: "Edit Mahasiswa",
      mhs: data,
    }, c)
  );
};

// 5. UPDATE (Proses update data di DB)
export const update = async (c) => {
  const id = c.req.param("id");
  const body = await c.req.parseBody();

  if (!body.nama || !body.nim) {
    return c.redirect(`/mahasiswa/edit/${id}?error=Field tidak boleh kosong`);
  }

  await model.update(id, { // Tambahkan await
    nama: body.nama,
    nim: body.nim,
  });

  return c.redirect("/mahasiswa?success=Data berhasil diupdate");
};

// 6. DELETE (Proses hapus data)
export const destroy = async (c) => {
  const id = c.req.param("id");
  await model.remove(id); // Tambahkan await
  
  return c.redirect("/mahasiswa?success=Data berhasil dihapus");
};