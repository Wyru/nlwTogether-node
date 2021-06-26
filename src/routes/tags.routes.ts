import express from 'express';
import { CreateTagController } from '../controllers/CreateTagController';
import { GetTagsController } from '../controllers/GetTagsController';
import { AuthorizationMiddleware } from '../middlewares/AuthorizationMiddleware';

AuthorizationMiddleware
const tagsRoutes = express.Router();

tagsRoutes.get(
  '/tags',
  GetTagsController.handle
);

tagsRoutes.post(
  '/tags',
  AuthorizationMiddleware.ensureSession,
  AuthorizationMiddleware.ensureAdmin,
  CreateTagController.handle
);

export default tagsRoutes;