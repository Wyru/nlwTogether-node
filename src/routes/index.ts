import { Router } from 'express';
import tagsRouter from './tags.router';
import userRouter from './user.router';

const router = Router();

router.use(userRouter);
router.use(tagsRouter);


export default router;