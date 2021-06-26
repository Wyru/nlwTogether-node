import express from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { AuthorizationMiddleware } from '../middlewares/AuthorizationMiddleware';

AuthorizationMiddleware
const tagsRouter = express.Router();

tagsRouter.post(
  '/tags',
  AuthorizationMiddleware.ensureSession,
  AuthorizationMiddleware.ensureAdmin,
  CreateTagController.handle
);

export default tagsRouter;