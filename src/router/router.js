import { Router } from 'express';
import lista from './listaRouter.js';

const router = Router();

router.use('/tarefa', lista);


export default router;
