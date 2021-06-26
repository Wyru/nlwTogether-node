import express from 'express';
import { CreateComplimentController } from '../controllers/CreateComplimentController';
import { GetUserReceivedComplimentsController } from '../controllers/GetUserReceivedComplimentsController';
import { GetUserSendedComplimentsController } from '../controllers/GetUserSendedComplimentsController';
import { AuthorizationMiddleware } from '../middlewares/AuthorizationMiddleware';

const complimentsRoutes = express.Router();

complimentsRoutes.get('/users/compliments/sended', AuthorizationMiddleware.ensureSession, GetUserSendedComplimentsController.handle);
complimentsRoutes.get('/users/compliments/received', AuthorizationMiddleware.ensureSession, GetUserReceivedComplimentsController.handle);
complimentsRoutes.post('/compliments', AuthorizationMiddleware.ensureSession, CreateComplimentController.handle);

export default complimentsRoutes;