import { ServiceResponse } from '../types/ServiceResponse';
import productModel from '../database/models/product.model';
import orderModel from '../database/models/order.model';
import { Order2 } from '../types/Order';

async function getAllOrders():Promise<ServiceResponse<Order2[]>> {
  const result = await orderModel.findAll({ include: { model: productModel, as: 'productIds' } });
  const workedResult: Order2[] = result.map((e) => ({
    id: e.dataValues.id,
    userId: e.dataValues.userId,
    productIds: e.dataValues.productIds?.map((i) => i.id),
  }));
  return { status: 'SUCCESSFUL', data: workedResult };
}

export default { getAllOrders };