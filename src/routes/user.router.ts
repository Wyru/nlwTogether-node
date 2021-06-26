import express from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { GetUserController } from '../controllers/GetUsersController';

const userRouter = express.Router();

userRouter.get('/users', GetUserController.handle);
userRouter.post('/users', CreateUserController.handle);

export default userRouter;