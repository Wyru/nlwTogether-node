import express from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUsersController } from '../controllers/GetUsersController';

const usersRoutes = express.Router();

usersRoutes.get('/users', GetUsersController.handle);
usersRoutes.post('/users', CreateUserController.handle);

export default usersRoutes;