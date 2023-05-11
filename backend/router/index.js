import authRouter from './auth/auth.js';
import express from 'express';
import clientsRouter from './clients/clients.js';

const router = express.Router();

router.use('/auth', authRouter);
router.use('/clients', clientsRouter);

export default router;
