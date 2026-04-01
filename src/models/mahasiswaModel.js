import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAll = async () => {
  return await prisma.mahasiswa.findMany();
};

export const getById = async (id) => {
  return await prisma.mahasiswa.findUnique({
    where: { id: Number(id) },
  });
};

export const create = async (data) => {
  return await prisma.mahasiswa.create({
    data: {
      nama: data.nama,
      nim: data.nim,
    },
  });
};

export const update = async (id, data) => {
  return await prisma.mahasiswa.update({
    where: { id: Number(id) },
    data: data,
  });
};

export const remove = async (id) => {
  return await prisma.mahasiswa.delete({
    where: { id: Number(id) },
  });
};