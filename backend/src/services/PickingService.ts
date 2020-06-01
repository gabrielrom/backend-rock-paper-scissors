import Picking from '../models/Picking';

class PickingService {
  private options = ['rock', 'paper', 'scissor'];

  public execute(userOption: string): Picking {
    const pickingComputer = this.options[Math.floor(Math.random() * 3)];

    const picking = new Picking(userOption, pickingComputer);

    return picking;
  }
}

export default PickingService;
