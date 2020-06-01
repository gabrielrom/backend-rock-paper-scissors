import { Router } from 'express';

import pikingRoute from './picking.routes';

const routes = Router();

routes.use('/picking', pikingRoute);

export default routes;
