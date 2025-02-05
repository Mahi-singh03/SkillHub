import express from 'express';
import { register } from './authController.js';

const router = express.Router();

router.post('/Registration', register);

export default router;