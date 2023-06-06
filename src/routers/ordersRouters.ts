import { Router } from 'express';
import tokenTable from '../utils/tokenTable';
import postOrderValidation from '../middlewares/postOrderValidation';
import orders from '../controllers/orders';

const orderRouter = Router();

orderRouter.get('/orders', orders.getAllOrders);
orderRouter.post(
  '/orders',
  tokenTable.tokenVerifier,
  postOrderValidation.postOrderValidationUserId,
  postOrderValidation.postOrderValidationProductId,
  orders.addOrder,
);

export default orderRouter;