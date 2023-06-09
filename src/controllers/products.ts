import { Request, Response } from 'express';
import products from '../services/products';

async function addProduct(req: Request, res: Response):Promise<Response> {
  const { body } = req;
  const { data } = await products.addProduct(body);
  return res.status(201).json(data);
}

async function getAllProducts(req: Request, res: Response):Promise<Response> {
  const { data } = await products.getAllProducts();
  return res.status(200).json(data);
}

export default { addProduct, getAllProducts };