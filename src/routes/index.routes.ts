import { Router } from 'express';

import authenticationRoutes from './authentication.routes';
import complimentsRoutes from './compliments.routes';
import tagsRoutes from './tags.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use(usersRoutes);
routes.use(tagsRoutes);
routes.use(authenticationRoutes);
routes.use(complimentsRoutes);


export default routes;