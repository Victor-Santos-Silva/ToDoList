import listaService from "../service/listaService.js";

const listaController = {
  getAllLists: async (req, res) => {
    try {
      const listas = await listaService.getListaAll();
      res.status(200).json({
        message: "Tarefas recuperadas com sucesso!",
        listas,
      });
    } catch (error) {
      console.error("Error fetching lists:", error);
      res.status(500).json({ message: "Erro ao buscar listas", error });
    }
  },

  createList: async (req, res) => {
    try {
      const newLista = await listaService.createList(req.body);
      res.status(201).json({
        message: "Tarefa criada com sucesso!",
        lista: newLista,
      });
    } catch (error) {
      console.error("Error creating list:", error);
      res.status(500).json({ message: "Erro ao criar lista", error });
    }
  },

  updateList: async (req, res) => {
    try {
      const updatedLista = await listaService.updateList(
        req.params.id,
        req.body
      );
      if (updatedLista) {
        res.status(200).json({
          message: "Tarefa atualizada com sucesso!",
          lista: updatedLista,
        });
      } else {
        res.status(404).json({ message: "Lista não encontrada" });
      }
    } catch (error) {
      console.error("Error updating list:", error);
      res.status(500).json({ message: "Erro ao atualizar lista", error });
    }
  },
  deleteList: async (req, res) => {
    try {
      const deletedLista = await listaService.deleteList(req.params.id);
      if (deletedLista) {
        res.status(200).json({
          message: "Tarefa deletada com sucesso!",
          lista: deletedLista,
        });
      } else {
        res.status(404).json({ message: "Lista não encontrada" });
      }
    } catch (error) {
      console.error("Error deleting list:", error);
      res.status(500).json({ message: "Erro ao deletar lista", error });
    }
  },
};

export default listaController;
