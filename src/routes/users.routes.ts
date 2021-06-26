import express from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUserController } from '../controllers/GetUsersController';

const usersRoutes = express.Router();

usersRoutes.get('/users', GetUserController.handle);
usersRoutes.post('/users', CreateUserController.handle);

export default usersRoutes;