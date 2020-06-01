declare namespace Express {
  export interface Request {
    pickings: {
      pickingUser: string;
      pickingComputer: string;
    };
  }
}
