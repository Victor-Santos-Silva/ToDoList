import { Router } from "express";
import listaController from "../controller/listaController.js";
const router = Router();

//ver tarefas
router.get("/", listaController.getAllLists);

//criar tarefas
router.post("/", listaController.createList);

//atualizar tarefas
router.put("/:id", listaController.updateList);

//deletar tarefas
router.delete("/:id", listaController.deleteList);

export default router;