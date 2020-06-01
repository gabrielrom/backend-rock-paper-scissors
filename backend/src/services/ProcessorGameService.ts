import Picking from '../models/Picking';
import whosWin from '../shared/ConditionWin';

export interface IWinner {
  ganhador: string;
}

class ProcessorGameService {
  public execute(pickings: Picking): IWinner | undefined {
    const winner = whosWin(pickings.pickingUser, pickings.pickingComputer);

    return winner;
  }
}

export default ProcessorGameService;
