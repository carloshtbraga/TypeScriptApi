import { Request, Response } from 'express';
import orders from '../services/orders';

async function getAllOrders(req: Request, res: Response):Promise<Response> {
  const { data } = await orders.getAllOrders();
  return res.status(200).json(data);
}

export default { getAllOrders };