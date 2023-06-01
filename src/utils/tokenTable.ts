import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { User } from 'src/types/User';

const jwtsecret = process.env.JWT_SECRET || 'secret';

export type IdAndUsername = {
  id: string,
  username: string
};

const tokenGenerator = ({ id, username }:IdAndUsername):string => {
  const payload = {
    id,
    username,
  };

  const token = jwt.sign(payload, jwtsecret, {
    expiresIn: '24d',
    algorithm: 'HS256',
  });
  return token;
};

const tokenVerifier = (req: Request, res: Response, next: NextFunction):Response | undefined => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, jwtsecret) as User;
    // req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

export default { tokenGenerator, tokenVerifier };