import { Request, Response } from 'express';
import orders from '../services/orders';

async function getAllOrders(req: Request, res: Response):Promise<Response> {
  const { data } = await orders.getAllOrders();
  return res.status(200).json(data);
}

async function addOrder(req: Request, res: Response):Promise<Response> {
  const { body } = req;
  const { data } = await orders.addOrder(body);
  return res.status(201).json(data);
}

export default { getAllOrders, addOrder };