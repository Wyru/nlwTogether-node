import express from 'express';
import { CreateTagController } from '../controllers/CreateTagController';

const tagsRouter = express.Router();

tagsRouter.post('/tags', CreateTagController.handle);

export default tagsRouter;