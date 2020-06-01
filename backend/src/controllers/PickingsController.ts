import { Request, Response } from 'express';

import PickingService from '../services/PickingService';
import ProcessorGameService from '../services/ProcessorGameService';
import Picking from '../models/Picking';

let pickings: Picking;

export default class PickingsController {
  public create(request: Request, response: Response): Response {
    const { userOption } = request.body;

    const pickingService = new PickingService();

    const picking = pickingService.execute(userOption);

    pickings = picking;

    return response.json(picking);
  }

  public show(request: Request, response: Response): Response {
    const processorGameService = new ProcessorGameService();

    const winner = processorGameService.execute(pickings);

    return response.json({
      pick: {
        userOption: pickings.pickingUser,
        computerOption: pickings.pickingComputer,
      },
      winner,
    });
  }
}
