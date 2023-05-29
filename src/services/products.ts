import { ServiceResponse } from 'src/types/ServiceResponse';
import productModel from '../database/models/product.model';
import { Product } from '../types/Product';

async function addProduct({ name, price, orderId }:Product):Promise<ServiceResponse<Product>> {
  const { dataValues } = await productModel.create({ name, price, orderId });
  return { status: 'SUCCESSFUL', data: dataValues };
}

async function getAllProducts():Promise<ServiceResponse<Product[]>> {
  const result = await productModel.findAll();
  const allDataValuesFromResult = result.map((e) => e.dataValues);
  return { status: 'SUCCESSFUL', data: allDataValuesFromResult };
}

export default { addProduct, getAllProducts };