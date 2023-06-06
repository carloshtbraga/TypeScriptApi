import ProductModel from '../database/models/product.model';
import { ServiceResponse } from '../types/ServiceResponse';
import orderModel from '../database/models/order.model';
import { Order2, Order } from '../types/Order';

async function getAllOrders():Promise<ServiceResponse<Order2[]>> {
  const result = await orderModel.findAll({ include: { model: ProductModel, as: 'productIds' } });
  const workedResult: Order2[] = result.map((e) => ({
    id: e.dataValues.id,
    userId: e.dataValues.userId,
    productIds: e.dataValues.productIds?.map((i) => i.id),
  }));
  return { status: 'SUCCESSFUL', data: workedResult };
}

export type OrderNoId = {
  id? : number
  userId: number
  productIds?: number[]
};

async function addOrder({ productIds, userId }:OrderNoId):Promise<ServiceResponse<OrderNoId>> {
  await orderModel.create({ productIds, userId } as Order);
  return { status: 'SUCCESSFUL', data: { productIds, userId } };
}

export default { getAllOrders, addOrder };