import { NextFunction, Request, Response } from 'express';

const loginUserAndPwValidation = async (req:Request, res:Response, n: NextFunction):
Promise<NextFunction | Response | undefined> => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json(
      { message: '"username" and "password" are required' },
    ); 
  } 
  n();
};

export default loginUserAndPwValidation;