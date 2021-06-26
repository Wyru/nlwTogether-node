import { Router } from 'express';

import authenticationRoutes from './authentication.routes';
import tagsRoutes from './tags.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use(usersRoutes);
routes.use(tagsRoutes);
routes.use(authenticationRoutes);


export default routes;