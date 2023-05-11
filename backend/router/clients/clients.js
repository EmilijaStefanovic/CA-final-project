import express from 'express';
import {
  createNewClient,
  deleteClientById,
  getAllClientsById,
} from '../../controllers/clients/index.js';

const router = express.Router();

router.post('/client', createNewClient);
router.delete('/client/:id', deleteClientById);
router.get('/client/:id', getAllClientsById);

export default router;
