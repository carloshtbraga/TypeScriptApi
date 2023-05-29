import { ServiceResponse } from 'src/types/ServiceResponse';
import ProductModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function addProduct({ name, price, orderId }:Product):Promise<ServiceResponse<Product>> {
  const result = await ProductModel.create({ name, price, orderId });
  return { status: 'SUCCESSFUL', data: result.dataValues };
}

async function getAllProducts():Promise<ServiceResponse<Product[]>> {
  const result = await ProductModel.findAll();
  return { status: 'SUCCESSFUL', data: result.map((e) => e.dataValues) };
}

export default { addProduct, getAllProducts };