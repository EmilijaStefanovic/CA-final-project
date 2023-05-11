import express from 'express';
import { signIn, signUp } from '../../controllers/auth/index.js';

const router = express.Router();

router.post('/signin', signIn);
router.post('/signup', signUp);
// router.post('/signout', signOut);

export default router;
