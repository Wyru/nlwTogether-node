import express from 'express';
import { CreateUserController } from '../controllers/CreateUserController';

const userRouter = express.Router();

userRouter.post('/users', CreateUserController.handle);

export default userRouter;