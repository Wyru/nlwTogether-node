import express from 'express';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const authenticationRoutes = express.Router();

authenticationRoutes.post('/signIn', AuthenticateUserController.handle);

export default authenticationRoutes;