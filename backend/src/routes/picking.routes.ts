import { Router } from 'express';
import PickingsController from '../controllers/PickingsController';

const pickingRouter = Router();
const pickingsController = new PickingsController();

pickingRouter.post('/', pickingsController.create);
pickingRouter.get('/whoswin', pickingsController.show);

export default pickingRouter;
