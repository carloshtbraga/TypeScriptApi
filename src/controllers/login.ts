import { Request, Response } from 'express';
import login from '../services/login';

async function loginUser(req: Request, res: Response):Promise<Response> {
  const { username, password } = req.body;
  const { data, status } = await login.login({ username, password });
  if (status === 'NOT_FOUND') return res.status(401).json(data);
  return res.status(200).json({ token: data });
}

export default loginUser;