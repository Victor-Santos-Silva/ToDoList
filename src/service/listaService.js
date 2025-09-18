import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const listaService = {
  getListaAll: async () => {
    return await prisma.tarefa.findMany();
  },

  createList: async (data) => {
    const { title } = data;
    return await prisma.tarefa.create({
      data: {
        title: title,
      },
    });
  },

  updateList: async (id, data) => {
    const { done, title } = data;
    return await prisma.tarefa.update({
      where: { id: parseInt(id) },
      data: {
        done: done,
        title: title,
      },
    });
  },

  deleteList: async (id) => {
    return await prisma.tarefa.delete({
      where: { id: parseInt(id) },
    });
  },
};

export default listaService;
