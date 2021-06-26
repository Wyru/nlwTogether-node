import express from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { GetTagsController } from '../controllers/GetTagsController';
import { AuthorizationMiddleware } from '../middlewares/AuthorizationMiddleware';

AuthorizationMiddleware
const tagsRouter = express.Router();

tagsRouter.get(
  '/tags',
  GetTagsController.handle
);

tagsRouter.post(
  '/tags',
  AuthorizationMiddleware.ensureSession,
  AuthorizationMiddleware.ensureAdmin,
  CreateTagController.handle
);

export default tagsRouter;