import express from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { AuthorizationMiddleware } from '../middlewares/AuthorizationMiddleware';

const complimentsRoutes = express.Router();

complimentsRoutes.post('/compliments', AuthorizationMiddleware.ensureSession, CreateComplimentController.handle);

export default complimentsRoutes;