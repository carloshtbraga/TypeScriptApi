import { Router } from 'express';
import orders from '../controllers/orders';

const orderRouter = Router();

orderRouter.get('/orders', orders.getAllOrders);

export default orderRouter;