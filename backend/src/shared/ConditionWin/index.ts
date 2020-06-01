import { IWinner } from '../../services/ProcessorGameService';

function whosWin(
  userOption: string,
  computerOption: string,
): IWinner | undefined {
  const winner: IWinner = {
    ganhador: '',
  };

  if (userOption === 'paper' && computerOption === 'rock') {
    winner.ganhador = 'user';
    return winner;
  }

  if (userOption === 'paper' && computerOption === 'scissor') {
    winner.ganhador = 'computer';
    return winner;
  }

  if (userOption === 'paper' && computerOption === 'paper') {
    winner.ganhador = 'empate';
    return winner;
  }

  if (userOption === 'rock' && computerOption === 'paper') {
    winner.ganhador = 'computer';
    return winner;
  }

  if (userOption === 'rock' && computerOption === 'scissor') {
    winner.ganhador = 'user';
    return winner;
  }

  if (userOption === 'rock' && computerOption === 'rock') {
    winner.ganhador = 'empate';
    return winner;
  }

  if (userOption === 'scissor' && computerOption === 'rock') {
    winner.ganhador = 'computer';
    return winner;
  }

  if (userOption === 'scissor' && computerOption === 'paper') {
    winner.ganhador = 'user';
    return winner;
  }

  if (userOption === 'scissor' && computerOption === 'scissor') {
    winner.ganhador = 'empate';
    return winner;
  }

  return;
}

export default whosWin;
